import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const services = [
  {
    title: "Detekce úniků",
    description:
      "Rychle a přesně najdeme místo úniku vody v bytech i komerčních prostorách.",
    iconSrc: "/icon-2.svg",
    iconClassName: "w-[55.5px] h-[55px]",
  },
  {
    title: "Čištění odpadů",
    description:
      "Profesionální čištění ucpaných dřezů, toalet a kanalizačních potrubí.",
    iconSrc: "/icon-4.svg",
    iconClassName: "w-[55.5px] h-[55px]",
  },
  {
    title: "Opravy potrubí",
    description:
      "Opravujeme prasklé stoupačky, netěsnící spoje a poškozené vodovodní rozvody.",
    iconSrc: "/icon-6.svg",
    iconClassName: "w-[55.5px] h-[55px]",
  },
  {
    title: "Výměna rozvodů",
    description:
      "Kompletní rekonstrukce vodovodních a odpadních systémů v domech a bytech.",
    iconSrc: "/icon-5.svg",
    iconClassName: "w-[55px] h-[55px]",
  },
  {
    title: "Pravidelný servis",
    description:
      "Preventivní kontroly a údržba vašich instalatérských systémů pro klid na duši.",
    iconSrc: "/icon-3.svg",
    iconClassName: "w-[55px] h-[55px]",
  },
  {
    title: "Instalace zařizovacích předmětů",
    description:
      "Montáž baterií, toalet, umyvadel a sprchových koutů s důrazem na detail.",
    iconSrc: "/icon-7.svg",
    iconClassName: "w-[55.5px] h-[55px]",
  },
];

export const ServicesGridSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gray-2 py-[120px]">
      <div className="mx-auto flex w-full max-w-[1104px] flex-col items-center px-6 sm:px-8 lg:px-0">
        <header className="flex flex-col items-center gap-5 text-center">
          <div className="inline-flex items-center gap-3.5">
            <img className="h-5 w-px" alt="Line" src="/line-8.svg" />
            <p className="relative w-fit whitespace-nowrap font-sub-heading text-[length:var(--sub-heading-font-size)] font-[number:var(--sub-heading-font-weight)] leading-[var(--sub-heading-line-height)] tracking-[var(--sub-heading-letter-spacing)] text-text [font-style:var(--sub-heading-font-style)]">
              Naše Služby
            </p>
          </div>
          <h2 className="w-full max-w-[610px] font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] leading-[var(--heading-2-line-height)] tracking-[var(--heading-2-letter-spacing)] text-app-primary [font-style:var(--heading-2-font-style)] max-md:text-[40px] max-sm:text-[32px]">
            Kvalitní Instalatérské Služby, Které Poskytujeme
          </h2>
        </header>
        <div className="mt-[86px] grid w-full grid-cols-1 overflow-hidden bg-transparent sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isCenterColumn = index % 3 === 1;
            const isBottomRow = index >= 3;

            return (
              <Card
                key={service.title}
                className={[
                  "rounded-none border-0 bg-transparent shadow-none",
                  "min-h-[297px]",
                  "flex items-center justify-center",
                  "border-gray-3",
                  isCenterColumn ? "lg:bg-white" : "",
                  !isBottomRow ? "lg:border-b" : "",
                  index % 3 !== 2 ? "lg:border-r" : "",
                  index < 2 ? "sm:border-b" : "",
                  index % 2 === 0 ? "sm:border-r lg:border-r" : "sm:border-r-0",
                ].join(" ")}
              >
                <CardContent className="flex h-full w-full flex-col items-center justify-center px-6 py-12 text-center sm:px-8 lg:px-12">
                  <article className="inline-flex flex-col items-center gap-5">
                    <img
                      className={service.iconClassName}
                      alt={service.title}
                      src={service.iconSrc}
                    />
                    <div className="inline-flex flex-col items-center gap-3.5">
                      <h3 className="mt-[-1.00px] w-fit whitespace-nowrap font-heading-5 text-[length:var(--heading-5-font-size)] font-[number:var(--heading-5-font-weight)] leading-[var(--heading-5-line-height)] tracking-[var(--heading-5-letter-spacing)] text-app-primary [font-style:var(--heading-5-font-style)]">
                        {service.title}
                      </h3>
                      <p className="w-full max-w-[272px] font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-text [font-style:var(--body-2-font-style)]">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-[-594px] hidden w-full max-w-[1104px] lg:block">
          <div className="grid h-[594px] grid-cols-3 grid-rows-2">
            <div className="col-span-3 row-start-2 self-start">
              <Separator className="h-px w-full bg-gray-3" />
            </div>
            <div className="col-start-2 row-span-2 row-start-1 justify-self-start">
              <Separator
                orientation="vertical"
                className="h-full w-px bg-gray-3"
              />
            </div>
            <div className="col-start-3 row-span-2 row-start-1 justify-self-start">
              <Separator
                orientation="vertical"
                className="h-full w-px bg-gray-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
