import BrandMark from "@/components/BrandMark";

const Footer = () => {
  return (
    <footer>
      <div className="bg-background px-3 pb-10 pt-16 md:px-4 md:pt-20 md:pb-14">
        <div className="section-frame grid gap-10 md:grid-cols-[0.9fr_0.48fr_1.3fr] md:items-center">
          <div className="flex items-center gap-5">
            <BrandMark className="h-16 w-16 border-primary/80 text-primary/80" letterClassName="text-[49px]" />
            <p className="font-serif-display text-[24px] italic leading-[0.92] text-primary md:text-[26px]">
              Tu confianza
              <br />
              es clave.
            </p>
          </div>

          <div className="flex flex-col gap-2 border-primary/70 md:border-r md:pr-7">
            {["Inicio", "Servicios", "Testimonios", "Contacto"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[16px] font-semibold leading-tight text-primary hover:text-primary/85 boutique-transition"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="space-y-2 text-[15px] leading-tight text-primary/85 md:text-[16px]">
            <p><span className="font-semibold text-primary">Teléfono:</span> (03573) 15445933</p>
            <p><span className="font-semibold text-primary">Email:</span> abogadasofiasola@gmail.com</p>
            <p><span className="font-semibold text-primary">Instagram:</span> abogadasofiasola</p>
            <p><span className="font-semibold text-primary">Dirección:</span> Hipolito Yrigoyen esq. Salta, Villa del Rosario, Córdoba.</p>
          </div>
        </div>
      </div>

      <div className="bg-primary px-3 py-4 md:px-4">
        <div className="section-frame">
          <p className="text-center text-[11px] font-semibold tracking-tight text-primary-foreground/80 md:text-[12px]">
            Copyright © 2025 Sofía Sola | by sofiasola | Política de privacidad - Política de cookies - Aviso legal
          </p>
        </div>
      </div>

      <div className="bg-[#23252a] px-3 py-7 md:px-4">
        <div className="section-frame text-center">
          <p className="brand-logo text-[46px] text-[#e4dcd4] md:text-[52px]">Sofía Sola</p>
          <p className="brand-subtitle mt-1 text-[#d6c8bc]/70">Abogada</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
