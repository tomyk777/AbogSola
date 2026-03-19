"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "/#inicio" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Testimonios", href: "/#testimonios" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 section-padding py-5 transition-colors duration-300 md:py-6 ${
        scrolled ? "bg-primary shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="section-frame relative flex items-center justify-between md:justify-end">
        <a href="/" className="md:hidden" aria-label="Ir al inicio">
          <Image
            src={
              scrolled
                ? "/icons/LOGOS%20SOFIA%20SOLA_LOGO%20SECUNDARIO%20COMPLETO%20HORIZONTAL-40.svg"
                : "/icons/LOGOS%20SOFIA%20SOLA_LOGO%20SECUNDARIO%20COMPLETO%20HORIZONTAL-42.svg"
            }
            width={596}
            height={168}
            className="h-auto w-[146px]"
            alt="Sofia Sola Abogada"
            priority
          />
        </a>
        <button
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${
            scrolled
              ? "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground"
              : "border-primary/25 bg-warm-white/80 text-primary"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        <ul className="hidden md:flex items-center gap-5">
          {links.map(({ label, href }, i) => (
            <li key={label} className="flex items-center gap-4">
              <a
                href={href}
                className={`text-[16px] font-medium tracking-tight boutique-transition ${
                  scrolled
                    ? "text-primary-foreground/85 hover:text-primary-foreground hover:underline underline-offset-4"
                    : "text-primary/80 hover:text-primary hover:underline underline-offset-4"
                }`}
              >
                {label}
              </a>
              {i < links.length - 1 && (
                <span className={scrolled ? "text-primary-foreground/40" : "text-primary/35"}>|</span>
              )}
            </li>
          ))}
        </ul>
        {isOpen && (
          <>
            <button
              className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-[1px] md:hidden"
              aria-label="Cerrar menu"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 z-50 mt-3 overflow-hidden rounded-2xl border border-primary/15 bg-[#f1ece6]/95 p-2 md:hidden shadow-[0_20px_40px_rgba(32,20,14,0.2)]">
              <ul className="flex flex-col">
                {links.map(({ label, href }, i) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex items-center justify-between px-4 py-3 text-[16px] font-medium tracking-tight text-primary hover:bg-primary/5 boutique-transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                      <span className="text-primary/40">{`0${i + 1}`}</span>
                    </a>
                    {i < links.length - 1 && <div className="mx-4 h-px bg-primary/10" />}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
