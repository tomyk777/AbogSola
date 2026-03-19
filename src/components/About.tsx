"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="about" className="w-full bg-secondary px-3 py-20 text-secondary-foreground md:px-4 md:py-24">
      <div className="section-frame grid gap-0 md:grid-cols-[0.98fr_1.02fr]">
        <div className="flex items-center justify-center p-10 md:p-14">
          <Image
            src="/Fotos-landing/abogada.jpeg"
            width={1000}
            height={1400}
            className="h-[500px] w-full object-contain"
            alt="Abogada"
          />
        </div>

        {!isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center px-6 py-6 md:px-10 md:py-8"
          >
            <Image
              src="/icons/LOGOS%20SOFIA%20SOLA_MAZO-57.svg"
              width={298}
              height={272}
              className="mb-6 h-auto w-[58px]"
              alt="Icono de mazo"
            />
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
        ) : (
          <div className="flex flex-col justify-center px-6 py-6 md:px-10 md:py-8">
            <Image
              src="/icons/LOGOS%20SOFIA%20SOLA_MAZO-57.svg"
              width={298}
              height={272}
              className="mb-6 h-auto w-[58px]"
              alt="Icono de mazo"
            />
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
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
