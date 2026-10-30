import { defineConfig, devices } from "@playwright/test";

const PORT = 3100;

/**
 * Smoke tests against a production build. The build goes to .next-e2e with mock
 * EmailJS keys (the provider itself is mocked in the tests), so it never touches
 * the real .next output or sends real email.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Reduced motion: no parallax, reveals and theme change are instant — stable assertions.
    reducedMotion: "reduce",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "unit", testMatch: /unit\.spec\.ts/ },
    { name: "desktop", testMatch: /smoke\.spec\.ts/, use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", testMatch: /mobile\.spec\.ts/, use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: `npm run build && npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    timeout: 240_000,
    reuseExistingServer: !process.env.CI,
    env: {
      NEXT_DIST_DIR: ".next-e2e",
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: "service_test",
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: "template_test",
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: "public_test",
    },
  },
});
