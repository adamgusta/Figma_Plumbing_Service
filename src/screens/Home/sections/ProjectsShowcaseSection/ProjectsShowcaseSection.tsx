import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const projectCards = [
  {
    title: "Rekonstrukce komerčních rozvodů",
    className: "aspect-[692/356]",
    innerClassName: "h-full w-full bg-app-secondary",
  },
  {
    title: "Havarijní oprava potrubí",
    className: "aspect-[428/356]",
    innerClassName: "h-full w-full bg-app-secondary",
  },
];

export const ProjectsShowcaseSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 py-10 md:px-10 lg:px-[150px] lg:py-10">
        <header className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,504px)_minmax(0,428px)] lg:items-start lg:justify-between">
          <div className="flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-3.5">
              <img className="h-5 w-px" alt="Line" src="/line-8.svg" />
              <span className="font-sub-heading text-[length:var(--sub-heading-font-size)] font-[number:var(--sub-heading-font-weight)] leading-[var(--sub-heading-line-height)] tracking-[var(--sub-heading-letter-spacing)] text-text [font-style:var(--sub-heading-font-style)]">
                Projekty
              </span>
            </div>
            <h2 className="max-w-[504px] font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] leading-[var(--heading-2-line-height)] tracking-[var(--heading-2-letter-spacing)] text-app-primary [font-style:var(--heading-2-font-style)]">
              Poslední Projekty
            </h2>
          </div>
          <div className="border-l border-[#5c6cff] pl-5 lg:mt-10">
            <p className="max-w-[428px] font-body-1 text-[length:var(--body-1-font-size)] font-[number:var(--body-1-font-weight)] leading-[var(--body-1-line-height)] tracking-[var(--body-1-letter-spacing)] text-text [font-style:var(--body-1-font-style)]">
              Ukázka našich nedávných prací pro spokojené zákazníky v Praze a okolí.
            </p>
          </div>
        </header>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,692px)_minmax(0,428px)]">
          {projectCards.map((project, index) => (
            <Card
              key={`project-card-${index}`}
              className="overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none"
            >
              <CardContent className="p-0">
                <div
                  className={`${project.className} w-full overflow-hidden bg-app-secondary`}
                >
                  <div className={project.innerClassName} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <footer className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-heading-5 text-[length:var(--heading-5-font-size)] font-[number:var(--heading-5-font-weight)] leading-[var(--heading-5-line-height)] tracking-[var(--heading-5-letter-spacing)] text-app-primary [font-style:var(--heading-5-font-style)]">
            Rekonstrukce komerčních rozvodů
          </h3>
          <Button className="h-auto self-start rounded-[15px] bg-app-accent px-10 py-4 font-body-2 text-[length:var(--body-2-font-size)] font-[number:var(--body-2-font-weight)] leading-[var(--body-2-line-height)] tracking-[var(--body-2-letter-spacing)] text-white hover:bg-accent-hover [font-style:var(--body-2-font-style)] sm:self-auto">
            Zobrazit vše
          </Button>
        </footer>
      </div>
    </section>
  );
};
