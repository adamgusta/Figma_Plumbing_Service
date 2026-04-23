import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const advantageItems = [
  {
    title: "Odbornost a zkušenost",
    description:
      "Máme za sebou stovky úspěšných realizací a letitou praxi v oboru.",
  },
  {
    title: "Kvalitní zpracování",
    description:
      "Používáme jen prověřené materiály a dbáme na precizní provedení každého detailu.",
  },
  {
    title: "Transparentní ceny",
    description:
      "U nás vždy víte, kolik zaplatíte. Žádné skryté poplatky ani nepříjemná překvapení.",
  },
];

export const CompetitiveAdvantagesSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-app-secondary">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[26%] top-[60%] h-[556px] w-[474px] -translate-y-1/2 rounded-[237px/278px] border border-[#1e2a55]" />
        <div className="absolute right-[-18%] top-[-10%] h-[616px] w-[1102px] rounded-[551px/308px] border border-[#1e2a55]" />
      </div>
      <div className="relative mx-auto flex w-full max-w-[1140px] flex-col px-8 py-[72px] sm:px-10 lg:px-0 lg:py-[120px]">
        <header className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[568px] flex-col items-start gap-5">
            <div className="inline-flex items-center gap-3.5">
              <img className="h-5 w-px" alt="Line" src="/line-8.svg" />
              <p className="w-fit whitespace-nowrap font-sub-heading text-[length:var(--sub-heading-font-size)] font-[number:var(--sub-heading-font-weight)] leading-[var(--sub-heading-line-height)] tracking-[var(--sub-heading-letter-spacing)] text-text [font-style:var(--sub-heading-font-style)]">
                Proč si vybrat nás
              </p>
            </div>
            <h2 className="max-w-[568px] font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] leading-[var(--heading-2-line-height)] tracking-[var(--heading-2-letter-spacing)] text-white [font-style:var(--heading-2-font-style)]">
              Vaše nejlepší volba pro instalatérská řešení
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <div className="w-fit whitespace-nowrap [font-family:'Onest',Helvetica] text-[76px] font-normal leading-[76px] tracking-[0] text-gray-1">
              <span className="font-semibold leading-[91.2px] text-[#eeeeee]">
                25
              </span>
              <span className="font-semibold leading-[91.2px] text-[#eeeeee]">
                {" "}
              </span>
              <span className="font-semibold leading-[91.2px] text-[#ff5b00]">
                +
              </span>
            </div>
            <p className="w-fit whitespace-nowrap font-body-1 text-[length:var(--body-1-font-size)] font-[number:var(--body-1-font-weight)] leading-[var(--body-1-line-height)] tracking-[var(--body-1-letter-spacing)] text-gray-1 [font-style:var(--body-1-font-style)]">
              Let zkušeností
            </p>
          </div>
        </header>
        <Card className="mt-10 w-full overflow-hidden rounded-none border-0 bg-text shadow-none lg:mt-[62px]">
          <CardContent className="p-0">
            <div className="h-[320px] w-full bg-gray-1 sm:h-[420px] lg:h-[560px]" />
          </CardContent>
        </Card>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:mt-16">
          {advantageItems.map((item, index) => (
            <div key={item.title} className="flex items-start gap-6 md:gap-8">
              <article className="flex flex-1 flex-col items-start gap-3.5">
                <h3 className="max-w-[272px] font-heading-5 text-[length:var(--heading-5-font-size)] font-[number:var(--heading-5-font-weight)] leading-[var(--heading-5-line-height)] tracking-[var(--heading-5-letter-spacing)] text-white [font-style:var(--heading-5-font-style)]">
                  {item.title}
                </h3>
                <p className="font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-gray-1 [font-style:var(--body-2-font-style)]">
                  {item.description}
                </p>
              </article>
              {index < advantageItems.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden h-[120px] w-px bg-[#31406d] md:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
