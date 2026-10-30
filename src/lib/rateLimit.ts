/**
 * In-memory sliding-window rate limiter, keyed by client IP.
 *
 * Basic by design: state lives in one server instance, so on serverless hosting
 * (Vercel) each instance counts separately and a cold start resets it. For a hard
 * limit, swap this for a shared store (e.g. Upstash Redis) behind the same function.
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, max: number, windowMs: number, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= max) {
    hits.set(key, recent);
    const retryAfterMs = windowMs - (now - recent[0]);
    return { allowed: false as const, retryAfterSeconds: Math.ceil(retryAfterMs / 1000) };
  }

  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on a long-lived server.
  if (hits.size > 5000) {
    for (const [k, times] of hits) if (times.every((t) => now - t >= windowMs)) hits.delete(k);
  }
  return { allowed: true as const };
}

/** Best-effort client IP from proxy headers (Vercel sets x-forwarded-for). */
export function clientIp(headers: Headers) {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown";
}
