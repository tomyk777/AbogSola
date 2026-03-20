"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WhyChooseUs = () => {
  const whatsappHref = "https://wa.me/54357315445933";

  return (
    <section className="w-full bg-[#ede8e1] px-3 py-20 md:px-4 md:py-24">
      <div className="section-frame">
        <div className="mx-auto grid max-w-[1100px] items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full pt-20"
          >
            <Image
              src="/icons/LOGOS%20SOFIA%20SOLA_MAZO-55.svg"
              width={350}
              height={350}
              className="absolute right-1 top-0 h-auto w-[86px]"
              alt="Icono de mazo"
              sizes="86px"
            />
            <h2 className="mb-7 font-sans text-[39px] font-semibold not-italic leading-[1.05] text-primary md:text-[45px]">
              ¿Por qué elegirnos?
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.35] text-primary/82 md:text-[18px]">
              <div>
                <p className="mb-1 text-primary font-semibold">Compromiso con el cliente:</p>
                <p>Tu bienestar es nuestra prioridad; trabajamos incansablemente para obtener los mejores resultados.</p>
              </div>
              <div>
                <p className="mb-1 text-primary font-semibold">Atención personalizada:</p>
                <p>Cada caso es único; ofrecemos soluciones adaptadas a tus necesidades específicas.</p>
              </div>
            </div>
            <div className="mt-9">
              <Button variant="plum" asChild className="h-[45px] min-w-[210px] px-7 btn-text text-[17px] md:text-[18px]">
                <a href={whatsappHref} target="_blank" rel="noreferrer">Contacta conmigo</a>
              </Button>
            </div>
          </motion.div>

          <div className="h-full min-h-[360px] overflow-hidden rounded-[8px] md:min-h-[520px]">
            <Image
              src="/Fotos-landing/estudio2.jpeg"
              width={1000}
              height={1300}
              className="h-full w-full object-cover grayscale-[10%]"
              alt="Estudio juridico"
              sizes="(max-width: 767px) 92vw, 46vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
