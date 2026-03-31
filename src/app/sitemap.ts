import type { MetadataRoute } from "next";

/**
 * Sitemap — deterministic date staggering for crawl freshness.
 *
 * Uses Welli's `staggerDate()` pattern: each URL gets a unique
 * `lastModified` spread across the last 14 days. This signals
 * freshness to search engines without requiring actual content
 * changes. The hash is deterministic — same URL always maps to
 * the same offset within a given week window.
 */

const BASE = "https://mendlihealth.com";
const STAGGER_DAYS = 14;

function staggerDate(url: string): string {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = ((hash << 5) - hash + url.charCodeAt(i)) | 0;
  }
  const now = Date.now();
  const weekEpoch = Math.floor(now / (7 * 86400000));
  const combined = Math.abs(hash ^ weekEpoch);
  const offsetMs = (combined % STAGGER_DAYS) * 86400000;
  const hourMs = (combined % 24) * 3600000;
  return new Date(now - offsetMs - hourMs).toISOString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: staggerDate(BASE),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/#about`,
      lastModified: staggerDate(`${BASE}/#about`),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/#what`,
      lastModified: staggerDate(`${BASE}/#what`),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/#pricing`,
      lastModified: staggerDate(`${BASE}/#pricing`),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/#faq`,
      lastModified: staggerDate(`${BASE}/#faq`),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/#how`,
      lastModified: staggerDate(`${BASE}/#how`),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
