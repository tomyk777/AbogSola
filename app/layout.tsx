import type { Metadata } from "next";
import Providers from "@/components/Providers";
import LayoutShell from "@/components/LayoutShell";
import WhatsAppButton from "@/components/WhatsAppButton";
import "@/index.css";
import "@/App.css";

export const metadata: Metadata = {
  title: "Sofia Sola | Abogada",
  description: "Asesoramiento legal en laboral, familia y reales.",
};

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://abogadasofiasola.com/#organization",
      name: "Sofia Sola Abogada",
      url: "https://abogadasofiasola.com/",
      telephone: "+54 3573 15445933",
      email: "consultas@abogadasofiasola.com",
      sameAs: ["https://www.instagram.com/abogadasofiasola/"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Obispo Ferreyra 815",
        addressLocality: "Villa del Rosario",
        addressRegion: "Cordoba",
        addressCountry: "AR",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://abogadasofiasola.com/#website",
      url: "https://abogadasofiasola.com/",
      name: "Sofia Sola | Abogada",
      inLanguage: "es-AR",
      publisher: {
        "@id": "https://abogadasofiasola.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }}
        />
        <Providers>
          <LayoutShell>{children}</LayoutShell>
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
