import { Check, X, Phone, Clock, Shield, CircleAlert as AlertCircle } from "lucide-react";
import { NavigationBannerSection } from "../Home/sections/NavigationBannerSection";
import { ContactFooterSection } from "../Home/sections/ContactFooterSection";

const heroStats = [
  "24/7 dostupnost",
  "Transparentní ceny předem",
  "Žádné skryté poplatky",
  "Místní technik z Prahy",
];

const isForYou = [
  "Jste majitel nebo nájemník bytu/domu v Praze",
  "Řešíte naléhavou instalatérskou poruchu (prasklé potrubí, netěsnosti, nefunkční bojler)",
  "Potřebujete profesionální instalaci (baterie, WC, sprchový kout)",
  "Chcete rychlé řešení s jasnou cenou předem",
  "Oceníte osobní přístup místního řemeslníka",
];

const isNotForYou = [
  "Řešíte velké průmyslové nebo stavební projekty",
  "Jste procurement manager hledající dlouhodobé smlouvy",
  "Hledáte pouze rady zdarma místo placené služby",
  "Preferujete DIY řešení před profesionální prací",
];

const processSteps = [
  {
    number: "1",
    title: "Okamžitá technická konzultace",
    description: "Posoudíme naléhavost a závažnost problému přímo po telefonu",
  },
  {
    number: "2",
    title: "Žádný prodejní tlak",
    description:
      "Dostanete čestné doporučení - někdy stačí jednoduchý postup, který zvládnete sami",
  },
  {
    number: "3",
    title: "Odborné shrnutí situace",
    description:
      "Vysvětlíme vám přesně, co se děje a jaké máte možnosti řešení",
  },
  {
    number: "4",
    title: "Vy rozhodujete o dalším postupu",
    description:
      "Rozhodnete se v klidu, zda chcete pokračovat s profesionální opravou",
  },
];

export const BrandedPragueLanding = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-white text-text flex flex-col">
      <NavigationBannerSection />

      {/* Hero Section */}
      <section className="mx-auto max-w-[800px] px-6 py-20 text-center">
        <h1 className="font-heading-1 text-[length:var(--heading-1-font-size)] font-[number:var(--heading-1-font-weight)] leading-[var(--heading-1-line-height)] tracking-[var(--heading-1-letter-spacing)] text-app-primary">
          Potrubí prasklo? Bojler nefunguje? Instalatér na místě do 60 minut.
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-text">
          {heroStats.map((stat, index) => (
            <span key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-app-accent" />
              {stat}
            </span>
          ))}
        </div>
        <a
          href="tel:+420XXXXXXXXX"
          className="mt-10 inline-flex items-center justify-center rounded-[15px] bg-app-accent px-10 py-4 font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-white transition-colors hover:bg-[color:var(--accent-hover)]"
        >
          <Phone className="mr-2 inline h-6 w-6" />
          Zavolat technika hned - +420 XXX XXX XXX
        </a>
      </section>

      {/* Kdo jsme / Pro koho Section */}
      <section className="mx-auto max-w-[800px] px-6 py-16 w-full">
        <h2 className="mb-12 text-center font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] leading-[var(--heading-2-line-height)] text-app-primary">
          Kdo jsme / Pro koho
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* This service IS for you */}
          <div className="rounded-lg border border-app-accent/30 bg-gray-2 p-8">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-app-accent">
              <Check className="h-6 w-6" />
              Tato služba JE pro vás, pokud:
            </h3>
            <ul className="space-y-4">
              {isForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-text">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-app-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* This service is NOT for you */}
          <div className="rounded-lg border border-gray-300 bg-gray-2 p-8">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-text">
              <X className="h-6 w-6" />
              Tato služba NENÍ pro vás, pokud:
            </h3>
            <ul className="space-y-4">
              {isNotForYou.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-text"
                >
                  <X className="mt-1 h-4 w-4 shrink-0 text-text/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="mx-auto max-w-[800px] px-6 py-16 w-full">
        <h2 className="mb-8 text-center font-heading-3 text-[length:var(--heading-3-font-size)] font-[number:var(--heading-3-font-weight)] leading-[var(--heading-3-line-height)] text-app-primary">
          Instalatér: Rychle a férově
        </h2>
        <div className="rounded-lg border border-app-accent/30 bg-gray-2 p-8">
          <h3 className="mb-6 text-xl font-semibold text-app-primary">
            Co získáte při prvním hovoru:
          </h3>
          <ul className="space-y-4 text-text">
            <li className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-app-accent" />
              <span>Okamžité posouzení naléhavosti situace</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="mt-1 h-5 w-5 shrink-0 text-app-accent" />
              <span>Identifikace nejrychlejšího postupu opravy</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-app-accent" />
              <span>Odborné doporučení bez prodejního tlaku</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-app-accent" />
              <span>Klid na duši, i když se rozhodnete neobjednat</span>
            </li>
          </ul>
          <div className="mt-8 border-t border-gray-300 pt-6">
            <h3 className="mb-4 text-xl font-semibold text-app-primary">
              Proč nás kontaktovat:
            </h3>
            <p className="text-text">
              Získáte okamžitou odbornou konzultaci a jasný plán řešení.
              Rozhodnete se sami, jak dál postupovat - bez závazků, bez tlaku.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="mx-auto max-w-[800px] px-6 py-16 w-full">
        <h2 className="mb-12 text-center font-heading-3 text-[length:var(--heading-3-font-size)] font-[number:var(--heading-3-font-weight)] leading-[var(--heading-3-line-height)] text-app-primary">
          Co se stane po zavolání
        </h2>
        <div className="space-y-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex gap-6 rounded-lg border border-gray-300 bg-gray-2 p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-app-accent font-heading-5 text-[length:var(--heading-5-font-size)] font-[number:var(--heading-5-font-weight)] text-white">
                {step.number}
              </div>
              <div>
                <h3 className="mb-2 font-heading-6 text-[length:var(--heading-6-font-size)] font-[number:var(--heading-6-font-weight)] text-app-primary">
                  {step.title}
                </h3>
                <p className="text-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mx-auto max-w-[800px] px-6 py-20 text-center">
        <h2 className="mb-4 font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] leading-[var(--heading-2-line-height)] text-app-primary">
          Potrubí nečeká. Zavolejte hned.
        </h2>
        <p className="mb-10 text-lg text-text">
          Získejte okamžitou odbornou konzultaci a klid na duši.
        </p>
        <a
          href="tel:+420XXXXXXXXX"
          className="inline-flex items-center justify-center rounded-[15px] bg-app-accent px-10 py-4 font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-white transition-colors hover:bg-[color:var(--accent-hover)]"
        >
          <Phone className="mr-2 inline h-6 w-6" />
          Zavolat technika hned - +420 XXX XXX XXX
        </a>
      </section>

      <ContactFooterSection />
    </main>
  );
};
