import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sheeladvisory.ca";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/municipalities`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regional-districts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/school-districts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/non-profits`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
