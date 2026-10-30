import { expect, test } from "@playwright/test";
import { clientIp, rateLimit } from "@/lib/rateLimit";
import { whatsappLink } from "@/lib/utils";
import { contactRequestSchema, contactSchema } from "@/lib/validation";

// Pure-logic tests (no browser): run in the "unit" project.

test.describe("contactSchema", () => {
  const valid = { name: "Ada", email: "ada@example.com", subject: "", message: "Hello, a real message." };

  test("accepts a valid message with an empty (optional) subject", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  test("rejects a missing name, bad email and short message", () => {
    const result = contactSchema.safeParse({ ...valid, name: " ", email: "nope", message: "short" });
    expect(result.success).toBe(false);
    const fields = new Set(result.error?.issues.map((i) => i.path[0]));
    expect(fields).toEqual(new Set(["name", "email", "message"]));
  });

  test("request schema needs the spam signals", () => {
    expect(contactRequestSchema.safeParse(valid).success).toBe(false);
    expect(contactRequestSchema.safeParse({ ...valid, startedAt: Date.now() }).success).toBe(true);
  });
});

test.describe("rateLimit", () => {
  test("allows `max` hits per window, then reports retry-after", () => {
    const key = `test-${Math.random()}`;
    const now = 1_000_000;
    for (let i = 0; i < 3; i++) expect(rateLimit(key, 3, 60_000, now + i).allowed).toBe(true);
    const blocked = rateLimit(key, 3, 60_000, now + 10);
    expect(blocked).toEqual({ allowed: false, retryAfterSeconds: 60 });
    expect(rateLimit(key, 3, 60_000, now + 60_001).allowed).toBe(true);
  });

  test("clientIp takes the first x-forwarded-for address", () => {
    expect(clientIp(new Headers({ "x-forwarded-for": "203.0.113.7, 10.0.0.1" }))).toBe("203.0.113.7");
    expect(clientIp(new Headers())).toBe("unknown");
  });
});

test("whatsappLink builds a wa.me URL with encoded text", () => {
  expect(whatsappLink("919061381726", "Hello, more information!")).toBe(
    "https://wa.me/919061381726?text=Hello%2C%20more%20information!",
  );
});
