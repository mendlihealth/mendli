import type { MetadataRoute } from "next";

/**
 * robots.txt — GEO-optimized crawler policy.
 *
 * Strategy:
 * 1. Explicitly ALLOW all AI/answer engine crawlers
 * 2. BLOCK SEO competitor scrapers from analyzing our strategy
 * 3. Prioritize Googlebot with explicit first-party rule
 *
 * Adapted from Welli's competitive robots.txt strategy.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /* ── Search Engines — Priority Access ── */
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },

      /* ── AI / Answer Engine Crawlers — Full Access ── */
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      {
        userAgent: "YouBot",
        allow: "/",
      },

      /* ── SEO Competitor Scrapers — BLOCKED ── */
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
      {
        userAgent: "DotBot",
        disallow: "/",
      },
      {
        userAgent: "BLEXBot",
        disallow: "/",
      },
      {
        userAgent: "PetalBot",
        disallow: "/",
      },
      {
        userAgent: "DataForSeoBot",
        disallow: "/",
      },
      {
        userAgent: "serpstatbot",
        disallow: "/",
      },

      /* ── Default — Allow All Others ── */
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://mendlihealth.com/sitemap.xml",
    host: "https://mendlihealth.com",
  };
}
