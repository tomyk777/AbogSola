import type { Metadata } from "next";
import InfraccionesTransitoPageClient from "./InfraccionesTransitoPageClient";

export const metadata: Metadata = {
  title: "Resolve tus multas | Sofia Sola Abogada",
  description:
    "Asesoramiento legal para reducir o eliminar infracciones de transito en Cordoba. Consulta gratuita y atencion personalizada.",
  keywords: [
    "infracciones de transito",
    "abogado de transito en Cordoba",
    "reducir multas de transito",
    "eliminar multas de transito",
    "consulta gratuita multas",
    "estudio juridico multas",
    "estudiuo juridico multas Córdoba",
    "resolver tus multas",
    "@resolvetusmultas",
    "abogado de multas en Cordoba",
    "abogada Sofia Sola",
    "quitar multa Córdoba",
    "abogado multas tránsito",
    "reclamo infracción Córdoba",
    "defensa multas Córdoba",
    "resolver multas tránsito"
  ],
  alternates: {
    canonical:
      "https://abogadasofiasola.com/servicios/infracciones-de-transito",
  },
  openGraph: {
    title: "Resolve tus multas | Sofia Sola Abogada",
    description:
      "Asesoramiento para descargos, reducción o eliminación de multas de tránsito en Córdoba. Consultá tu caso.",
    type: "website",
    locale: "es_AR",
    url: "https://abogadasofiasola.vercel.app/servicios/infracciones-de-transito",
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
    title: "Resolve tus multas | Sofia Sola Abogada",
    description: "Asesoramiento para descargos, reducción o eliminación de multas de tránsito en Córdoba. Consultá tu caso.",
    images: [
      "https://abogadasofiasola.vercel.app/og-image.png",
    ],
  },
};

export default function InfraccionesTransitoPage() {
  return <InfraccionesTransitoPageClient />;
}
