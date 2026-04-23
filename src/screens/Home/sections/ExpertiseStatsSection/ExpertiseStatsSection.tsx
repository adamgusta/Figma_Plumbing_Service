import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";
import { Separator } from "../../../../components/ui/separator";

const expertiseItems = [
  { title: "Detekce úniků", value: 90 },
  { title: "Opravy potrubí", value: 85 },
  { title: "Havarijní služba", value: 90 },
  { title: "Čištění odpadů", value: 85 },
];

export const ExpertiseStatsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white px-6 py-8 md:px-10 lg:px-[150px] lg:py-[30px]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_568px] lg:gap-12">
        <div className="flex flex-col items-start">
          <header className="flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-3.5">
              <img className="h-5 w-px" alt="Line" src="/line-8.svg" />
              <p className="font-sub-heading text-[length:var(--sub-heading-font-size)] font-[number:var(--sub-heading-font-weight)] leading-[var(--sub-heading-line-height)] tracking-[var(--sub-heading-letter-spacing)] whitespace-nowrap text-text [font-style:var(--sub-heading-font-style)]">
                Odbornost
              </p>
            </div>
            <h2 className="max-w-[504px] font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] leading-[var(--heading-2-line-height)] tracking-[var(--heading-2-letter-spacing)] text-app-primary [font-style:var(--heading-2-font-style)] max-md:text-4xl">
              Špičková Odbornost v Instalatérství
            </h2>
          </header>
          <div className="mt-8 flex w-full flex-col items-start gap-5 sm:flex-row sm:items-end lg:mt-[42px]">
            <div className="flex h-[180px] w-[132px] items-end overflow-hidden rounded-[8px_20px_0px_0px] bg-accent-hover">
              <div className="mb-[-19px] h-[187px] w-[130px] rotate-180 bg-purple-1" />
            </div>
            <article className="flex flex-col items-start gap-5">
              <div className="inline-flex flex-col items-start">
                <p className="mt-[-1.00px] w-fit [font-family:'Onest',Helvetica] text-[32px] font-normal leading-8 tracking-[0] text-app-primary">
                  <span className="font-semibold leading-[44.8px] text-[#030302]">
                    468{" "}
                  </span>
                  <span className="font-semibold leading-[44.8px] text-[#ff5b00]">
                    +
                  </span>
                </p>
                <h3 className="w-fit font-body-1-bold text-[length:var(--body-1-bold-font-size)] font-[number:var(--body-1-bold-font-weight)] leading-[var(--body-1-bold-line-height)] tracking-[var(--body-1-bold-letter-spacing)] whitespace-nowrap text-app-primary [font-style:var(--body-1-bold-font-style)]">
                  Moderní Vybavení
                </h3>
              </div>
              <img className="h-px w-[270px]" alt="Line" src="/line-2-1.svg" />
              <p className="w-[270px] font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-text [font-style:var(--body-2-font-style)]">
                Používáme nejmodernější technologie pro diagnostiku a opravy.
              </p>
            </article>
          </div>
        </div>
        <Card className="relative overflow-hidden rounded-none border-0 bg-app-secondary shadow-none">
          <CardContent className="relative flex min-h-[414px] flex-col justify-center overflow-hidden p-6 sm:p-8 lg:px-16 lg:py-[54px]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-[-264px] top-[-85px] flex h-[571px] w-[986px] flex-col items-center gap-[85.2px]">
                <div className="ml-[627.6px] mt-[23.1px] h-[190.66px] w-[334.78px] rotate-[8.28deg] rounded-[167.39px/95.33px] border border-solid border-[#1e2a55]" />
                <div className="ml-[-438.3px] h-[272px] w-[548px] rounded-[274px/136px] border border-solid border-[#1e2a55]" />
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-start gap-5">
              {expertiseItems.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex flex-col items-start gap-2.5"
                >
                  <h3 className="mt-[-1.00px] w-fit font-heading-6 text-[length:var(--heading-6-font-size)] font-[number:var(--heading-6-font-weight)] leading-[var(--heading-6-line-height)] tracking-[var(--heading-6-letter-spacing)] whitespace-nowrap text-white [font-style:var(--heading-6-font-style)]">
                    {item.title}
                  </h3>
                  <div className="relative w-full max-w-[440px] min-w-[280px]">
                    <Progress
                      value={item.value}
                      className="h-[22px] w-full rounded-md bg-gray-1 [&>div]:bg-purple-2"
                    />
                    <span
                      className="absolute top-1/2 -translate-y-1/2 font-caption-1 text-[length:var(--caption-1-font-size)] font-[number:var(--caption-1-font-weight)] leading-[var(--caption-1-line-height)] tracking-[var(--caption-1-letter-spacing)] whitespace-nowrap text-app-secondary [font-style:var(--caption-1-font-style)]"
                      style={{ left: `calc(${item.value}% - 48px)` }}
                    >
                      {item.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Separator className="sr-only" />
    </section>
  );
};
