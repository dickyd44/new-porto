"use client";
import AboutSection from "@/src/components/organisms/about";
import HomeSection from "@/src/components/organisms/home";
import MySkillsSection from "@/src/components/organisms//about/my-skills";
import ServiceSection from "@/src/components/organisms/service";
import PortfolioSection from "@/src/components/organisms/portfolio";
import TestimonialSection from "@/src/components/organisms/portfolio/testimonial";
import ExperienceSection from "@/src/components/organisms/experience";
import ContactSection from "@/src/components/organisms/contact";
import { useScrollToTop } from "@/src/store/scroll-to-top";
import { ButtonScrollToTop } from "@/src/components/atoms/button-scroll-to-top";

export default function Home() {
  const { isVisible, homeRef, scrollToTop } = useScrollToTop();

  return (
    <main ref={homeRef} className="w-full">
      <HomeSection />
      <AboutSection />
      <MySkillsSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialSection />
      <ExperienceSection />
      <ContactSection />

      <ButtonScrollToTop isVisible={isVisible} scrollToTop={scrollToTop} />
    </main>
  );
}
