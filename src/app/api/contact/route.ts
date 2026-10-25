import { NextRequest, NextResponse } from "next/server";
import { ContactData, validateContact } from "@/lib/contact";
export async function POST(request: NextRequest) {
  if (
    request.headers.get("origin") &&
    request.headers.get("origin") !== request.nextUrl.origin &&
    new URL(request.headers.get("origin")!).host !== request.headers.get("host")
  )
    return NextResponse.json(
      { message: "Request origin not allowed." },
      { status: 403 },
    );
  if (Number(request.headers.get("content-length")) > 20000)
    return NextResponse.json(
      { message: "Request is too large." },
      { status: 413 },
    );
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
    if (!raw || typeof raw !== "object") throw new Error();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
  const data = Object.fromEntries(
    ["name", "email", "company", "category", "message", "website"].map((k) => [
      k,
      typeof raw[k] === "string" ? (raw[k] as string).trim() : "",
    ]),
  ) as ContactData;
  if (data.website)
    return NextResponse.json(
      { message: "Submission rejected by spam protection." },
      { status: 400 },
    );
  const errors = validateContact(data);
  if (Object.keys(errors).length)
    return NextResponse.json(
      { errors, message: "Please review the highlighted fields." },
      { status: 422 },
    );
  // Server-only: never expose the service-role credential to a Client Component.
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (supabaseUrl && serviceKey) {
    try {
      const response = await fetch(
        `${supabaseUrl.replace(/\/$/, "")}/rest/v1/portfolio_enquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: serviceKey,
            Authorization: `Bearer ${serviceKey}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            company: data.company,
            category: data.category,
            message: data.message,
          }),
          signal: AbortSignal.timeout(10000),
          cache: "no-store",
        },
      );
      if (!response.ok) throw new Error("Storage failed");
      return NextResponse.json({
        message:
          "Your enquiry has been received. Thank you for getting in touch.",
      });
    } catch {
      return NextResponse.json(
        {
          message:
            "We could not save your enquiry. Please try again later; receipt has not been confirmed.",
        },
        { status: 502 },
      );
    }
  }
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url)
    return NextResponse.json(
      {
        message:
          "Enquiries are not connected yet. Your message has not been sent. Please return once contact details are published.",
      },
      { status: 503 },
    );
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company,
        category: data.category,
        message: data.message,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error();
    return NextResponse.json({
      message:
        "Your enquiry has been delivered. Thank you for getting in touch.",
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "Delivery failed. Your message has not been sent. Please try again later.",
      },
      { status: 502 },
    );
  }
}
