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

<script src="https://cdn.viqeo.tv/vn/vn_vq_init.js?vq_profile_id=15300&vq_player_id=4422"  defer></script>

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
