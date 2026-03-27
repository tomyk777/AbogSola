import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import MobileMenuButton from "./MobileMenuButton";
import Image from "next/image";
import { ArrowRight, Quote, XCircle } from "lucide-react";

export default function InfraccionesTransitoPageClient() {
  const whatsappHref = "https://wa.me/54357315445933?text=Hola%20Sofia%2C%20quiero%20hacer%20una%20consulta%20por%20infracciones%20de%20transito.";

  const serviceSteps = [
    {
      step: "01",
      title: "Corroboramos multas",
      description: "Verificamos e informamos las multas que tiene tu vehiculo o DNI.",
      icon: "/icons/LOGOS%20SOFIA%20SOLA_LLAVE-74.svg",
    },
    {
      step: "02",
      title: "Presupuesto",
      description: "Te enviamos el presupuesto de cómo quedaría tu deuda con las reducciones que podemos gestionar",
      icon: "/icons/LOGOS%20SOFIA%20SOLA_LLAVE-74.svg",
    },
    {
      step: "03",
      title: "Pago",
      description: "Realizás el pago por transferencia, o en persona en alguno de nuestros puntos de atención",
      icon: "/icons/LOGOS%20SOFIA%20SOLA_LLAVE-74.svg",
    },
    {
      step: "04",
      title: "Libre deuda",
      description: "Entre 3 y 10 días hábiles recibís el libre deuda, quedando sin infracciones de tránsito.",
      icon: "/icons/LOGOS%20SOFIA%20SOLA_LLAVE-74.svg",
    },
  ];

  const successCases = [
    {
      name: "Eduardo",
      text: "Eduardo fue a renovar la licencia de conducir y en el municipio le avisaron que constaban con su DNI varias multas y que hasta que no las pague, no le podían emitir la renovación. En vez de pagarlo, nos escribió y se las resolvimos por la mitad de lo que el municipio le estaba pidiendo..",
    },
    {
      name: "Norma",
      text: "Norma vendió su vehículo y cuando fue  a hacer la transferencia le informaron que el auto tenía $200.000 de multas. El comprador no quería comprar por la  deuda. Nos contactó y se las resolvimos por la mitad. A la semana volvieron al Registro y las multas no estaban más.",
    },
    {
      name: "Juan",
      text: "Juan recibió una carta informándole una multa en Bs. As. por $100.000. Nos escribió, pedió que se las resolvamos y terminó pagando la mitad sin moverse de su casa.",
    },
  ];

  const reviews = [
    {
      author: "Lorena",
      text: "Hice una consulta con Sofía por reducción de infracciones, la atención muy buena, muy amable y el trámite fue rápido. Excelente atención. La recomiendo.",
    },
    {
      author: "Abel",
      text: "La verdad que mi experiencia fue muy buena. Me hizo una importante reducción en las infracciones que tenía y además fue súper rápido el trámite. Recomendable 100%.",
    },
    {
      author: "Pablo",
      text: "Hola buenas tardes Sofía, te escribo para agradecer todos los trámites salieron perfectos y no solo por los trámites también por tu amabilidad y predispuesta siempre. Muchas gracias, excelente trabajo.",
    },
    {
      author: "Lucia",
      text: "La atención del estudio es eficiente  y cordial. En mi experiencia todos los casos fueron solucionados ya sea con disminuciones considerables en el monto de las infracciones o con la retracción de las mismas. Muy conforme con el servicio ofrecido.",
    },
  ];

  const differentiationCards = [
    {
      title: "Formación jurídica y matrícula profesional",
      text: "Cada trámite tiene respaldo legal, fundamentos normativos y defensa administrativa real. No promesas vacías.",
    },
    {
      title: "Procedimientos 100% legales",
      text: "No uso contactos ni atajos irregulares. Todo lo que hago es legal, verificable y defendible en el tiempo.",
    },
    {
      title: "Responsabilidad profesional",
      text: "Respondo con mi nombre, mi matrícula y mi ejercicio profesional. Eso implica ética, seriedad y compromiso.",
    },
  ];

  const warningOffers = [
    "Precios irrealmente bajos",
    '"Contactos en los juzgados"',
    "Borrado exprés de multas",
    "Soluciones mágicas",
  ];

  const warningResults = [
    "Las multas vuelven meses después",
    "Se usan sistemas irregulares",
    "El cliente queda expuesto",
    "Nadie se hace cargo",
  ];

  const commitmentItems = [
    "Defensa legal, transparente y sostenible",
    "Análisis real de cada multa",
    "Estrategias conforme a la ley",
    "Acompañamiento profesional",
    "Sin riesgos futuros para vos",
  ];

  const links = [
    { label: "Inicio", href: "/#inicio" },
    { label: "Sobre mí", href: "/#about" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <div className="min-h-screen bg-[#f0ebe3]">
      <header className="relative z-50 bg-primary py-5 md:py-3 section-padding">
        <div className="section-frame relative flex items-center justify-between">
          <a href="/" className="flex items-center text-primary-foreground">
            <Image
              src="/icons/LOGOS%20SOFIA%20SOLA_LOGO%20SECUNDARIO%20COMPLETO%20HORIZONTAL-40.svg"
              width={596}
              height={168}
              className="h-auto w-[146px] md:w-[206px]"
              alt="Sofia Sola Abogada"
              priority
            />
          </a>

          <nav className="hidden md:block">
            <div className="flex items-center gap-5 text-primary-foreground/90">
              <ul className="flex items-center gap-5">
                <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/#inicio">Inicio</a></li>
                <li className="text-primary-foreground/50">|</li>
                <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/#about">Sobre mí</a></li>
                <li className="text-primary-foreground/50">|</li>
                <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/#servicios">Servicios</a></li>
                <li className="text-primary-foreground/50">|</li>
                <li><a className="text-[16px] font-medium hover:text-primary-foreground hover:underline underline-offset-4 boutique-transition" href="/contacto">Contacto</a></li>
              </ul>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center rounded-full border border-primary-foreground/45 bg-primary-foreground/10 px-5 text-[14px] font-semibold tracking-tight text-primary-foreground boutique-transition hover:bg-primary-foreground/20"
              >
                Contactar ahora
              </a>
            </div>
          </nav>

          <MobileMenuButton links={links} whatsappHref={whatsappHref} />
        </div>
      </header>

      <main>
        <section className="w-full bg-[#f0ebe3] py-14 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-4 md:px-10">
            <div className="mx-auto w-full max-w-[900px]">
              <h1 className="mb-8 font-serif-display text-[44px] italic leading-none text-foreground md:mb-12 md:text-[56px]">
                Infracciones de Tránsito
              </h1>

              <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-[210px_1fr] md:items-start md:gap-10">
                <div className="relative h-[210px] w-full overflow-hidden">
                  <Image
                    src="/multas.jpeg"
                    alt="Infracciones de transito"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 210px, 100vw"
                    priority
                  />
                </div>

                <div className="space-y-5 text-[16px] leading-[1.28] text-foreground">
                  <p className="font-semibold">
                    ¿Quisiste transferir el vehículo o renovar la licencia y te diste con infracciones de tránsito?
                  </p>
                  <p>
                    Sabemos lo frustrante que puede ser esta situación y los altos costos de las mismas, por eso te ofrecemos asesoramiento gratuito y especializado para ayudarte a reducir o eliminar las infracciones que puedas tener registradas. Nuestro equipo es experto en derecho de tránsito.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[16px] leading-[1.28] text-foreground">
                <p className="font-semibold">¿Por qué elegirnos?</p>
                <p>-Experiencia y Especialización.</p>
                <p>-Atención Personalizada.</p>
                <p>-Compromiso y Excelencia.</p>

                <p className="pt-4 font-semibold">Contactanos Hoy Mismo</p>
                <p>
                  Si buscas un abogado especializado en la reducción de infracciones de tránsito, no dudes en contactarnos. Estamos aquí para ayudarte a resolver tus inconvenientes viales y brindarte la asesoría que necesitas.
                </p>

                <p className="pt-1">
                  <a href="/contacto" className="text-foreground underline underline-offset-2 hover:text-primary boutique-transition">
                    Hacé tu Consulta Gratuita sobre Infracciones de Tránsito
                  </a>
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5 md:mt-11">
                <Button variant="plum" asChild className="h-[46px] min-w-[164px] px-8 btn-text text-[17px] md:text-[18px]">
                  <a href={whatsappHref} target="_blank" rel="noreferrer">Contacta hoy mismo</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary py-14 text-primary-foreground md:py-24">
          <div className="section-frame px-4 md:px-10">
            <div className="mx-auto max-w-[1200px]">
              <h2 className="mb-8 text-center font-serif-display text-[38px] italic leading-[1] text-primary-foreground md:mb-11 md:text-[54px]">
                ¿Como funciona el servicio?
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {serviceSteps.map((item, index) => (
                  <article key={item.step} className="relative border border-primary-foreground/35 bg-primary-foreground/5 p-5 boutique-transition hover:-translate-y-1 hover:border-primary-foreground/60 hover:bg-primary-foreground/[0.08] hover:shadow-[0_18px_34px_-22px_rgba(244,236,228,0.55)]">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex h-12 min-w-[62px] items-center justify-center border border-primary-foreground/35 bg-primary-foreground/10 px-3 font-serif-display text-[33px] italic leading-none text-primary-foreground">{item.step}</span>
                      <div className="relative h-10 w-10">
                        <Image src={item.icon} alt="Icono del paso" fill className="object-contain" sizes="40px" />
                      </div>
                    </div>
                    <h3 className="mb-3 font-sans-body text-[27px] font-semibold not-italic leading-[1.05] text-primary-foreground">{item.title}</h3>
                    <p className="text-[16px] leading-[1.28] text-primary-foreground/88">{item.description}</p>
                    
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#f0ebe3] py-14 md:py-24">
          <div className="section-frame px-4 md:px-10">
            <div className="mx-auto max-w-[1200px]">
              <h2 className="mb-8 text-center font-serif-display text-[38px] italic leading-[1] text-foreground md:mb-11 md:text-[54px]">
                Casos de Exito
              </h2>

              <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                {successCases.map((item) => (
                  <article key={item.name} className="relative border border-primary/35 bg-[#eee7dc] p-6 boutique-transition hover:-translate-y-1 hover:border-primary/60 hover:bg-[#f3ece1] hover:shadow-[0_18px_32px_-22px_rgba(81,33,61,0.45)] md:p-7">
                    <div className="absolute left-0 top-0 h-[7px] w-full bg-primary" />
                    <Image
                      src="/icons/LOGOS%20SOFIA%20SOLA_MAZO-55.svg"
                      width={180}
                      height={180}
                      className="absolute right-4 top-4 h-auto w-[28px] opacity-75"
                      alt="Icono de mazo"
                      sizes="28px"
                    />
                    <p className="mb-4 pt-3 font-sans-body text-[30px] font-semibold not-italic leading-none text-primary">{item.name}</p>
                    <p className="text-[16px] leading-[1.28] text-foreground/85">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary py-14 text-primary-foreground md:py-24">
          <div className="section-frame px-4 md:px-10">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="mb-8 text-center font-serif-display text-[42px] italic leading-[0.95] md:mb-11 md:text-[58px]">
                Gracias por sus reseñas
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {reviews.map((item) => (
                  <article key={item.author} className="border border-primary-foreground/35 bg-primary-foreground/5 p-6 text-primary-foreground boutique-transition hover:-translate-y-1 hover:border-primary-foreground/60 hover:bg-primary-foreground/[0.09] hover:shadow-[0_18px_34px_-22px_rgba(244,236,228,0.55)] md:p-7">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <p className="font-sans-body text-[30px] font-semibold not-italic leading-none text-primary-foreground">~{item.author}</p>
                      <Quote className="h-7 w-7 text-primary-foreground/75" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <p className="text-[16px] leading-[1.35] text-primary-foreground/90">"{item.text}"</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#f0ebe3] py-14 md:py-24">
          <div className="section-frame px-4 md:px-10">
            <div className="mx-auto grid max-w-[1160px] items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
              <div className="relative mx-auto h-[420px] w-full max-w-[420px] overflow-hidden border border-primary/25 boutique-transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_38px_-22px_rgba(81,33,61,0.4)] md:h-[500px] md:max-w-[460px]">
                <Image
                  src="/Fotos-landing/abogada.jpeg"
                  alt="Sofía Sola"
                  fill
                  className="object-cover object-[center_16%] boutique-transition hover:scale-[1.02]"
                  sizes="(max-width: 767px) 92vw, 40vw"
                />
              </div>

              <div className="relative pr-16 boutique-transition hover:-translate-y-1 md:pr-20">
                <Image
                  src="/icons/LOGOS%20SOFIA%20SOLA_MAZO-55.svg"
                  width={350}
                  height={350}
                  className="absolute right-0 top-0 h-auto w-[56px] boutique-transition hover:rotate-6 md:w-[66px]"
                  alt="Icono decorativo"
                  sizes="(max-width: 767px) 56px, 66px"
                />
                <h2 className="mb-6 font-serif-display text-4xl italic text-primary md:text-[52px]">
                  ¿Por qué elegirme?
                </h2>
                <p className="mb-5 font-sans-body text-[30px] font-semibold not-italic leading-tight text-primary md:text-[36px]">
                  Yo no soy gestora.
                </p>
                <p className="max-w-[620px] font-sans-body text-[18px] leading-[1.4] text-primary/82 md:text-[21px]">
                  Soy abogada matriculada, especialista en derecho de tránsito y defensa de multas. Eso marca una diferencia real.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-primary py-14 text-primary-foreground md:py-24">
          <div className="section-frame px-4 md:px-10">
            <div className="mx-auto max-w-[1200px]">
              <h2 className="mb-12 text-center font-serif-display text-4xl italic text-[#F4ECE4] md:text-[52px]">
                ¿Qué me diferencia de un gestor?
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {differentiationCards.map((item) => (
                  <article key={item.title} className="relative rounded-[8px] border border-[rgba(244,236,228,0.15)] p-8 boutique-transition hover:-translate-y-1 hover:border-[rgba(244,236,228,0.38)] hover:bg-primary-foreground/[0.04] hover:shadow-[0_20px_34px_-24px_rgba(244,236,228,0.58)]">
                    <Image
                      src="/icons/LOGOS%20SOFIA%20SOLA_SIMBOLO%20S-47.svg"
                      width={132}
                      height={132}
                      className="absolute right-4 top-4 h-auto w-[32px] opacity-85"
                      alt="Simbolo S"
                      sizes="32px"
                    />
                    <span className="mb-4 block text-2xl text-[#E2D7E4]">✓</span>
                    <h3 className="mb-2 font-sans-body text-[24px] font-semibold not-italic leading-[1.1] text-[#F4ECE4]">{item.title}</h3>
                    <p className="font-sans-body text-sm leading-[1.45] text-[#E2D7E4]">{item.text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Button
                  variant="plum"
                  asChild
                  className="h-[52px] min-w-[250px] border border-primary-foreground/35 px-10 btn-text text-[18px] !bg-[#F4ECE4] !text-primary boutique-transition hover:-translate-y-0.5 hover:!bg-[#eadfce] hover:shadow-[0_18px_30px_-20px_rgba(244,236,228,0.55)] md:text-[19px]"
                >
                  <a href={whatsappHref} target="_blank" rel="noreferrer">Consulta tu caso ahora</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary py-14 text-primary-foreground md:py-24">
          <div className="section-frame px-4 md:px-10">
            <div className="mx-auto max-w-[1140px] border border-primary-foreground/22 bg-primary-foreground/[0.05] p-6 md:p-10">
              <div className="mx-auto mb-5 inline-flex items-center gap-2 border border-primary-foreground/30 bg-primary-foreground/[0.08] px-4 py-2 font-sans-body text-[13px] font-semibold uppercase tracking-[0.1em] text-primary-foreground boutique-transition hover:-translate-y-0.5 hover:bg-primary-foreground/[0.14]">
                <span aria-hidden="true">⚠</span>
                Advertencia importante
              </div>

              <h2 className="mb-10 text-center font-serif-display text-[42px] italic leading-[0.95] text-primary-foreground md:text-[58px]">
                Cuidado con los "borramultas"
              </h2>

              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                <article className="border border-primary-foreground/25 bg-primary-foreground/[0.06] p-6 boutique-transition hover:-translate-y-1 hover:border-primary-foreground/45 hover:shadow-[0_18px_30px_-22px_rgba(244,236,228,0.38)] md:p-8">
                  <p className="mb-5 font-sans-body text-[30px] font-semibold not-italic leading-none text-primary-foreground">Ofrecen:</p>
                  <ul className="space-y-3 text-[17px] leading-[1.3] text-primary-foreground/88">
                    {warningOffers.map((item) => (
                      <li key={item} className="flex items-start gap-3 border border-primary-foreground/18 bg-primary-foreground/[0.05] px-3 py-2 boutique-transition hover:translate-x-1 hover:border-primary-foreground/40 hover:bg-primary-foreground/[0.1]">
                        <span className="mt-[2px] text-[18px] leading-none text-primary-foreground">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="border border-primary-foreground/25 bg-primary-foreground/[0.06] p-6 boutique-transition hover:-translate-y-1 hover:border-primary-foreground/45 hover:shadow-[0_18px_30px_-22px_rgba(244,236,228,0.38)] md:p-8">
                  <p className="mb-5 font-sans-body text-[30px] font-semibold not-italic leading-none text-primary-foreground">El resultado:</p>
                  <ul className="space-y-3 text-[17px] leading-[1.3] text-primary-foreground/88">
                    {warningResults.map((item) => (
                      <li key={item} className="flex items-start gap-3 border border-primary-foreground/18 bg-primary-foreground/[0.05] px-3 py-2 boutique-transition hover:translate-x-1 hover:border-primary-foreground/40 hover:bg-primary-foreground/[0.1]">
                        <XCircle className="mt-[1px] h-[19px] w-[19px] shrink-0 text-[#E0717F]" strokeWidth={2.2} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <p className="mx-auto mt-8 max-w-[680px] text-center font-serif-display text-xl italic leading-[1.3] text-primary-foreground/92 md:text-[36px]">
                En materia legal, lo barato muchas veces sale caro.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#f0ebe3] py-14 md:py-24">
          <div className="section-frame px-4 md:px-10">
            <div className="mx-auto max-w-[980px]">
              <h2 className="mb-12 text-center font-serif-display text-4xl italic text-[#51213D] md:text-[52px]">
                ✓ Mi compromiso
              </h2>

              <div className="space-y-4">
                {commitmentItems.map((item, idx) => (
                  <div
                    key={item}
                    className={`w-full max-w-[640px] rounded-[8px] border border-primary/25 bg-[#ece3d8] px-5 py-4 text-[17px] font-medium leading-[1.28] text-foreground boutique-transition hover:-translate-y-1 hover:border-primary/50 hover:bg-[#f1e8dd] hover:shadow-[0_16px_26px_-22px_rgba(81,33,61,0.45)] md:text-[19px] ${idx % 2 === 0 ? "mr-auto" : "ml-auto"}`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center font-serif-display text-xl italic leading-[1.28] text-[#3F2D21] md:text-[34px]">
                No vendo ilusiones. <span className="font-semibold text-[1.12em]">Defiendo derechos.</span>
              </p>

              <div className="mt-7 flex justify-center">
                <Image
                  src="/icons/LOGOS%20SOFIA%20SOLA_SOFIA%20SOLA%20TIPOGRAFIA-10.svg"
                  width={420}
                  height={120}
                  className="h-auto w-[220px] md:w-[280px]"
                  style={{ filter: "brightness(0) saturate(100%) invert(15%) sepia(11%) saturate(1586%) hue-rotate(342deg) brightness(95%) contrast(92%)" }}
                  alt="Sofia Sola"
                  sizes="(max-width: 767px) 220px, 280px"
                />
              </div>
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
