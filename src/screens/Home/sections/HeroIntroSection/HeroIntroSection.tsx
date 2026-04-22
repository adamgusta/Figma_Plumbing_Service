import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const steps = [
  { number: "01", label: "Contact Us" },
  { number: "02", label: "Consultation" },
  { number: "03", label: "Scheduling" },
  { number: "05", label: "Plumbing Service" },
];

const stats = [
  { value: "1200+", label: "Happy Customer" },
  { value: "600+", label: "Work Completed" },
];

export const HeroIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[812px] w-full max-w-[1440px] grid-cols-1 gap-12 px-6 py-[120px] md:px-12 lg:grid-cols-[minmax(320px,367px)_minmax(260px,503px)_minmax(240px,270px)] lg:items-start lg:gap-12 lg:px-[150px]">
        <header className="flex flex-col items-start">
          <div className="flex flex-col items-start gap-6">
            <h1 className="w-full max-w-[367px] font-heading-1 text-[length:var(--heading-1-font-size)] font-[number:var(--heading-1-font-weight)] leading-[var(--heading-1-line-height)] tracking-[var(--heading-1-letter-spacing)] text-app-primary [font-style:var(--heading-1-font-style)]">
              Plumbing Solutions You Can Rely On
            </h1>
            <p className="w-full max-w-[277px] font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-app-primary [font-style:var(--body-2-font-style)]">
              Id sagittis adipiscing viverra ut viverra eu duis. Sit ullamcorper
              sed senectus sit ipsum mollis. Sit.
            </p>
          </div>
          <Button
            type="button"
            className="mt-12 h-auto rounded-[15px] bg-app-accent px-10 py-4 font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-white shadow-none hover:bg-[color:var(--accent-hover)] [font-style:var(--body-2-font-style)]"
          >
            Get Started
          </Button>
          <div className="mt-[74px] flex w-full max-w-[341px] items-center gap-8 sm:gap-11">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center gap-8 sm:gap-11"
              >
                <div className="inline-flex flex-col items-start gap-1">
                  <p className="whitespace-nowrap font-heading-3 text-[length:var(--heading-3-font-size)] font-[number:var(--heading-3-font-weight)] leading-[var(--heading-3-line-height)] tracking-[var(--heading-3-letter-spacing)] text-app-primary [font-style:var(--heading-3-font-style)]">
                    {stat.value}
                  </p>
                  <p className="whitespace-nowrap font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-text [font-style:var(--body-2-font-style)]">
                    {stat.label}
                  </p>
                </div>
                {index < stats.length - 1 ? (
                  <Separator
                    orientation="vertical"
                    className="h-[60px] w-px bg-[url('/line-1.svg')] bg-cover bg-center bg-no-repeat"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </header>
        <div className="flex min-h-[500px] w-full items-stretch justify-center lg:min-h-[692px]">
          <div className="h-full min-h-[500px] w-full max-w-[503px] overflow-hidden bg-app-secondary lg:min-h-[692px]">
            <div className="-ml-[398px] -mt-3 h-[713px] w-[1067px] bg-app-secondary" />
          </div>
        </div>
        <aside className="flex flex-col items-start lg:pt-[60px]">
          <div className="flex w-full max-w-[270px] flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2.5">
              <span className="block h-4 w-4 rounded-lg bg-app-accent" />
              <h2 className="whitespace-nowrap font-heading-6 text-[length:var(--heading-6-font-size)] font-[number:var(--heading-6-font-weight)] leading-[var(--heading-6-line-height)] tracking-[var(--heading-6-letter-spacing)] text-app-primary [font-style:var(--heading-6-font-style)]">
                How It Works
              </h2>
            </div>
            <img
              className="h-px w-full max-w-[270px]"
              alt="Line"
              src="/line-2-1.svg"
            />
            <p className="w-full max-w-[270px] font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-text [font-style:var(--body-2-font-style)]">
              Id sagittis adipiscing viverra ut viverra eu duis. Sit ullamcorper
              sed senectus sit ipsum mollis. Sit.
            </p>
          </div>
          <nav
            aria-label="How it works steps"
            className="mt-[106px] flex w-full max-w-[240px] flex-col items-start gap-3"
          >
            {steps.map((step) => (
              <div key={step.number} className="w-full">
                <button
                  type="button"
                  className="flex h-auto w-full items-start gap-5 text-left"
                >
                  <span className="w-[30px] font-body-1 text-[length:var(--body-1-font-size)] font-[number:var(--body-1-font-weight)] leading-[var(--body-1-line-height)] tracking-[var(--body-1-letter-spacing)] text-app-primary [font-style:var(--body-1-font-style)]">
                    {step.number}
                  </span>
                  <span className="whitespace-nowrap font-body-1 text-[length:var(--body-1-font-size)] font-[number:var(--body-1-font-weight)] leading-[var(--body-1-line-height)] tracking-[var(--body-1-letter-spacing)] text-app-primary [font-style:var(--body-1-font-style)]">
                    {step.label}
                  </span>
                </button>
                <img
                  className="mt-3 h-px w-full max-w-[240px]"
                  alt="Line"
                  src="/line-3-1.svg"
                />
              </div>
            ))}
          </nav>
        </aside>
      </div>
    </section>
  );
};
