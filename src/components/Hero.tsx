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
        <div className="mx-auto max-w-[430px] translate-y-12 rounded-[6px] bg-[#efe8e3]/72 px-4 py-6 text-center pt-10 md:mx-0 md:translate-y-0 md:rounded-none md:bg-transparent md:px-0 md:py-0 md:pt-14 md:text-left">
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
              className="mx-auto h-auto w-[238px] md:mx-0 md:w-[272px]"
              alt="Sofia Sola Abogada"
              priority
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mx-auto max-w-[340px] font-serif-display text-[31px] italic leading-[0.95] text-primary/85 md:mx-0 md:text-primary/80"
          >
            Con nuestra experiencia y ética,
            <br />
            te acompañamos en cada momento
            <br />
            para lograr la mejor solución
            <br />
            a tu medida.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-12 top-[104px] z-20 hidden w-[278px] border border-primary/10 bg-[#efe8e3]/95 p-7 md:top-[118px] md:block md:w-[306px]"
        >
          <h3 className="font-serif-display text-[33px] italic text-primary">¿Hablamos?</h3>
          <div className="my-4 h-px w-[92px] bg-primary/35" />
          <div className="space-y-2 text-[12.6px] leading-tight text-primary/80">
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
          <p className="mt-8 font-serif-display text-[31px] italic leading-none text-primary/75">Me encontrarás en...</p>
          <p className="mt-4 text-[12.6px] leading-tight text-primary/80">
            <a href={contactLinks.location} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline boutique-transition">
              Hipolito Yrigoyen esq. Salta,
              <br />
              Villa del Rosario, Córdoba.
            </a>
          </p>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(0deg,rgba(74,46,32,0.08)_0%,rgba(74,46,32,0)_100%)]" />
    </section>
  );
};

export default Hero;
