"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const contactLinks = {
    website: "https://abogadasofiasola.com",
    phone: "https://wa.me/54357315445933",
    whatsapp: "https://wa.me/54357315445933",
    email: "mailto:abogadasofiasola@gmail.com",
    instagram: "https://www.instagram.com/abogadasofiasola",
    location: "https://www.google.com/maps/search/?api=1&query=Hipolito+Yrigoyen+esq.+Salta,+Villa+del+Rosario,+Cordoba",
  };

  return (
    <section id="inicio" className="relative w-full min-h-[780px] overflow-hidden bg-warm-white">
      <Image
        src="/Fotos-landing/estudio.JPEG"
        width={1200}
        height={1600}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40 md:hidden"
        alt="Estudio juridico"
        priority
      />
      <Image
        src="/Fotos-landing/HERO-real2.png"
        width={1800}
        height={1200}
        className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
        alt="Estudio juridico"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(241,236,232,0.9)_0%,rgba(241,236,232,0.62)_48%,rgba(241,236,232,0.38)_100%)] md:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(241,236,232,0.76)_0%,rgba(241,236,232,0.2)_52%,rgba(241,236,232,0.08)_100%)] md:block" />

      <div className="relative z-10 section-frame min-h-[780px] py-20 md:py-24">
        <div className="mx-auto max-w-[430px] translate-y-12 rounded-[6px] bg-[#efe8e3]/72 px-4 py-6 text-center pt-10 md:mx-0 md:translate-y-0 md:rounded-none md:bg-transparent md:px-0 md:py-0 md:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <Image
              src="/icons/LOGOS%20SOFIA%20SOLA_LOGOTIPO%20PRINCIPAL-1.svg"
              width={500}
              height={200}
              className="mx-auto h-auto w-[256px] md:w-[290px]"
              alt="Sofia Sola Abogada"
              priority
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mx-auto max-w-[370px] text-center font-serif-display text-[27px] italic leading-[1.1] text-primary/85 md:text-primary/80"
          >
            Con nuestra experiencia y ética, te acompañamos en todo momento para lograr la mejor solución a tu medida.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mx-auto mt-11 flex w-full max-w-[340px] flex-col items-center justify-center gap-3 md:mt-12 md:flex-row"
          >
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-[15px] font-semibold tracking-tight text-primary-foreground boutique-transition hover:bg-primary/90 md:w-auto"
            >
              Contactar ahora
            </a>
            <a
              href="/#servicios"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-primary/25 bg-[#efe8e3]/85 px-8 text-[15px] font-semibold tracking-tight text-primary boutique-transition hover:border-primary/45 md:w-auto"
            >
              Ver servicios
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-8 top-[96px] z-20 hidden min-h-[430px] w-[340px] border border-primary/10 bg-[#efe8e3]/95 p-8 md:top-[108px] md:block md:w-[390px] md:p-10"
        >
          <div className="mx-auto flex w-full max-w-[255px] flex-col justify-center md:max-w-[280px]">
            <h3 className="font-serif-display text-[33px] italic leading-none text-primary">¿Hablamos?</h3>
            <div className="my-5 h-px w-[148px] bg-primary/35" />
            <div className="space-y-2.5 text-[12.6px] leading-tight text-primary/80">
              <p>
                <a href={contactLinks.website} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline boutique-transition">
                  abogadasofiasola.com
                </a>
              </p>
              <p>
                <a href={contactLinks.phone} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline boutique-transition">
                  (03573) 15445933
                </a>
              </p>
              <p>
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
            <p className="mt-12 font-serif-display text-[31px] italic leading-none text-primary/75">Me encontrarás en...</p>
            <div className="my-5 h-px w-[148px] bg-primary/35" />
            <p className="mt-1 text-[12.6px] leading-tight text-primary/80">
              <a href={contactLinks.location} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline boutique-transition">
                Hipolito Yrigoyen esq. Salta,
                <br />
                Villa del Rosario, Córdoba.
              </a>
            </p>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-24 left-1/2 z-20 w-[calc(100%-20px)] max-w-[1080px] -translate-x-1/2 md:bottom-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="rounded-full border border-primary/20 bg-[#efe8e3]/92 px-5 py-3.5 shadow-[0_14px_34px_rgba(74,46,32,0.16)] backdrop-blur-[2px] md:border-primary/40 md:bg-[#f4ece5]/98 md:px-10 md:py-4 md:shadow-[0_16px_34px_rgba(56,31,45,0.24)]"
            aria-label="Provincias con cobertura legal"
          >
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <Image
                src="/icons/LOGOS%20SOFIA%20SOLA_LLAVE-73.svg"
                width={48}
                height={48}
                className="h-auto w-[24px] opacity-90 md:w-[30px] md:opacity-100"
                alt=""
                aria-hidden="true"
              />
              <p className="text-center text-[12px] font-semibold tracking-[0.11em] text-primary/90 md:text-[14px] md:text-primary">
                CORDOBA  |  BUENOS AIRES  |  SANTA FE  |  ENTRE RIOS  |  MISIONES
              </p>
              <Image
                src="/icons/LOGOS%20SOFIA%20SOLA_MAZO-55.svg"
                width={48}
                height={48}
                className="h-auto w-[24px] opacity-90 md:w-[30px] md:opacity-100"
                alt=""
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(0deg,rgba(74,46,32,0.08)_0%,rgba(74,46,32,0)_100%)]" />
    </section>
  );
};

export default Hero;
