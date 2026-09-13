import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ocip-demo.vercel.app/",
      lastModified: new Date("2026-09-13"),
    },
  ];
}
