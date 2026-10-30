import { statSync } from "node:fs";
import { expect, test, type Page } from "@playwright/test";

const RESUME_URL = "/resume/Sanjay-Purushothaman-Resume.pdf";
const RESUME_NAME = "Sanjay-Purushothaman-Resume.pdf";
const WHATSAPP = `https://wa.me/919061381726?text=${encodeURIComponent("Hello, more information!")}`;

const primaryNav = (page: Page) => page.getByRole("navigation", { name: "Primary" });

test.describe("theme", () => {
  test("follows the system theme on first load", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  });

  test("toggle switches the theme and the choice survives a reload", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).not.toHaveClass(/\bdark\b/);

    await primaryNav(page).getByRole("button", { name: "Switch to dark theme" }).click();
    await expect(html).toHaveClass(/\bdark\b/);

    await page.reload();
    await expect(html).toHaveClass(/\bdark\b/);
    await expect(primaryNav(page).getByRole("button", { name: "Switch to light theme" })).toBeVisible();
  });
});

test("every desktop nav link scrolls to its section", async ({ page }) => {
  await page.goto("/");
  const links = primaryNav(page).getByRole("list").getByRole("link");
  const count = await links.count();
  expect(count).toBe(7);

  for (let i = 0; i < count; i++) {
    const link = links.nth(i);
    const id = (await link.getAttribute("href"))!.slice(1);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}`)).toBeInViewport();
  }
});

test.describe("resume", () => {
  test("serves the new PDF", async ({ request }) => {
    const res = await request.get(RESUME_URL);
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("application/pdf");
    const body = await res.body();
    expect(body.subarray(0, 5).toString()).toBe("%PDF-");
    // Same bytes as the file in public/, so replacing the resume never breaks this test.
    expect(body.length).toBe(statSync(`public${RESUME_URL}`).size);
  });

  test("every download link points to it with the right file name", async ({ page }) => {
    await page.goto("/");
    const links = page.locator("a[download]");
    expect(await links.count()).toBeGreaterThanOrEqual(3);
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute("href", RESUME_URL);
      await expect(link).toHaveAttribute("download", RESUME_NAME);
    }

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.locator("#home").getByRole("link", { name: "Download Resume" }).click(),
    ]);
    expect(download.suggestedFilename()).toBe(RESUME_NAME);
  });
});

test.describe("contact form", () => {
  test("shows validation errors and sends nothing", async ({ page }) => {
    let gateCalls = 0;
    await page.route("**/api/contact", (route) => {
      gateCalls++;
      return route.continue();
    });
    await page.goto("/#contact");
    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(page.getByText("Please enter your name")).toBeVisible();
    await expect(page.getByText("Please enter a valid email address")).toBeVisible();
    await expect(page.getByText(/Please write at least a sentence/)).toBeVisible();
    await expect(page.getByLabel("Name")).toHaveAttribute("aria-invalid", "true");
    expect(gateCalls).toBe(0);
  });

  test("a valid message passes the gate, is sent (mocked) and the form clears", async ({ page }) => {
    // EmailJS refuses to send from automated browsers (blockHeadless); look like a normal one.
    await page.addInitScript(() => Object.defineProperty(navigator, "webdriver", { get: () => false }));

    const sent: string[] = [];
    await page.route("https://api.emailjs.com/**", async (route) => {
      const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "content-type" };
      if (route.request().method() === "OPTIONS") return route.fulfill({ status: 204, headers: cors });
      sent.push(route.request().postData() ?? "");
      return route.fulfill({ status: 200, body: "OK", headers: { ...cors, "Content-Type": "text/plain" } });
    });

    await page.goto("/#contact");
    const loadedAt = Date.now();
    await page.getByLabel("Name").fill("Playwright");
    await page.getByLabel("Mail").fill("playwright@example.com");
    await page.getByLabel(/Subject/).fill("Smoke test");
    await page.getByLabel("Message").fill("This is an automated smoke-test message.");
    // The gate treats submissions within 3s of the form appearing as bots.
    await page.waitForTimeout(Math.max(0, 3_200 - (Date.now() - loadedAt)));

    const gate = page.waitForResponse("**/api/contact");
    await page.getByRole("button", { name: "Send Message" }).click();
    expect(await (await gate).json()).toEqual({ ok: true, deliver: true });

    await expect(page.getByText("Thanks — your message is on its way.", { exact: false })).toBeVisible();
    await expect(page.getByLabel("Name")).toHaveValue("");
    await expect(page.getByLabel("Message")).toHaveValue("");

    expect(sent).toHaveLength(1);
    const payload = JSON.parse(sent[0]);
    expect(payload.service_id).toBe("service_test");
    expect(payload.template_params).toMatchObject({
      name: "Playwright",
      email: "playwright@example.com",
      subject: "Smoke test",
      message: "This is an automated smoke-test message.",
      project: "This is an automated smoke-test message.",
    });
  });
});

test("WhatsApp button uses the right number and encoded greeting", async ({ page }) => {
  await page.goto("/");
  const button = page.locator("#contact").getByRole("link", { name: "Chat on WhatsApp" });
  await expect(button).toHaveAttribute("href", WHATSAPP);
  await expect(button).toHaveAttribute("target", "_blank");
  await expect(button).toHaveAttribute("rel", /noopener/);
  await expect(button).toHaveAttribute("rel", /noreferrer/);
});
