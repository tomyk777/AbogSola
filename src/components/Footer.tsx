import Image from "next/image";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const contactLinks = {
    phone: "https://wa.me/54357315445933",
    email: "mailto:consultas@abogadasofiasola.com",
    instagram: "https://www.instagram.com/abogadasofiasola",
    instagramMultas: "https://www.instagram.com/resolvetusmultas_",
    location: "https://www.google.com/maps/search/?api=1&query=Obispo+Ferreyra+815,+Villa+del+Rosario,+Pcia.+de+Cordoba",
  };

  return (
    <footer>
      <div className="bg-[#d7d1cb] px-3 py-20 md:px-4 md:py-24">
        <div className="section-frame">
          <div className="mb-4 border-t-2 border-primary/70" />
          <div className="grid gap-10 md:grid-cols-[0.9fr_0.48fr_1.3fr] md:items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/icons/LOGOS%20SOFIA%20SOLA_SIMBOLO%20S-46.svg"
                width={306}
                height={261}
                className="h-auto w-[72px]"
                alt="Monograma Sofia Sola"
              />
              <p className="font-serif-display text-[24px] italic leading-[0.92] text-primary md:text-[26px]">
                Tu confianza
                <br />
                es clave.
              </p>
            </div>

            <div className="flex flex-col gap-2 border-primary/70 md:border-r md:pr-7">
              {[
                { label: "Inicio", href: "/#inicio" },
                { label: "Servicios", href: "/#servicios" },
                { label: "Testimonios", href: "/#testimonios" },
                { label: "Contacto", href: "/contacto" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-sans-body text-[16px] font-bold leading-tight text-primary hover:text-primary/85 boutique-transition"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="space-y-2 text-[15px] leading-tight text-primary/85 md:text-[16px]">
              <p>
                <span className="font-semibold text-primary">Teléfono:</span>{" "}
                <a href={contactLinks.phone} target="_blank" rel="noreferrer" className="underline-offset-2 hover:text-primary hover:underline boutique-transition">
                  (03573) 15445933
                </a>
              </p>
              <p>
                <span className="font-semibold text-primary">Email:</span>{" "}
                <a href={contactLinks.email} className="underline-offset-2 hover:text-primary hover:underline boutique-transition">
                  consultas@abogadasofiasola.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-primary">Instagram:</span>{" "}
                <a href={contactLinks.instagram} target="_blank" rel="noreferrer" className="underline-offset-2 hover:text-primary hover:underline boutique-transition">
                  @abogadasofiasola
                </a>
              </p>
              <p>
                <span className="font-semibold text-primary">Instagram:</span>{" "}
                <a href={contactLinks.instagramMultas} target="_blank" rel="noreferrer" className="underline-offset-2 hover:text-primary hover:underline boutique-transition">
                  @resolvetusmultas_
                </a>
              </p>
              <p>
                <span className="font-semibold text-primary">Dirección:</span>{" "}
                <a href={contactLinks.location} target="_blank" rel="noreferrer" className="underline-offset-2 hover:text-primary hover:underline boutique-transition">
                  Obispo Ferreyra 815, Villa del Rosario, Pcia. de Cordoba
                </a>
              </p>

             
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary px-3 py-4 md:px-4">
        <div className="section-frame">
          <p className="text-center text-[11px] font-semibold tracking-tight text-primary-foreground/80 md:text-[12px]">
            Copyright © 2025 Sofía Sola | Todos los derechos reservados.
          </p>
        </div>
      </div>

      <div className="bg-[#23252a] px-3 py-7 md:px-4">
        <div className="section-frame text-center">
          <Image
            src="/icons/LOGOS%20SOFIA%20SOLA_LOGO%20SECUNDARIO%20COMPLETO%20HORIZONTAL-40.svg"
            width={500}
            height={200}
            className="mx-auto h-auto w-[220px] md:w-[236px]"
            alt="Sofia Sola Abogada"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
