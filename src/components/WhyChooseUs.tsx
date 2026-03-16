"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-background md:grid md:grid-cols-2">
      <div className="flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[550px] px-6 py-20 md:px-12 md:py-28"
        >
          <Shield className="mb-5 h-9 w-9 text-primary" strokeWidth={1.15} />
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
            <Button variant="plum" className="h-[45px] min-w-[210px] px-7 btn-text text-[17px] md:text-[18px]">
              Contacta conmigo
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="relative min-h-[520px] overflow-hidden md:min-h-[640px]">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
          width={1000}
          height={1300}
          className="absolute inset-y-0 left-0 right-0 h-full w-auto min-w-full object-cover grayscale-[10%] md:right-5 lg:right-7"
          alt="Persona trabajando en laptop"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
