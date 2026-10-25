"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { enquiryCategories } from "@/config/portfolio";
import { ContactData, validateContact } from "@/lib/contact";
export function ContactForm() {
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactData, string>>
  >({});
  const [state, setState] = useState("");
  const [pending, setPending] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as ContactData;
    const errs = validateContact(d);
    setErrors(errs);
    setState("");
    if (Object.keys(errs).length) {
      form
        .querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)
        ?.focus();
      return;
    }
    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(d),
      });
      const result = await response.json();
      setState(result.message);
      if (response.ok) form.reset();
      else if (result.errors) setErrors(result.errors);
    } catch {
      setState(
        "Unable to connect. Your message has not been sent. Please try again later.",
      );
    } finally {
      setPending(false);
    }
  }
  const field = (
    name: "name" | "email" | "company",
    label: string,
    placeholder: string,
  ) => (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {name !== "company" ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={name === "email" ? "email" : "text"}
        autoComplete={name === "company" ? "organization" : name}
        placeholder={placeholder}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? name + "-error" : undefined}
      />
      {errors[name] && (
        <span className="field-error" id={name + "-error"}>
          {errors[name]}
        </span>
      )}
    </div>
  );
  return (
    <form onSubmit={submit} noValidate className="contact-form">
      <div className="form-row">
        {field("name", "Your name", "How should I address you?")}
        {field("email", "Email address", "you@company.com")}
      </div>
      {field("company", "Company", "Your company or next big idea")}
      <div className="form-field">
        <label htmlFor="category">What are we building? *</label>
        <select
          id="category"
          name="category"
          defaultValue=""
          aria-invalid={!!errors.category}
          aria-describedby={errors.category ? "category-error" : undefined}
        >
          <option value="" disabled>
            Select an enquiry category
          </option>
          {enquiryCategories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        {errors.category && (
          <span className="field-error" id="category-error">
            {errors.category}
          </span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="message">Tell me about your project *</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder="The challenge, the idea, and where you’d like to go."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span className="field-error" id="message-error">
            {errors.message}
          </span>
        )}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave empty</label>
        <input name="website" id="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-bottom">
        <small>Your details are used only to respond to your enquiry.</small>
        <button disabled={pending} className="button blue">
          {pending ? "SENDING…" : "SEND ENQUIRY"} <ArrowUpRight size={18} />
        </button>
      </div>
      <p role="status" aria-live="polite" className="form-status">
        {state}
      </p>
    </form>
  );
}
