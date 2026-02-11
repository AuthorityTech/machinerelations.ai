import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://machinerelations.ai",
      lastModified: new Date("2026-02-11"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
