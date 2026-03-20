import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://abogadasofiasola.com/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://abogadasofiasola.com/contacto",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://abogadasofiasola.com/servicios/infracciones-de-transito",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
