import { Separator } from "../../../../components/ui/separator";

const navigationItems = ["Domů", "O nás", "Naše služby", "Náš tým"];

const serviceItems = [
  "Detekce úniků",
  "Čištění odpadů",
  "Opravy potrubí",
  "Výměna rozvodů",
];

const contactItems = [
  {
    iconSrc: "/map-pin.svg",
    iconAlt: "Mapa",
    text: "Smetanovo nábřeží 1, 110 00 Praha 1",
  },
  {
    iconSrc: "/phone.svg",
    iconAlt: "Telefon",
    text: "+420 720 000 000",
  },
];

const legalItems = ["Podmínky použití", "Ochrana soukromí"];

export const ContactFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-app-secondary">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 py-16 md:px-10 lg:px-[150px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.6fr)_minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-12">
          <section className="flex flex-col items-start">
            <h2 className="[font-family:'Onest',Helvetica] text-4xl font-medium tracking-[0] text-white sm:text-5xl sm:leading-[67.2px]">
              Instalatérské Služby
            </h2>
            <p className="mt-4 max-w-[311px] font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-gray-1 [font-style:var(--body-2-font-style)]">
              Profesionální instalatérské práce v Praze a okolí. Spolehlivost a kvalita zaručena.
            </p>
            <img
              className="mt-10 h-11 w-[152px]"
              alt="Icon"
              src="/icon-1.svg"
            />
          </section>
          <nav
            className="flex flex-col items-start gap-3"
            aria-label="Footer navigation"
          >
            <h3 className="mt-[-1.00px] whitespace-nowrap font-heading-4 text-[length:var(--heading-4-font-size)] font-[number:var(--heading-4-font-weight)] leading-[var(--heading-4-line-height)] tracking-[var(--heading-4-letter-spacing)] text-white [font-style:var(--heading-4-font-style)]">
              Navigace
            </h3>
            <ul className="flex flex-col items-start gap-1.5">
              {navigationItems.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="h-auto whitespace-nowrap text-left font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-gray-1 transition-colors hover:text-white [font-style:var(--body-2-font-style)]"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <section className="flex flex-col items-start gap-3">
            <h3 className="mt-[-1.00px] whitespace-nowrap font-heading-4 text-[length:var(--heading-4-font-size)] font-[number:var(--heading-4-font-weight)] leading-[var(--heading-4-line-height)] tracking-[var(--heading-4-letter-spacing)] text-white [font-style:var(--heading-4-font-style)]">
              Služby
            </h3>
            <ul className="flex flex-col items-start gap-1.5">
              {serviceItems.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="h-auto whitespace-nowrap text-left font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-gray-1 transition-colors hover:text-white [font-style:var(--body-2-font-style)]"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <address className="not-italic">
            <div className="flex flex-col items-start gap-3">
              <h3 className="mt-[-1.00px] whitespace-nowrap font-heading-4 text-[length:var(--heading-4-font-size)] font-[number:var(--heading-4-font-weight)] leading-[var(--heading-4-line-height)] tracking-[var(--heading-4-letter-spacing)] text-white [font-style:var(--heading-4-font-style)]">
                Kontaktujte Nás
              </h3>
              <p className="w-full max-w-[302px] font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-gray-1 [font-style:var(--body-2-font-style)]">
                Náš tým podpory a prodeje je k dispozici 24/7, aby odpověděl na vaše dotazy.
              </p>
              <div className="flex flex-col items-start gap-3">
                {contactItems.map((item) => (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-3"
                  >
                    <img
                      className="h-6 w-6 shrink-0"
                      alt={item.iconAlt}
                      src={item.iconSrc}
                    />
                    <span className="font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-gray-1 [font-style:var(--body-2-font-style)] sm:whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </address>
        </div>
        <Separator className="mt-14 bg-white/20" />
        <div className="flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-body-3 text-[length:var(--body-3-font-size)] font-[number:var(--body-3-font-weight)] leading-[var(--body-3-line-height)] tracking-[var(--body-3-letter-spacing)] text-gray-1 [font-style:var(--body-3-font-style)]">
              Copyright © 2023 Instalatérské Služby Praha
            </span>
            <img className="h-2.5 w-px" alt="Line" src="/line-6-1.svg" />
            <span className="font-body-3 text-[length:var(--body-3-font-size)] font-[number:var(--body-3-font-weight)] leading-[var(--body-3-line-height)] tracking-[var(--body-3-letter-spacing)] text-gray-1 [font-style:var(--body-3-font-style)]">
              Design by TokoTema
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {legalItems.map((item, index) => (
              <div key={item} className="flex items-center gap-2.5">
                {index > 0 && (
                  <img className="h-2.5 w-px" alt="Line" src="/line-6-1.svg" />
                )}
                <button
                  type="button"
                  className="h-auto whitespace-nowrap text-left font-body-3 text-[length:var(--body-3-font-size)] font-[number:var(--body-3-font-weight)] leading-[var(--body-3-line-height)] tracking-[var(--body-3-letter-spacing)] text-gray-1 transition-colors hover:text-white [font-style:var(--body-3-font-style)]"
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
