import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import MobileMenuButton from "./MobileMenuButton";
import Image from "next/image";

export default function InfraccionesTransitoPageClient() {
  const whatsappHref = "https://wa.me/54357315445933?text=Hola%20Sofia%2C%20quiero%20hacer%20una%20consulta%20por%20infracciones%20de%20transito.";

  const links = [
    { label: "Inicio", href: "/#inicio" },
    { label: "Sobre mí", href: "/#about" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <div className="min-h-screen bg-[#f0ebe3]">
      <header className="relative z-50 bg-primary py-5 md:py-3 section-padding">
        <div className="section-frame relative flex items-center justify-between">
          <a href="/" className="flex items-center text-primary-foreground">
            <Image
              src="/icons/LOGOS%20SOFIA%20SOLA_LOGO%20SECUNDARIO%20COMPLETO%20HORIZONTAL-40.svg"
              width={596}
              height={168}
              className="h-auto w-[146px] md:w-[206px]"
              alt="Sofia Sola Abogada"
              priority
            />
          </a>

          <nav className="hidden md:block">
            <div className="flex items-center gap-5 text-primary-foreground/90">
              <ul className="flex items-center gap-5">
                <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/#inicio">Inicio</a></li>
                <li className="text-primary-foreground/50">|</li>
                <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/#about">Sobre mí</a></li>
                <li className="text-primary-foreground/50">|</li>
                <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/#servicios">Servicios</a></li>
                <li className="text-primary-foreground/50">|</li>
                <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/contacto">Contacto</a></li>
              </ul>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center rounded-full border border-primary-foreground/45 bg-primary-foreground/10 px-5 text-[14px] font-semibold tracking-tight text-primary-foreground boutique-transition hover:bg-primary-foreground/20"
              >
                Contactar ahora
              </a>
            </div>
          </nav>

          <MobileMenuButton links={links} whatsappHref={whatsappHref} />
        </div>
      </header>

      <main>
        <section className="w-full bg-[#f0ebe3] py-14 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-4 md:px-10">
            <div className="mx-auto w-full max-w-[900px]">
              <h1 className="mb-8 font-serif-display text-[44px] italic leading-none text-foreground md:mb-12 md:text-[56px]">
                Infracciones de Tránsito
              </h1>

              <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-[210px_1fr] md:items-start md:gap-10">
                <div className="relative h-[210px] w-full overflow-hidden">
                  <Image
                    src="/multas.jpeg"
                    alt="Infracciones de transito"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 210px, 100vw"
                    priority
                  />
                </div>

                <div className="space-y-5 text-[16px] leading-[1.28] text-foreground">
                  <p className="font-semibold">
                    ¿Quisiste transferir el vehículo o renovar la licencia y te diste con infracciones de tránsito?
                  </p>
                  <p>
                    Sabemos lo frustrante que puede ser esta situación y los altos costos de las mismas, por eso te ofrecemos asesoramiento gratuito y especializado para ayudarte a reducir o eliminar las infracciones que puedas tener registradas. Nuestro equipo es experto en derecho de tránsito.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[16px] leading-[1.28] text-foreground">
                <p className="font-semibold">¿Por qué elegirnos?</p>
                <p>-Experiencia y Especialización.</p>
                <p>-Atención Personalizada.</p>
                <p>-Compromiso y Excelencia.</p>

                <p className="pt-4 font-semibold">Contactanos Hoy Mismo</p>
                <p>
                  Si buscas un abogado especializado en la reducción de infracciones de tránsito, no dudes en contactarnos. Estamos aquí para ayudarte a resolver tus inconvenientes viales y brindarte la asesoría que necesitas.
                </p>

                <p className="pt-1">
                  <a href="/contacto" className="text-foreground underline underline-offset-2 hover:text-primary boutique-transition">
                    Hacé tu Consulta Gratuita sobre Infracciones de Tránsito
                  </a>
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5 md:mt-11">
                <Button variant="plum" asChild className="h-[46px] min-w-[164px] px-8 btn-text text-[17px] md:text-[18px]">
                  <a href={whatsappHref} target="_blank" rel="noreferrer">Contacta hoy mismo</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-primary/55" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
