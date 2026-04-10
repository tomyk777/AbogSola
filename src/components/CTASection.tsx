"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappUrl = "https://wa.me/543573445933?text=Hola%20Sofia%2C%20quiero%20hacer%20una%20consulta";

  return (
    <section id="contacto" className="w-full bg-[#d7d1cb] px-3 py-20 md:px-4 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[680px] text-center"
      >
        <h2 className="mb-8 font-serif-display text-4xl italic leading-[0.95] text-[#51213D]">
          Ponte en contacto conmigo y
          <br />
          cuéntame tu caso
        </h2>
        <Button asChild variant="plum" className="h-[46px] min-w-[214px] px-7 btn-text text-[17px] md:text-[18px]">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Contacta conmigo
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;
