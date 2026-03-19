import type { Metadata } from "next";
import ContactoPageClient from "./ContactoPageClient";

export const metadata: Metadata = {
  title: "Contacto | Sofia Sola Abogada en Cordoba",
  description:
    "Contactá a Sofía Sola, abogada en Córdoba. Realizá tu consulta legal por WhatsApp o formulario. Respuesta rápida y asesoramiento personalizado.",
  keywords: [
    "abogada en Cordoba",
    "contacto abogado",
    "consulta legal inicial",
    "abogada en Buenos Aires",
    "asesoramiento legal Cordoba",
    "WhatsApp abogado Cordoba",
    "Sofia Sola abogada",
    "contacto abogada Córdoba",
    "consulta abogado Córdoba",
    "abogada Córdoba WhatsApp",
    "abogado cerca mío Córdoba",
    "consulta legal Córdoba",
    "abogada Sofía Sola contacto",
    "asesoramiento legal Córdoba",
    "estudio jurídico contacto Córdoba"
  ],
  alternates: {
    canonical: "https://abogadasofiasola.com/contacto",
  },
  openGraph: {
    title: "Contacto | Sofia Sola Abogada en Cordoba",
    description:
      "Realizá tu consulta legal con Sofía Sola. Atención por WhatsApp y respuesta rápida en Córdoba.",
    type: "website",
    locale: "es_AR",
    url: "https://abogadasofiasola.vercel.app/contacto",
    siteName: "Sofia Sola | Abogada",
    images: [
      {
        url: "https://abogadasofiasola.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simbolo S de Sofia Sola en violeta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Sofia Sola Abogada en Cordoba",
    description: "Canales de contacto y consulta legal con Sofia Sola.",
    images: [
      "https://abogadasofiasola.vercel.app/og-image.png",
    ],
  },
};

export default function ContactoPage() {
  return <ContactoPageClient />;
}
