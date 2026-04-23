import React, { useEffect, useRef, useState } from 'react';
import { Phone, CheckCircle, Droplets, Clock, ShieldCheck, MapPin, Star, Menu, ArrowRight, Shield, AlertCircle, Check } from "lucide-react";
import { FloatingContactWidget } from "../../components/FloatingContactWidget";

const heroStats = [
  "24/7 dostupnost",
  "Transparentní ceny předem",
  "Žádné skryté poplatky",
  "Místní technik z Prahy",
];

export const PlumbingServiceLanding = (): JSX.Element => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--water-surface))] font-body-2 text-slate-900 selection:bg-[hsl(var(--water-accent))] selection:text-white">
      <FloatingContactWidget />
      
      {/* Navigation */}
      <nav className={`fixed top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-lg' : 'bg-transparent'} border-b border-white/10 backdrop-blur-md`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${isScrolled ? 'bg-[hsl(var(--water-primary))]' : 'bg-white/20'} text-white`}>
              <Droplets className="h-6 w-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-[hsl(var(--water-primary))]' : 'text-white'}`}>Instalatér Praha</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {['Služby', 'O nás', 'Reference', 'Kontakt'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-[hsl(var(--water-secondary))]' : 'text-white hover:text-[hsl(var(--water-accent))]'}`}>{item}</a>
            ))}
            <a 
              href="tel:+420720000000"
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:shadow-lg active:scale-95 ${isScrolled ? 'bg-[hsl(var(--water-primary))] text-white hover:bg-[hsl(var(--water-secondary))]' : 'bg-white/20 text-white hover:bg-white/30'}`}
            >
              Pohotovost: +420 720 000 000
            </a>
          </div>
          <button className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}><Menu className="h-6 w-6" /></button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[hsl(var(--water-primary))] pt-20 pb-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="absolute top-0 h-full w-full bg-gradient-to-b from-transparent via-[hsl(var(--water-primary))] to-[hsl(var(--water-primary))]" />
        </div>
        
        {/* Animated Background Blobs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 animate-pulse-slow rounded-full bg-[hsl(var(--water-secondary))] opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 animate-pulse-slow rounded-full bg-[hsl(var(--water-accent))] opacity-20 blur-3xl" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div ref={addToRefs} className="reveal-on-scroll inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-white">Nyní k dispozici po celé Praze</span>
          </div>
          
          <h1 ref={addToRefs} className="reveal-on-scroll font-heading-1 text-5xl font-extrabold leading-tight text-white sm:text-7xl lg:text-8xl">
            Prémiový <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--water-accent))] to-[hsl(var(--water-secondary))]">Instalatérský</span> Servis v Praze
          </h1>
          
          <p ref={addToRefs} className="reveal-on-scroll mx-auto mt-8 max-w-2xl text-lg text-white sm:text-xl">
            Rychlost, čistota a profesionální přístup. Od drobných oprav až po kompletní rozvody. Dojezd do 45 minut v případě havárie.
          </p>

          <div ref={addToRefs} className="reveal-on-scroll mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a 
              href="tel:+420720000000"
              className="glass-button group inline-flex items-center justify-center rounded-2xl px-12 py-5 font-heading-4 text-xl text-white shadow-2xl hover:scale-105 active:scale-95"
            >
              <Phone className="mr-3 h-7 w-7 text-[hsl(var(--water-accent))] group-hover:animate-bounce" />
              Kontaktovat technika - +420 720 000 000
            </a>
            <p className="text-white text-sm">Průměrný dojezd: 45 minut</p>
          </div>
        </div>

        {/* Hero Image */}
        <div ref={addToRefs} className="reveal-on-scroll relative mt-12 w-full max-w-6xl px-6">
          <div className="glass-card relative aspect-[16/10] md:aspect-video overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src="/service_plumber_prague_1776947942869.png" 
              alt="Instalatér Praha" 
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--water-primary))]/80 via-transparent to-transparent" />
            <div className="absolute bottom-20 left-8 flex gap-8 text-white">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">15+</span>
                <span className="text-xs uppercase tracking-widest text-white/60">Let praxe</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">4.9/5</span>
                <span className="text-xs uppercase tracking-widest text-white/60">Hodnocení</span>
              </div>
            </div>
          </div>
        </div>

        {/* Waves effect */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[150px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58,117.26,123.39,110.31,185.39,95.8,243.71,82.16,300.1,60.19,321.39,56.44Z" className="fill-[hsl(var(--water-surface))]"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section id="služby" className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-20">
            <h2 className="text-4xl font-bold text-[hsl(var(--water-primary))] sm:text-5xl">Naše Profesionální Služby</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-[hsl(var(--water-accent))] rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Havárie & Opravy', icon: Droplets, desc: 'Okamžitý zásah u prasklého potrubí, úniků vody a ucpaných odpadů.', img: '/pipe_repair_modern_1776948195783.png' },
              { title: 'Nové Rozvody', icon: ShieldCheck, desc: 'Kompletní instalace vodovodu a kanalizace v novostavbách i při rekonstrukcích.', img: '/bathroom_installation_premium_1776948090387.png' },
              { title: 'Servis & Údržba', icon: Clock, desc: 'Pravidelné kontroly, čištění a výměny starých komponentů pro váš klid.', img: '/service_plumber_prague_1776947942869.png' },
            ].map((service, idx) => (
              <div 
                key={idx} 
                ref={addToRefs} 
                className="reveal-on-scroll group glass-card relative overflow-hidden rounded-[2rem] p-8 transition-all hover:-translate-y-2 hover:shadow-2xl"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="mb-6 aspect-video overflow-hidden rounded-2xl">
                  <img src={service.img} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--water-accent))]/10 text-[hsl(var(--water-accent))] mb-6">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[hsl(var(--water-primary))]">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <a href="#" className="inline-flex items-center font-bold text-[hsl(var(--water-secondary))] hover:gap-2 transition-all">
                  Zjistit více <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="o nás" className="bg-white py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div ref={addToRefs} className="reveal-on-scroll">
              <h2 className="text-4xl font-bold text-[hsl(var(--water-primary))] sm:text-5xl mb-8">Proč zvolit právě nás?</h2>
              <div className="space-y-6">
                {[
                  { t: 'Dostupnost 24/7', d: 'Víme, že havárie nečekají. Jsme na příjmu ve dne v noci.' },
                  { t: 'Transparentní ceny', d: 'Cenu znáte vždy předem. Žádné skryté poplatky.' },
                  { t: 'Záruka na práci', d: 'Za svou prací si stojíme. Na veškeré úkony poskytujeme záruku.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[hsl(var(--water-primary))]">{item.t}</h4>
                      <p className="text-slate-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div ref={addToRefs} className="reveal-on-scroll grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-64 rounded-3xl bg-[hsl(var(--water-surface))] border border-white overflow-hidden">
                  <img src="/bathroom_installation_premium_1776948090387.png" className="h-full w-full object-cover" alt="Detail" />
                </div>
                <div className="h-48 rounded-3xl bg-[hsl(var(--water-secondary))]/10" />
              </div>
              <div className="space-y-4">
                <div className="h-48 rounded-3xl bg-[hsl(var(--water-accent))]/10" />
                <div className="h-64 rounded-3xl bg-[hsl(var(--water-primary))]/5 border border-white overflow-hidden">
                  <img src="/pipe_repair_modern_1776948195783.png" className="h-full w-full object-cover" alt="Technika" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="kontakt" className="py-32 px-6">
        <div ref={addToRefs} className="reveal-on-scroll mx-auto max-w-5xl rounded-[3rem] bg-[hsl(var(--water-primary))] p-12 text-center text-white shadow-[0_20px_50px_rgba(3,3,2,0.3)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 animate-wave pointer-events-none">
            <svg className="w-[200%] h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <path d="M0,1000 C300,800 400,900 600,700 C800,500 900,600 1000,400 L1000,1000 L0,1000 Z" fill="white" />
            </svg>
          </div>
          
          <h2 className="relative z-10 text-4xl font-bold sm:text-5xl mb-8">Potřebujete pomoct ihned?</h2>
          <p className="relative z-10 text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Jsme k dispozici 24/7 pro havarijní situace po celé Praze a okolí.
          </p>
          <a 
            href="tel:+420720000000"
            className="relative z-10 group inline-flex items-center justify-center rounded-2xl bg-[hsl(var(--water-accent))] px-12 py-5 font-heading-4 text-xl text-[hsl(var(--water-primary))] shadow-2xl transition-all hover:scale-105 hover:bg-white active:scale-95"
          >
            <div className="absolute inset-0 h-full w-full animate-shimmer rounded-2xl" />
            <Phone className="mr-3 h-7 w-7 transition-transform group-hover:rotate-12" />
            <span className="relative">Zavolat technika hned - +420 720 000 000</span>
          </a>
          <p className="mt-6 text-white/50 text-sm font-medium relative z-10">Volání je nezávazné • Konzultace zdarma</p>
        </div>
      </section>
    </div>
  );
};
