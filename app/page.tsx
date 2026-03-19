import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesIntro from "@/components/ServicesIntro";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sofia Sola | Abogada en Cordoba",
  description:
    "Sofía Sola, abogada en Córdoba. Asesoramiento en derecho laboral, sucesiones, familia, usucapión y multas de tránsito. Consultas personalizadas y respuesta rápida. En cada etapa legal, el acompañamiento correcto hace la diferencia. Cada caso es único, por eso mi compromiso es escucharte con atención y brindarte soluciones claras.",
  keywords: [
    "abogada en Córdoba",
  "abogado laboral Córdoba",
  "abogada sucesiones Córdoba",
  "abogada familia Córdoba",
  "reclamo ART Córdoba",
  "accidente laboral abogado",
  "multas de tránsito Córdoba",
  "abogada usucapión Córdoba",
  "juicio de escrituración",
  "consulta legal Córdoba",
  "Sofía Sola abogada",
  "estudio jurídico Córdoba",
  "abogada Buenos Aires"
  ],
  alternates: {
    canonical: "https://abogadasofiasola.com/",
  },
  openGraph: {
    title: "Sofia Sola | Abogada en Cordoba",
    description:
      "Asesoramiento legal en Córdoba en laboral, familia, sucesiones y multas de tránsito. Atención personalizada y respuesta rápida. ",
    type: "website",
    locale: "es_AR",
    url: "https://abogadasofiasola.com/",
    siteName: "Sofia Sola | Abogada",
    images: [
      {
        url: "https://abogadasofiasola.com/icons/LOGOS%20SOFIA%20SOLA_SIMBOLO%20S-46.svg",
        width: 1200,
        height: 630,
        alt: "Simbolo S de Sofia Sola en violeta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofia Sola | Abogada en Cordoba",
    description:
      "Asesoramiento legal en Córdoba en laboral, familia, sucesiones y multas de tránsito. Atención personalizada y respuesta rápida. ",
    images: [
      "https://abogadasofiasola.com/icons/LOGOS%20SOFIA%20SOLA_SIMBOLO%20S-46.svg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <WhyChooseUs />
      <ServicesIntro />
      <ServicesGrid />
      <CTASection />
    </main>
  );
}
