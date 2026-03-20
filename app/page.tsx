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
        url: "https://abogadasofiasola.com/og-image.png",
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
      "https://abogadasofiasola.com/og-image.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://abogadasofiasola.com/#legalservice",
  name: "Sofia Sola Abogada",
  url: "https://abogadasofiasola.com/",
  image: "https://abogadasofiasola.com/icons/LOGOS%20SOFIA%20SOLA_SIMBOLO%20S-46.svg",
  telephone: "+54 3573 15445933",
  email: "consultas@abogadasofiasola.com",
  areaServed: ["Cordoba", "Argentina"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Obispo Ferreyra 815",
    addressLocality: "Villa del Rosario",
    addressRegion: "Cordoba",
    addressCountry: "AR",
  },
  availableLanguage: ["es"],
  sameAs: ["https://www.instagram.com/abogadasofiasola/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios legales",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riesgos de Trabajo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laboral" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Familia" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sucesiones" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Usucapion" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Escrituracion" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infracciones de Transito" } }
    ],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />
      <Hero />
      <About />
      <WhyChooseUs />
      <ServicesIntro />
      <ServicesGrid />
      <CTASection />
    </main>
  );
}
