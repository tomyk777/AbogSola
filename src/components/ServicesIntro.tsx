"use client";

import { motion } from "framer-motion";
import BrandMark from "@/components/BrandMark";
import Image from "next/image";

const ServicesIntro = () => {
  return (
    <section id="servicios" className="w-full bg-secondary text-secondary-foreground">
      <div className="section-frame grid gap-0 md:grid-cols-[0.48fr_0.52fr]">
        <div className="flex items-center justify-center p-10 md:p-14">
          <Image
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=900"
            width={900}
            height={1100}
            className="h-full w-full max-h-[480px] object-cover"
            alt="Persona leyendo un libro"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col justify-center px-6 py-20 md:px-10 md:py-24"
        >
          <BrandMark className="absolute right-10 top-10 h-14 w-14 border-secondary-foreground/75 text-secondary-foreground/75" letterClassName="text-[48px]" />
          <h2 className="mb-3 font-serif-display text-[54px] italic leading-[0.95] text-secondary-foreground md:text-[58px]">
            Servicios
          </h2>
          <h3 className="mb-5 font-sans text-[31px] font-semibold not-italic text-secondary-foreground/87 md:text-[33px]">
            ¿Cómo te puedo ayudar?
          </h3>
          <div className="max-w-[595px] space-y-4 text-[16px] leading-[1.28] text-secondary-foreground/80 md:text-[17px]">
            <p>
              Soluciones adaptadas a las necesidades específicas de cada cliente, garantizando las estrategias correctas con estas los mejores resultados.
            </p>
            <p>
              Compromiso con la Excelencia: Nos mantenemos actualizados con las últimas reformas legislativas y tendencias de derecho laboral para brindar un servicio de alta calidad.
            </p>
            <p>
              Reserva tu servicio o contáctate conmigo a través del formulario de contacto, correo electrónico o llamada telefónica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesIntro;
