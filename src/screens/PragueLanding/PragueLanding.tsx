import { Check, X, Phone, Clock, Shield, CircleAlert as AlertCircle } from "lucide-react";

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

export const PragueLanding = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-[#e5e5e5]">
      {/* Hero Section */}
      <section className="mx-auto max-w-[800px] px-6 py-20 text-center">
        <h1 className="text-5xl font-bold leading-tight text-[#f8f8f8] md:text-6xl">
          Potrubí prasklo? Bojler nefunguje? Instalatér na místě do 60 minut.
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#e5e5e5]/80">
          {heroStats.map((stat, index) => (
            <span key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#4a90e2]" />
              {stat}
            </span>
          ))}
        </div>
        <a
          href="tel:+420XXXXXXXXX"
          className="mt-10 inline-block rounded-lg bg-[#4a90e2] px-8 py-4 text-xl font-bold text-white transition-colors hover:bg-[#3a7bc8]"
        >
          <Phone className="mr-2 inline h-6 w-6" />
          Zavolat technika hned - +420 XXX XXX XXX
        </a>
      </section>

      {/* Kdo jsme / Pro koho Section */}
      <section className="mx-auto max-w-[800px] px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-medium text-[#f8f8f8]">
          Kdo jsme / Pro koho
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* This service IS for you */}
          <div className="rounded-lg border border-[#4a90e2]/30 bg-[#1a1a1a] p-8">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-[#4a90e2]">
              <Check className="h-6 w-6" />
              Tato služba JE pro vás, pokud:
            </h3>
            <ul className="space-y-4">
              {isForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#e5e5e5]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#4a90e2]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* This service is NOT for you */}
          <div className="rounded-lg border border-[#e5e5e5]/20 bg-[#1a1a1a] p-8">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-[#e5e5e5]/60">
              <X className="h-6 w-6" />
              Tato služba NENÍ pro vás, pokud:
            </h3>
            <ul className="space-y-4">
              {isNotForYou.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#e5e5e5]/70"
                >
                  <X className="mt-1 h-4 w-4 shrink-0 text-[#e5e5e5]/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="mx-auto max-w-[800px] px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-medium text-[#f8f8f8]">
          Instalatér: Rychle a férově
        </h2>
        <div className="rounded-lg border border-[#4a90e2]/30 bg-[#1a1a1a] p-8">
          <h3 className="mb-6 text-xl font-semibold text-[#f8f8f8]">
            Co získáte při prvním hovoru:
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-[#4a90e2]" />
              <span>Okamžité posouzení naléhavosti situace</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="mt-1 h-5 w-5 shrink-0 text-[#4a90e2]" />
              <span>Identifikace nejrychlejšího postupu opravy</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-[#4a90e2]" />
              <span>Odborné doporučení bez prodejního tlaku</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-[#4a90e2]" />
              <span>Klid na duši, i když se rozhodnete neobjednat</span>
            </li>
          </ul>
          <div className="mt-8 border-t border-[#e5e5e5]/20 pt-6">
            <h3 className="mb-4 text-xl font-semibold text-[#f8f8f8]">
              Proč nás kontaktovat:
            </h3>
            <p className="text-[#e5e5e5]/80">
              Získáte okamžitou odbornou konzultaci a jasný plán řešení.
              Rozhodnete se sami, jak dál postupovat - bez závazků, bez tlaku.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="mx-auto max-w-[800px] px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-medium text-[#f8f8f8]">
          Co se stane po zavolání
        </h2>
        <div className="space-y-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex gap-6 rounded-lg border border-[#e5e5e5]/20 bg-[#1a1a1a] p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-xl font-bold text-white">
                {step.number}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#f8f8f8]">
                  {step.title}
                </h3>
                <p className="text-[#e5e5e5]/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mx-auto max-w-[800px] px-6 py-20 text-center">
        <h2 className="mb-4 text-4xl font-bold text-[#f8f8f8]">
          Potrubí nečeká. Zavolejte hned.
        </h2>
        <p className="mb-10 text-lg text-[#e5e5e5]/80">
          Získejte okamžitou odbornou konzultaci a klid na duši.
        </p>
        <a
          href="tel:+420XXXXXXXXX"
          className="inline-block rounded-lg bg-[#4a90e2] px-8 py-4 text-xl font-bold text-white transition-colors hover:bg-[#3a7bc8]"
        >
          <Phone className="mr-2 inline h-6 w-6" />
          Zavolat technika hned - +420 XXX XXX XXX
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e5]/20 py-8 text-center text-sm text-[#e5e5e5]/60">
        <p>Instalatérské služby Praha - Rychle a férově</p>
        <p className="mt-2">
          <a href="/old-home" className="hover:text-[#4a90e2]">
            Původní stránka
          </a>
        </p>
      </footer>
    </main>
  );
};
