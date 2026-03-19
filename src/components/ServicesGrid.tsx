"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Riesgos de Trabajo",
    description: "¿Tuviste un accidente de trabajo o estás pasando por una enfermedad profesional?",
    path: "/servicios/riesgos-de-trabajo",
  },
  {
    title: "Laboral",
    description: "Soluciones jurídicas personalizadas para particulares y empresas en el ámbito laboral.",
  },
  {
    title: "Familia",
    description: "Sabemos lo difícil que puede ser transitar por situaciones de conflictos o disputas familiares y todo lo que conlleva estas situaciones.",
  },
  {
    title: "Sucesiones",
    description: "Todos en algún momento de la vida, hemos tenido que afrontar la perdida de un ser querido, un familiar, un amigo.",
  },
  {
    title: "Usucapión",
    description: "Te ayudamos a adquirir la propiedad de un bien de manera continua, publica y pacifica durante un período determinado por la ley.",
  },
  {
    title: "Escrituración",
    description: "Si la otra parte se niega a otorgar la escritura traslativa de dominio, podes iniciar un juicio de escrituración en su contra.",
  },
  {
    title: "Infracciones de Tránsito",
    description: "¿Quisiste transferir el vehículo o renovar la licencia y te diste con infracciones de transito?",
    path: "/servicios/infracciones-de-transito",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesGrid = () => {
  return (
    <section className="w-full bg-warm-white px-3 py-24 md:px-4">
      <div className="section-frame">
        <h2 className="mb-14 text-center font-serif-display text-[58px] italic leading-none text-foreground md:text-[60px]">
          Servicios
        </h2>
        {/* Fila 1: 4 servicios */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.slice(0, 4).map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group mx-auto max-w-[250px] rounded-xl border border-transparent p-8 boutique-transition hover:-translate-y-1 hover:border-primary/20 hover:bg-[#efe9e3]"
            >
              {service.path ? (
                <Link href={service.path} className="mb-3 inline-block font-sans-body text-base font-bold not-italic leading-tight text-[#51213D] boutique-transition group-hover:text-primary">
                  {service.title}
                </Link>
              ) : (
                <h3 className="mb-3 font-sans-body text-base font-bold not-italic leading-tight text-[#51213D] boutique-transition group-hover:text-primary">{service.title}</h3>
              )}
              <p className="font-sans-body text-sm font-normal leading-[1.3] text-[#2B2B2B] boutique-transition group-hover:text-[#2B2B2B]/85">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Fila 2: 3 servicios centrados */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-10"
        >
          {services.slice(4).map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group w-full max-w-[250px] rounded-xl border border-transparent p-8 text-center boutique-transition hover:-translate-y-1 hover:border-primary/20 hover:bg-[#efe9e3]"
            >
              {service.path ? (
                <Link href={service.path} className="mb-3 inline-block font-sans-body text-base font-bold not-italic leading-tight text-[#51213D] boutique-transition group-hover:text-primary">
                  {service.title}
                </Link>
              ) : (
                <h3 className="mb-3 font-sans-body text-base font-bold not-italic leading-tight text-[#51213D] boutique-transition group-hover:text-primary">{service.title}</h3>
              )}
              <p className="font-sans-body text-sm font-normal leading-[1.3] text-[#2B2B2B] boutique-transition group-hover:text-[#2B2B2B]/85">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
