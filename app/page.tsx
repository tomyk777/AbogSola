import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesIntro from "@/components/ServicesIntro";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <WhyChooseUs />
      <ServicesIntro />
      <ServicesGrid />
      <CTASection />
    </div>
  );
}
