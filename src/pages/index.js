import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="2A — digital-агентство для застройщиков" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Реализованные проекты" sources={['Medium']} />
        <AboutSection sectionId="about" heading="О нас" />
        <InterestsSection sectionId="details" heading="Направления" />
        <ProjectsSection sectionId="features" heading="Услуги" />
        <ContactSection sectionId="github" heading="Контакты" />
      </Page>
    </>
  );
}
