import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function RiesgosTrabajoPage() {
  return (
    <div className="min-h-screen bg-[#F0EBE3]">
      <header className="bg-primary py-3">
        <div className="section-frame flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-2 text-primary-foreground">
            <span className="brand-logo text-[29px] leading-none md:text-[31px]">Sofia Sola</span>
            <span className="brand-subtitle text-primary-foreground/85">Abogada</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-4 text-[28px] leading-none text-primary-foreground/90">
              <li><a className="text-[16px] font-medium hover:text-primary-foreground" href="/#inicio">Inicio</a></li>
              <li className="text-primary-foreground/45">|</li>
              <li><a className="text-[16px] font-medium hover:text-primary-foreground" href="/#about">Sobre mí</a></li>
              <li className="text-primary-foreground/45">|</li>
              <li><a className="text-[16px] font-medium hover:text-primary-foreground" href="/#servicios">Servicios</a></li>
              <li className="text-primary-foreground/45">|</li>
              <li><a className="text-[16px] font-medium hover:text-primary-foreground" href="/#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="w-full bg-[#F0EBE3] py-16">
          <div className="mx-auto w-full max-w-[900px] px-6 md:px-10 lg:px-12">
            <h1 className="mb-10 font-serif-display text-[54px] italic leading-none text-foreground md:mb-12 md:text-[56px]">
              Riesgos de Trabajo
            </h1>

            <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-[210px_1fr] md:items-start md:gap-10">
              <div className="h-[210px] w-full bg-secondary" />

              <div className="space-y-5 text-[16px] leading-[1.28] text-foreground">
                <p>
                  ¿Tuviste un accidente de trabajo o estás pasando por una enfermedad profesional? ¿O tuviste un accidente de tránsito yendo o volviendo del trabajo?
                </p>
                <p>
                  Los accidentes de trabajo y las enfermedades profesionales pueden alterar significativamente tu vida y tu estabilidad emocional y financiera. Es esencial contar con un abogado especializado que te guíe en cada paso del proceso legal, asegurando que recibas la atención que mereces y su compensación.
                </p>
                <p>
                  Recordá que tenés un plazo de 2 años para hacer el reclamo. No te quedes sin reclamar.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-[16px] leading-[1.28] text-foreground">
              <p className="font-semibold">Nuestros servicios incluyen:</p>
              <p><span className="font-semibold">Asesoramiento integral:</span> Te orientamos desde el momento del accidente o diagnostico, explicándote tus derechos y las acciones a seguir.</p>
              <p><span className="font-semibold">Gestión de reclamos:</span> Nos encargamos de todo el proceso administrativo para que no tenga que preocuparte por nada y puedas concentrarte en tu recuperación.</p>
              <p><span className="font-semibold">Representación legal:</span> Defendemos tus intereses ante las autoridades competentes, asegurando que se reconozcan y respeten tus derechos laborales.</p>

              <p className="pt-1 font-semibold">¿Por qué elegirnos?</p>
              <p><span className="font-semibold">Compromiso con el cliente:</span> Tu bienestar es nuestra prioridad; trabajamos incansablemente para obtener los mejores resultados.</p>
              <p><span className="font-semibold">Atención personalizada:</span> Cada caso es único; ofrecemos soluciones adaptadas a tus necesidades específicas.</p>

              <p className="pt-3 font-semibold">No enfrentes solo las consecuencias de un accidente laboral o enfermedad profesional.</p>
              <p>
                Contáctanos hoy mismo para una consulta inicial y descubre como podemos ayudarte a proteger tus derechos y tu futuro.
              </p>
            </div>

            <div className="mt-10 md:mt-11">
              <Button variant="plum" className="h-[46px] min-w-[164px] px-8 btn-text text-[17px] md:text-[18px]">
                Contacta hoy mismo
              </Button>
            </div>
          </div>
        </section>

        <div className="border-t border-primary/55" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
