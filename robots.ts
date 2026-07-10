import type { MetadataRoute } from "next";

const SITE_URL = "https://www.impulsotreinamentos.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/painel/",
          "/login/",
          "/_next/",
        ],
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}