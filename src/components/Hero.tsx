"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full min-h-[780px] overflow-hidden bg-warm-white">
      <Image
        src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1800"
        width={1800}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
        alt="Escritorio profesional"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(241,236,232,0.76)_0%,rgba(241,236,232,0.2)_52%,rgba(241,236,232,0.08)_100%)]" />

      <div className="relative z-10 section-frame min-h-[780px] py-20 md:py-24">
        <div className="max-w-[430px] pt-10 md:pt-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="brand-logo mb-2 text-[74px] text-primary md:text-[84px]"
          >
            Sofía Sola
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="brand-subtitle mb-6 block text-primary/75"
          >
            Abogada
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="max-w-[340px] font-serif-display text-[31px] italic leading-[0.95] text-primary/80"
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
          className="absolute right-12 top-[104px] z-20 w-[265px] border border-primary/10 bg-[#efe8e3]/95 p-7 md:top-[118px] md:w-[290px]"
        >
          <h3 className="font-serif-display text-[33px] italic text-primary">¿Hablamos?</h3>
          <div className="my-4 h-px w-[92px] bg-primary/35" />
          <div className="space-y-2 text-[12.6px] leading-tight text-primary/80">
            <p>abogadasofiasola.com</p>
            <p>(03573) 15445933</p>
            <p>abogadasofiasola@gmail.com</p>
          </div>
          <p className="mt-8 font-serif-display text-[31px] italic leading-none text-primary/75">Me encontrarás en...</p>
          <p className="mt-4 text-[12.6px] leading-tight text-primary/80">
            Hipolito Yrigoyen esq. Salta,
            <br />
            Villa del Rosario, Córdoba.
          </p>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(0deg,rgba(74,46,32,0.08)_0%,rgba(74,46,32,0)_100%)]" />
    </section>
  );
};

export default Hero;
