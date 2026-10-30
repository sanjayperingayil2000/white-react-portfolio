import { expect, test, type Page } from "@playwright/test";

const noHorizontalOverflow = (page: Page) =>
  page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);

test("no horizontal overflow, top to bottom", async ({ page }) => {
  await page.goto("/");
  expect(await noHorizontalOverflow(page)).toBe(true);
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
  expect(await noHorizontalOverflow(page)).toBe(true);
});

test("menu opens as a modal sheet, locks scroll and closes on Escape", async ({ page }) => {
  await page.goto("/");
  const menu = page.getByRole("dialog", { name: "Site menu" });

  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(menu).toBeVisible();
  await expect(menu.getByRole("button", { name: "Close menu" })).toBeFocused();
  await expect(menu.getByRole("button", { name: /theme/i })).toBeVisible();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).toBe("hidden");

  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).not.toBe("hidden");
});

test("tapping a menu link closes the sheet and scrolls to the section", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const menu = page.getByRole("dialog", { name: "Site menu" });
  await menu.getByRole("link", { name: "Skills" }).click();

  await expect(menu).toBeHidden();
  await expect(page.locator("#skills")).toBeInViewport();
});

test("floating WhatsApp button is visible with the right link", async ({ page }) => {
  await page.goto("/");
  const floating = page.locator("a.fixed").and(page.getByRole("link", { name: "Chat on WhatsApp" }));
  await expect(floating).toBeVisible();
  await expect(floating).toHaveAttribute("href", /^https:\/\/wa\.me\/919061381726\?text=/);
});
