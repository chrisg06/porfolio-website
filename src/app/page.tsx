"use client";

import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import HomePage from "./home/page";
import ProjectsPage from "./projects/page";
import ScrollToTop from "@/components/ScrollToTop";
import useIntersectionObserver from "@/hooks/IntersectionObserver";
import Footer from "@/components/Footer";

export default function Home() {
  const setActiveSection = (section: string) => {
    if (section === "home") {
      window.history.replaceState(null, "", "/");
      return;
    }
    history.replaceState(null, "", `/#${section}`);
  };

  useIntersectionObserver(setActiveSection);
  return (
    <main>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
