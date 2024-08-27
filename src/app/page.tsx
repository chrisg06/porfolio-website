"use client";

import Header from "@/components/Header";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import HomePage from "./home/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";
import ScrollToTop from "@/components/ScrollToTop";
import useIntersectionObserver from "@/hooks/IntersectionObserver";
import Footer from "@/components/Footer";

export default function Home() {
  const setActiveSection = (section: string) => {
    history.replaceState(null, "", `/#${section}`);
  };

  useIntersectionObserver(setActiveSection);
  return (
    <main>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
