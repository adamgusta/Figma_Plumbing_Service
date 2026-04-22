import { Button } from "../../../../components/ui/button";

const topBarItems = [
  { type: "text", value: "+62 864 6444 2222" },
  { type: "divider", value: "/line-2-2.svg" },
  { type: "text", value: "hi@yourdomain.com" },
] as const;

const navigationItems = [
  "Home",
  "About Us",
  "Services",
  "Projects",
  "Contact Us",
] as const;

export const NavigationBannerSection = (): JSX.Element => {
  return (
    <header className="relative w-full bg-app-secondary">
      <div className="flex min-h-16 w-full items-center justify-center bg-gray-2">
        <div className="flex w-full max-w-[1140px] items-center justify-between gap-6 px-4 py-5 lg:px-0">
          <address className="not-italic">
            <div className="inline-flex flex-wrap items-center gap-4">
              {topBarItems.map((item, index) =>
                item.type === "divider" ? (
                  <img
                    key={`top-bar-divider-${index}`}
                    className="h-2.5 w-px shrink-0"
                    alt="Line"
                    src={item.value}
                  />
                ) : (
                  <span
                    key={`top-bar-text-${index}`}
                    className="font-navigation text-[length:var(--navigation-font-size)] font-[number:var(--navigation-font-weight)] leading-[var(--navigation-line-height)] tracking-[var(--navigation-letter-spacing)] text-app-primary whitespace-nowrap [font-style:var(--navigation-font-style)]"
                  >
                    {item.value}
                  </span>
                ),
              )}
            </div>
          </address>
          <Button
            type="button"
            variant="ghost"
            className="h-auto gap-[18px] rounded-none p-0 text-app-accent hover:bg-transparent hover:text-accent-hover"
          >
            <img
              className="h-6 w-6 shrink-0"
              alt="Book open"
              src="/book-open.svg"
            />
            <span className="font-navigation text-[length:var(--navigation-font-size)] font-[number:var(--navigation-font-weight)] leading-[var(--navigation-line-height)] tracking-[var(--navigation-letter-spacing)] whitespace-nowrap [font-style:var(--navigation-font-style)]">
              Book Now
            </span>
          </Button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center px-4 pb-6 pt-8 lg:px-0">
        <div className="flex w-full max-w-[1140px] items-center justify-between gap-8">
          <h1 className="mt-[-1.00px] whitespace-nowrap [font-family:'Onest',Helvetica] text-5xl font-medium leading-[67.2px] tracking-[0] text-white">
            Plumbing
          </h1>
          <nav aria-label="Section navigation">
            <ul className="flex flex-wrap items-center gap-5">
              {navigationItems.map((item) => (
                <li key={item}>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-auto rounded-none p-0 font-navigation text-[length:var(--navigation-font-size)] font-[number:var(--navigation-font-weight)] leading-[var(--navigation-line-height)] tracking-[var(--navigation-letter-spacing)] text-gray-1 hover:bg-transparent hover:text-white whitespace-nowrap [font-style:var(--navigation-font-style)]"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
