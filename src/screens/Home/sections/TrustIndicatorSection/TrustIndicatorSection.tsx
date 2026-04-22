import { Card, CardContent } from "../../../../components/ui/card";

const trustIndicators = [
  {
    title: "Years of Experience",
    description:
      "Id sagittis adipiscing viverra ut viverra eu duis. Sit ullamcorper sed senectus sit ipsum mollis. Sit.",
    icon: "/icon-9.svg",
  },
  {
    title: "Fast Service",
    description:
      "Id sagittis adipiscing viverra ut viverra eu duis. Sit ullamcorper sed senectus sit ipsum mollis. Sit.",
    icon: "/icon.svg",
  },
  {
    title: "Affordable Pricing",
    description:
      "Id sagittis adipiscing viverra ut viverra eu duis. Sit ullamcorper sed senectus sit ipsum mollis. Sit.",
    icon: "/icon-8.svg",
  },
];

export const TrustIndicatorSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-8 md:py-20 lg:px-[150px] lg:py-[120px]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-10 lg:grid-cols-[498px_minmax(0,1fr)] lg:gap-[74px]">
        <Card className="h-full overflow-hidden rounded-none border-0 bg-gray-1 shadow-none">
          <CardContent className="flex h-full min-h-[420px] flex-col justify-start p-8 md:p-10 lg:min-h-[606px] lg:px-[54px] lg:py-11">
            <div className="flex flex-col items-start">
              <h3 className="relative w-fit mt-[-1.00px] font-heading-1 text-[length:var(--heading-1-font-size)] font-[number:var(--heading-1-font-weight)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)] text-app-primary whitespace-nowrap">
                <span className="font-heading-1 text-[length:var(--heading-1-font-size)] font-[number:var(--heading-1-font-weight)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)] text-[#030302]">
                  128{" "}
                </span>
                <span className="font-heading-1 text-[length:var(--heading-1-font-size)] font-[number:var(--heading-1-font-weight)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)] text-[#ff5b00]">
                  +
                </span>
              </h3>
              <p className="relative w-fit font-body-1 text-[length:var(--body-1-font-size)] font-[number:var(--body-1-font-weight)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] text-app-primary whitespace-nowrap">
                Professional Team
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col items-start gap-10 lg:pt-2">
          <header className="flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-3.5">
              <img className="h-5 w-px" alt="Line" src="/line-8.svg" />
              <p className="relative w-fit font-sub-heading text-[length:var(--sub-heading-font-size)] font-[number:var(--sub-heading-font-weight)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)] text-text whitespace-nowrap">
                About Us
              </p>
            </div>
            <h2 className="max-w-[568px] font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)] text-app-primary">
              Your Trusted Partners in Plumbing Solutions
            </h2>
          </header>
          <div className="flex flex-col items-start gap-[34px]">
            {trustIndicators.map((item) => (
              <article
                key={item.title}
                className="flex items-start gap-6 md:gap-10"
              >
                <img
                  className="h-[100px] w-[100px] shrink-0"
                  alt={item.title}
                  src={item.icon}
                />
                <div className="inline-flex flex-col items-start gap-3.5">
                  <h3 className="relative w-fit mt-[-1.00px] font-heading-6 text-[length:var(--heading-6-font-size)] font-[number:var(--heading-6-font-weight)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)] text-app-primary whitespace-nowrap">
                    {item.title}
                  </h3>
                  <p className="max-w-[428px] font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)] text-text">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
