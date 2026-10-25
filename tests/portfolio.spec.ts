import { test, expect } from "@playwright/test";
const base = "http://127.0.0.1:3000";
test("desktop content, navigation and honest form states", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(base);
  await expect(page.locator("h1")).toContainText("BUILT FROM");
  await expect(page.locator(".timeline-entry")).toHaveCount(7);
  await page.locator('.navlinks a[href="#story"]').click();
  await expect(page).toHaveURL(/#story/);
  await page.goto(base + "/#contact");
  await page.getByRole("button", { name: "SEND ENQUIRY" }).click();
  await expect(page.locator("#name-error")).toBeVisible();
  await page.locator("#name").fill("Test Founder");
  await page.locator("#email").fill("test@example.com");
  await page.locator("#category").selectOption({ index: 1 });
  await page
    .locator("#message")
    .fill("We need infrastructure planning for a new application.");
  await page.getByRole("button", { name: "SEND ENQUIRY" }).click();
  await expect(page.getByRole("status")).toContainText(
    "Your message has not been sent",
  );
  expect(errors).toEqual([]);
});
for (const width of [390, 768, 1440])
  test(`responsive at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base);
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (width === 390) {
      await page.getByRole("button", { name: "Open menu" }).click();
      await page.locator('.navlinks a[href="#capabilities"]').click();
      await expect(page).toHaveURL(/#capabilities/);
      await expect(
        page.getByRole("button", { name: "Open menu" }),
      ).toBeVisible();
    }
    await page.goto(base);
    await page.screenshot({ path: `tests/preview-${width}.png` });
  });
test("server validation, spam trap and missing delivery service", async ({
  request,
}) => {
  const bad = await request.post(base + "/api/contact", {
    data: { name: "x" },
  });
  expect(bad.status()).toBe(422);
  const spam = await request.post(base + "/api/contact", {
    data: { website: "bot" },
  });
  expect(spam.status()).toBe(400);
  const valid = await request.post(base + "/api/contact", {
    data: {
      name: "Test User",
      email: "test@example.com",
      company: "",
      category: "General professional enquiries",
      message: "A valid project enquiry for testing.",
      website: "",
    },
  });
  expect(valid.status()).toBe(503);
});
