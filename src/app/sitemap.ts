import type { MetadataRoute } from "next";
import { portfolio } from "@/config/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  return portfolio.siteUrl
    ? [{ url: portfolio.siteUrl, changeFrequency: "monthly", priority: 1 }]
    : [];
}
