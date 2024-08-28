"use client";

import HomeHeroGrid from "@/components/HomeHeroGrid";
import Header from "@/components/Header";
import ScrollToSection from "@/components/scrollToSection";
import TypingAnimation from "@/components/magicui/typing-animation";

export default function HomePage() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_auto_1fr] w-full">
      <Header />
      <HomeHeroGrid
        title="Chris Gardiner's Portfolio"
        subtitle="Full Stack Engineer"
      />
      <section id="home" className="p-4 mt-8">
        <div className="flex items-center justify-center h-full">
          <TypingAnimation
            className="text-center font-light text-xl w-2/3 md:w-1/2 3xl:-translate-x-32 -translate-y-10"
            text="Hello! I'm a passionate and dedicated software engineer currently pursuing a Bachelor of Computing with a major in Software Engineering at Curtin University. I have experience in a variety of languages and frameworks, and I am always looking to learn more..."
            duration={25}
          />
        </div>

        <ScrollToSection id="about" />
      </section>
    </div>
  );
}
