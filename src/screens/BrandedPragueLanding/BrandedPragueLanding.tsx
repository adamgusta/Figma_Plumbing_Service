import { Check, X, Phone, Clock, Shield, CircleAlert as AlertCircle, ChevronRight } from "lucide-react";
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
      <section className="relative overflow-hidden bg-[hsl(var(--water-primary))] px-6 py-24 text-center lg:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[hsl(var(--water-secondary)/0.2)] blur-3xl animate-float" />
          <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full bg-[hsl(var(--water-accent)/0.15)] blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-[hsl(var(--water-secondary)/0.3)] blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 mx-auto max-w-[900px]">
          <h1 className="animate-fade-up font-heading-1 text-[length:var(--heading-1-font-size)] font-[number:var(--heading-1-font-weight)] leading-[var(--heading-1-line-height)] tracking-[var(--heading-1-letter-spacing)] text-white">
            Potrubí prasklo? Bojler nefunguje? <br />
            <span className="text-[hsl(var(--water-accent))]">Instalatér na místě do 60 minut.</span>
          </h1>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-white/80 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {heroStats.map((stat, index) => (
              <span key={index} className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-white">
                <Check className="h-4 w-4 text-[hsl(var(--water-accent))]" />
                {stat}
              </span>
            ))}
          </div>

          <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="tel:+420XXXXXXXXX"
              className="glass-button group inline-flex items-center justify-center rounded-2xl px-12 py-5 font-heading-4 text-xl text-white shadow-2xl hover:scale-105 active:scale-95"
            >
              <Phone className="mr-3 h-7 w-7 text-[hsl(var(--water-accent))] group-hover:animate-bounce" />
              Zavolat technika hned - +420 720 000 000
            </a>
            <p className="mt-4 text-white/60 text-sm">Průměrný dojezd v Praze: 45 minut</p>
          </div>
        </div>
      </section>

      {/* Kdo jsme / Pro koho Section */}
      <section className="relative mx-auto max-w-[1000px] px-6 py-24 w-full overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--water-secondary)/0.05)] blur-3xl" />
        
        <h2 className="mb-16 text-center font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] leading-[var(--heading-2-line-height)] text-[hsl(var(--water-primary))]">
          Kdo jsme / Pro koho
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* This service IS for you */}
          <div className="glass-card group rounded-3xl p-8 transition-all hover:scale-[1.02] hover:bg-white/40">
            <h3 className="mb-8 flex items-center gap-4 text-2xl font-bold text-[hsl(var(--water-secondary))]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--water-secondary))] text-white">
                <Check className="h-6 w-6" />
              </div>
              Tato služba JE pro vás:
            </h3>
            <ul className="space-y-5">
              {isForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-app-primary/80">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--water-accent))] group-hover:animate-bounce" />
                  <span className="text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* This service is NOT for you */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-8 transition-all hover:scale-[1.02]">
            <h3 className="mb-8 flex items-center gap-4 text-2xl font-bold text-gray-400">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                <X className="h-6 w-6" />
              </div>
              Tato služba NENÍ pro vás:
            </h3>
            <ul className="space-y-5">
              {isNotForYou.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-gray-500"
                >
                  <X className="mt-1 h-5 w-5 shrink-0 text-gray-400" />
                  <span className="text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="mx-auto max-w-[1000px] px-6 py-24 w-full">
        <h2 className="mb-16 text-center font-heading-3 text-[length:var(--heading-3-font-size)] font-[number:var(--heading-3-font-weight)] leading-[var(--heading-3-line-height)] text-[hsl(var(--water-primary))]">
          Instalatér: Rychle a férově
        </h2>
        <div className="glass-card rounded-3xl border border-[hsl(var(--water-secondary)/0.2)] bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-8 text-2xl font-bold text-[hsl(var(--water-primary))]">
                Co získáte při prvním hovoru:
              </h3>
              <ul className="space-y-6 text-app-primary/80">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--water-accent)/0.2)] text-[hsl(var(--water-secondary))]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span className="text-lg">Okamžité posouzení naléhavosti situace</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--water-accent)/0.2)] text-[hsl(var(--water-secondary))]">
                    <Shield className="h-4 w-4" />
                  </div>
                  <span className="text-lg">Identifikace nejrychlejšího postupu opravy</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--water-accent)/0.2)] text-[hsl(var(--water-secondary))]">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <span className="text-lg">Odborné doporučení bez prodejního tlaku</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-[hsl(var(--water-primary))] p-8 text-white shadow-inner">
              <h3 className="mb-4 text-xl font-bold text-[hsl(var(--water-accent))]">
                Proč nás kontaktovat:
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
                Získáte okamžitou odbornou konzultaci a jasný plán řešení.
                Rozhodnete se sami, jak dál postupovat - bez závazků, bez tlaku.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm font-medium text-white/60">
                <Shield className="h-5 w-5" />
                Garantovaná spokojenost a férové jednání
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="bg-[hsl(var(--water-surface))] px-6 py-24 w-full">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="mb-16 text-center font-heading-3 text-[length:var(--heading-3-font-size)] font-[number:var(--heading-3-font-weight)] leading-[var(--heading-3-line-height)] text-[hsl(var(--water-primary))]">
            Co se stane po zavolání
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[hsl(var(--water-primary))] text-2xl font-bold text-[hsl(var(--water-accent))] shadow-lg">
                  {step.number}
                </div>
                <h3 className="mb-3 font-bold text-[hsl(var(--water-primary))]">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="absolute top-14 -right-4 hidden lg:block text-gray-300">
                    <ChevronRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-[hsl(var(--water-primary))] px-6 py-32 text-center text-white">
        {/* Animated Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
          <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-[hsl(var(--water-accent)/0.1)] blur-3xl animate-float" />
          <div className="absolute -top-48 -right-48 h-96 w-96 rounded-full bg-[hsl(var(--water-secondary)/0.1)] blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative z-10 mx-auto max-w-[800px]">
          <h2 className="mb-6 font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] leading-[var(--heading-2-line-height)]">
            Potrubí nečeká. <span className="text-[hsl(var(--water-accent))]">Zavolejte hned.</span>
          </h2>
          <p className="mb-12 text-xl text-white/70">
            Získejte okamžitou odbornou konzultaci a klid na duši. <br />
            Jsme připraveni vyrazit k vám domů.
          </p>
          <a
            href="tel:+420XXXXXXXXX"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-[hsl(var(--water-accent))] px-12 py-6 font-bold text-[hsl(var(--water-primary))] shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" style={{ backgroundSize: '200% 100%' }} />
            <Phone className="mr-3 h-7 w-7 transition-transform group-hover:rotate-12" />
            <span className="relative">Zavolat technika hned - +420 720 000 000</span>
          </a>
          <p className="mt-6 text-white/50 text-sm font-medium">Volání je nezávazné • Konzultace zdarma</p>
        </div>
      </section>

      <ContactFooterSection />
    </main>
  );
};
