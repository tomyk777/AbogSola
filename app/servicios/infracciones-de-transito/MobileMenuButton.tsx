"use client";

import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuButtonProps = {
  links: NavLink[];
  whatsappHref: string;
};

export default function MobileMenuButton({ links, whatsappHref }: MobileMenuButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground transition-colors duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Abrir menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {isMenuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>

      {isMenuOpen && (
        <>
          <button
            className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-[1px] md:hidden"
            aria-label="Cerrar menu"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-full left-0 right-0 z-50 mt-3 overflow-hidden rounded-2xl border border-primary/15 bg-[#f1ece6] p-2 shadow-[0_20px_40px_rgba(32,20,14,0.2)] md:hidden">
            <ul className="flex flex-col">
              {links.map(({ label, href }, i) => (
                <li key={label}>
                  <a
                    className="flex items-center justify-between px-4 py-3 text-[16px] font-medium tracking-tight text-primary hover:bg-primary/5 boutique-transition"
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                    <span className="text-primary/40">{`0${i + 1}`}</span>
                  </a>
                  {i < links.length - 1 && <div className="mx-4 h-px bg-primary/10" />}
                </li>
              ))}
              <li className="px-3 pb-2 pt-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 items-center justify-center rounded-full bg-primary px-4 text-[14px] font-semibold tracking-tight text-primary-foreground boutique-transition hover:bg-primary/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contactar ahora
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
