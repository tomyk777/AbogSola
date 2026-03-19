"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function ContactoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contactLinks = {
    website: "https://abogadasofiasola.com",
    phone: "https://wa.me/54357315445933",
    whatsapp: "https://wa.me/54357315445933",
    email: "mailto:abogadasofiasola@gmail.com",
    instagram: "https://www.instagram.com/abogadasofiasola",
    location: "https://www.google.com/maps/search/?api=1&query=Hipolito+Yrigoyen+esq.+Salta,+Villa+del+Rosario,+Cordoba",
  };

  const links = [
    { label: "Inicio", href: "/#inicio" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Testimonios", href: "/#testimonios" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <div className="min-h-screen bg-[#d5ccd8]">
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

      <main className="bg-[#d5ccd8]">
        <section className="mx-auto w-full max-w-[1280px] px-4 py-14 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20 lg:gap-28">
            <div className="order-2 md:order-1">
              <div className="relative w-full max-w-[700px] md:h-[470px]">
                <div className="relative z-20 hidden h-[300px] w-full max-w-[250px] overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.08)] md:absolute md:left-0 md:top-0 md:block md:h-[360px] md:w-[260px]">
                  <Image
                    src="/Fotos-landing/estudio.JPEG"
                    alt="Escritorio con notebook"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative z-10 mt-0 w-full max-w-[430px] bg-[#eee6df] px-6 py-8 text-[13px] leading-[1.33] text-primary/80 shadow-[0_1px_0_rgba(0,0,0,0.08)] md:absolute md:left-[150px] md:top-[58px] md:min-h-[200px] md:w-[430px] md:pl-[172px] md:pr-[30px] md:py-[16px]">
                  <div>
                    <p className="font-serif-display text-[31px] italic leading-none text-primary/85 md:text-[33px]">¿Hablamos?</p>
                    <div className="mb-4 mt-2 h-px w-[166px] bg-primary/45" />
                    <p className="mb-2">
                      <a href={contactLinks.website} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline boutique-transition">
                        abogadasofiasola.com
                      </a>
                    </p>
                    <p className="mb-2">
                      <a href={contactLinks.phone} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline boutique-transition">
                        (03573) 15445933
                      </a>
                    </p>
                    <p className="mb-2">
                      <a href={contactLinks.email} className="hover:text-primary hover:underline boutique-transition">
                        abogadasofiasola@gmail.com
                      </a>
                    </p>
                    <p>
                      <a href={contactLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline boutique-transition">
                        @abogadasofiasola
                      </a>
                    </p>
                  </div>
                  <div className="mt-11">
                    <p className="font-serif-display text-[31px] italic leading-none text-primary/75 md:text-[33px]">Me encontrarás en...</p>
                    <div className="mb-4 mt-2 h-px w-[166px] bg-primary/45" />
                    <p>
                      <a href={contactLinks.location} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline boutique-transition">
                        Hipolito Irigoyen esq. Salta, Villa del Rosario, Córdoba.
                      </a>
                    </p>
                    <Image
                      src="/icons/LOGOS%20SOFIA%20SOLA_MAZO-55.svg"
                      width={298}
                      height={272}
                      className="ml-auto mt-4 h-auto w-[56px]"
                      alt="Icono de mazo"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 md:mt-11">
                <Image
                  src="/icons/LOGOS%20SOFIA%20SOLA_LOGO%20SECUNDARIO%20COMPLETO%20VERTICAL-19.svg"
                  width={429}
                  height={261}
                  className="h-auto w-[168px] md:w-[178px]"
                  alt="Sofia Sola Abogada"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h1 className="font-serif-display text-[56px] italic leading-none text-primary md:text-[74px]">Contacto</h1>
              <p className="mt-3 max-w-[580px] text-[16px] leading-[1.4] text-primary/85">
                Llámanos o escríbenos para acceder a una consulta inicial. Estamos aquí para resolver tu problema legal hoy.
              </p>

              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="h-14 w-full border border-primary/20 bg-[#ece4dd] px-4 text-[15px] text-primary placeholder:font-serif-display placeholder:text-[26px] placeholder:italic placeholder:leading-none placeholder:text-primary/55 focus:outline-none md:placeholder:text-[32px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 w-full border border-primary/20 bg-[#ece4dd] px-4 text-[15px] text-primary placeholder:font-serif-display placeholder:text-[26px] placeholder:italic placeholder:leading-none placeholder:text-primary/55 focus:outline-none md:placeholder:text-[32px]"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="h-14 w-full border border-primary/20 bg-[#ece4dd] px-4 text-[15px] text-primary placeholder:font-serif-display placeholder:text-[26px] placeholder:italic placeholder:leading-none placeholder:text-primary/55 focus:outline-none md:placeholder:text-[32px]"
                />
                <textarea
                  placeholder="Cuéntanos un poco sobre tu consulta"
                  className="h-28 w-full resize-none border border-primary/20 bg-[#ece4dd] px-4 py-3 text-[15px] text-primary placeholder:font-serif-display placeholder:text-[26px] placeholder:italic placeholder:leading-none placeholder:text-primary/55 focus:outline-none md:placeholder:text-[32px]"
                />

                <button
                  type="submit"
                  className="mt-3 h-14 min-w-[160px] bg-primary px-10 font-serif-display text-[32px] italic leading-none text-primary-foreground transition-colors hover:bg-accent"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
