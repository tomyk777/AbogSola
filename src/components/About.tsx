"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full bg-secondary text-secondary-foreground">
      <div className="section-frame grid gap-0 md:grid-cols-[0.98fr_1.02fr]">
        <div className="flex items-center justify-center p-10 md:p-14">
          <Image
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1000"
            width={1000}
            height={1400}
            className="h-full w-full max-h-[500px] object-cover"
            alt="Persona leyendo documentos"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center px-6 py-20 md:px-10 md:py-24"
        >
          <Scale className="mb-5 h-9 w-9 text-secondary-foreground/70" strokeWidth={1.15} />
          <h2 className="mb-5 font-sans text-[39px] font-semibold not-italic leading-[1.02] text-secondary-foreground md:text-[44px]">
            ¡Hola! Soy Sofía Sola
          </h2>
          <div className="space-y-4 text-[16px] leading-[1.35] text-secondary-foreground/85 md:text-[17px]">
            <p>Abogada especializada en Laboral, Familia y Reales.</p>
            <p>
              Mi objetivo es acompañarte y brindarte el asesoramiento integral que estés necesitando.
            </p>
            <p>
              Aquí encontrarás la responsabilidad y eficacia que necesitas al momento de confiar tu problema. Si estás buscando claridad legal, estás en el lugar correcto.
            </p>
            <p className="mt-8 font-serif-display text-[31px] italic leading-tight text-secondary-foreground/80 md:text-[30px]">
              La justicia que mereces, con el respaldo que necesitas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
