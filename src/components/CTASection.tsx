"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contacto" className="w-full bg-[#d7d1cb] px-3 py-20 md:px-4 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-frame text-center"
      >
        <h2 className="mb-8 font-serif-display text-[54px] italic leading-[0.95] text-primary/85 md:text-[58px]">
          Ponte en contacto conmigo y
          <br />
          cuéntame tu caso
        </h2>
        <Button variant="plum" className="h-[46px] min-w-[214px] px-7 btn-text text-[17px] md:text-[18px]">
          Contacta conmigo
        </Button>
      </motion.div>
      <div className="section-frame mt-14">
        <div className="border-b border-primary/55" />
      </div>
    </section>
  );
};

export default CTASection;
