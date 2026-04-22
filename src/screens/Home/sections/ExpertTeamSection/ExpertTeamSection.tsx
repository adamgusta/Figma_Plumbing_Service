import { Card, CardContent } from "../../../../components/ui/card";

const teamMembers = [
  {
    name: "Eric T. Shields",
    role: "Plumber",
    imageWrapperClassName: "justify-start",
    imageClassName: "w-[886px] h-[591px] -ml-[163px] bg-app-secondary",
  },
  {
    name: "Timothy Beus",
    role: "Plumber",
    imageWrapperClassName: "items-end justify-end",
    imageClassName:
      "w-[1106px] h-[739px] -mr-[198px] -mb-[280px] bg-app-secondary",
  },
  {
    name: "Louis J. Proulx",
    role: "Plumber",
    imageWrapperClassName: "justify-start",
    imageClassName:
      "w-[836px] h-[1253px] -mt-[202px] -ml-[236px] bg-app-secondary",
  },
];

export const ExpertTeamSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white px-4 py-[120px] sm:px-6 lg:px-[150px]">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col items-center">
        <header className="flex max-w-[793px] flex-col items-center gap-5 text-center">
          <div className="inline-flex items-center gap-3.5">
            <img className="h-5 w-px" alt="Line" src="/line-8.svg" />
            <p className="w-fit whitespace-nowrap font-sub-heading text-[length:var(--sub-heading-font-size)] font-[number:var(--sub-heading-font-weight)] leading-[var(--sub-heading-line-height)] tracking-[var(--sub-heading-letter-spacing)] text-text [font-style:var(--sub-heading-font-style)]">
              Our Team
            </p>
          </div>
          <h2 className="max-w-[625px] font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] leading-[var(--heading-2-line-height)] tracking-[var(--heading-2-letter-spacing)] text-app-primary [font-style:var(--heading-2-font-style)]">
            Meet Expert Plumbing
          </h2>
          <p className="max-w-[793px] font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-text [font-style:var(--body-2-font-style)]">
            Pellentesque nibh donec senectus fusce in varius a. Egestas nisl
            proin libero ornare mauris eget. Massa sed suspendisse at velit sed
            eget diam sagittis cursus. Vulputate ullamcorper malesuada ac.
          </p>
        </header>
        <div className="mt-[60px] grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="rounded-none border-0 bg-gray-2 shadow-none"
            >
              <CardContent className="flex h-full flex-col p-0">
                <div className="px-6 pt-11 text-center">
                  <h3 className="font-heading-5 text-[length:var(--heading-5-font-size)] font-[number:var(--heading-5-font-weight)] leading-[var(--heading-5-line-height)] tracking-[var(--heading-5-letter-spacing)] text-app-primary [font-style:var(--heading-5-font-style)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-text [font-style:var(--body-2-font-style)]">
                    {member.role}
                  </p>
                </div>
                <div
                  className={`mt-2.5 flex h-[422px] w-full overflow-hidden ${member.imageWrapperClassName}`}
                  aria-hidden="true"
                >
                  <div className={member.imageClassName} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
