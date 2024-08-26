"use client";

import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import HomePage from "./home/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
