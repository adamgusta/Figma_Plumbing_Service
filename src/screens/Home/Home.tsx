import { Card, CardContent } from "../../components/ui/card";
import { CompetitiveAdvantagesSection } from "./sections/CompetitiveAdvantagesSection";
import { ContactFooterSection } from "./sections/ContactFooterSection";
import { ExpertiseStatsSection } from "./sections/ExpertiseStatsSection";
import { ExpertTeamSection } from "./sections/ExpertTeamSection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
import { NavigationBannerSection } from "./sections/NavigationBannerSection";
import { ProjectsShowcaseSection } from "./sections/ProjectsShowcaseSection";
import { ServicesGridSection } from "./sections/ServicesGridSection";
import { TrustIndicatorSection } from "./sections/TrustIndicatorSection";

const trustedLogos = [{ alt: "Logo", src: "/logo.svg" }];

export const Home = (): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <div className="flex w-full flex-col">
        <NavigationBannerSection />
        <HeroIntroSection />
        <section className="w-full bg-app-secondary">
          <div className="mx-auto flex min-h-64 w-full max-w-[1440px] items-center px-4 py-10 sm:px-6 lg:px-[150px]">
            <Card className="w-full border-0 bg-transparent shadow-none">
              <CardContent className="flex flex-col items-start justify-between gap-8 px-0 py-0 md:flex-row md:items-center md:gap-[148px]">
                <h2 className="w-full max-w-[264px] font-heading-6 text-[length:var(--heading-6-font-size)] font-[number:var(--heading-6-font-weight)] leading-[var(--heading-6-line-height)] tracking-[var(--heading-6-letter-spacing)] text-white [font-style:var(--heading-6-font-style)]">
                  Trusted by millions of customers.
                </h2>
                <div className="flex flex-wrap items-center gap-6">
                  {trustedLogos.map((logo, index) => (
                    <img
                      key={`trusted-logo-${index}`}
                      className="h-auto max-w-full shrink-0"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <TrustIndicatorSection />
        <ExpertiseStatsSection />
        <ServicesGridSection />
        <CompetitiveAdvantagesSection />
        <ExpertTeamSection />
        <ProjectsShowcaseSection />
        <ContactFooterSection />
      </div>
    </main>
  );
};
