"use client";

import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function InfraccionesTransitoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "/#inicio" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Testimonios", href: "/#testimonios" },
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
            <ul className="flex items-center gap-5 text-primary-foreground/90">
              <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/#inicio">Inicio</a></li>
              <li className="text-primary-foreground/50">|</li>
              <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/#servicios">Servicios</a></li>
              <li className="text-primary-foreground/50">|</li>
              <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/#testimonios">Testimonios</a></li>
              <li className="text-primary-foreground/50">|</li>
              <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/contacto">Contacto</a></li>
            </ul>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {isMenuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <>
            <button
              className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-[1px] md:hidden"
              aria-label="Cerrar menu"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 z-50 mt-3 overflow-hidden rounded-2xl border border-primary/15 bg-[#f1ece6] p-2 shadow-[0_20px_40px_rgba(32,20,14,0.2)] md:hidden">
              <ul className="flex flex-col">
                {links.map(({ label, href }, i) => (
                  <li key={label}>
                    <a
                      className="flex items-center justify-between px-4 py-3 text-[16px] font-medium tracking-tight text-primary hover:bg-primary/5 boutique-transition"
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                      <span className="text-primary/40">{`0${i + 1}`}</span>
                    </a>
                    {i < links.length - 1 && <div className="mx-4 h-px bg-primary/10" />}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </header>

      <section className="w-full bg-[#f0ebe3] py-14 md:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-4 md:px-10">
          <div className="mx-auto w-full max-w-[900px]">
            <h1 className="mb-8 font-serif-display text-[44px] italic leading-none text-foreground md:mb-12 md:text-[56px]">
              Infracciones de Tránsito
            </h1>

            <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-[210px_1fr] md:items-start md:gap-10">
              <div className="flex h-[210px] w-full items-center justify-center bg-secondary px-6 py-6" />

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
                <a href="/#contacto" className="text-foreground underline underline-offset-2 hover:text-primary boutique-transition">
                  Hacé tu Consulta Gratuita sobre Infracciones de Tránsito
                </a>
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 md:mt-11">
              <Button variant="plum" className="h-[46px] min-w-[164px] px-8 btn-text text-[17px] md:text-[18px]">
                Contacta hoy mismo
              </Button>
              <a href="/#contacto" className="text-[16px] font-semibold text-foreground boutique-transition hover:text-primary">
                Boton CTA
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-primary/55" />
      <CTASection />
      <Footer />
    </div>
  );
}
