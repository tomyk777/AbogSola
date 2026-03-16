"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Inicio", "Servicios", "Testimonios", "Contacto"];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 section-padding py-5 md:py-6">
      <div className="section-frame flex items-center justify-end">
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
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
          {links.map((link, i) => (
            <li key={link} className="flex items-center gap-4">
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[15px] font-medium tracking-tight text-primary/80 hover:text-primary boutique-transition"
              >
                {link}
              </a>
              {i < links.length - 1 && <span className="text-primary/35">|</span>}
            </li>
          ))}
        </ul>
        {isOpen && (
          <div className="absolute top-full right-6 bg-surface border border-primary/20 p-6 md:hidden shadow-md">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[15px] font-medium text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
