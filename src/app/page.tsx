"use client";

import HomeHeroGrid from "@/components/HomeHeroGrid";
import Header from "@/components/Header";
import ScrollToSection from "@/components/scrollToSection";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen grid grid-rows-[auto_auto_1fr]">
        <Header />
        <HomeHeroGrid
          title="Chris Gardiner's Portfolio"
          subtitle="Backend Engineer"
        />

        <section id="home">
          <div className="relative flex items-center justify-center h-full">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 w-auto h-full">
              <path
                fill="#BAE6FF"
                d="M42.7,-68.7C57.1,-65.7,71.7,-57.7,74.3,-45.5C76.9,-33.2,67.4,-16.6,65.9,-0.9C64.4,14.9,70.8,29.8,65.9,37.9C60.9,46,44.6,47.5,31.7,51.4C18.8,55.3,9.4,61.7,-1.5,64.2C-12.3,66.8,-24.7,65.4,-30.9,57.7C-37.2,49.9,-37.4,35.8,-47.3,25.2C-57.2,14.5,-76.9,7.2,-76.7,0.1C-76.5,-7,-56.5,-14.1,-43.9,-20C-31.2,-25.9,-25.8,-30.6,-19.7,-38.5C-13.6,-46.3,-6.8,-57.3,3.7,-63.6C14.2,-70,28.3,-71.8,42.7,-68.7Z"
                transform="translate(10 80), scale(1.5)"
              />
            </svg>
            <div className="relative z-10">
              <p className="ml-4 text-left font-sans text-xl w-2/3 md:w-1/2 3xl:-translate-x-32 -translate-y-10">
                I'm a passionate junior Back-End Developer based in Perth,
                Australia, currently studying Software Engineering with a strong
                interest in API Development...
              </p>
            </div>
          </div>

          <ScrollToSection id="about" />
        </section>
      </div>

      <section id="about" className="min-h-screen mt-20">
        <h1 className="pt-8 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold tracking-tighter text-transparent">
          About
        </h1>
        <hr className="mx-auto my-8 h-1 w-60 border-0 bg-gray-100" />
      </section>
      <section id="skills" className="min-h-screen">
        <h1 className="pt-8 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold tracking-tighter text-transparent">
          Skills
        </h1>
        <hr className="mx-auto my-8 h-1 w-60 border-0 bg-gray-100" />
      </section>
      <section id="projects" className="min-h-screen">
        <h1 className="pt-8 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold tracking-tighter text-transparent">
          Projects
        </h1>
        <hr className="mx-auto my-8 h-1 w-60 border-0 bg-gray-100" />
      </section>
      <section id="contact" className="min-h-screen">
        <h1 className="pt-8 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold tracking-tighter text-transparent">
          Contact
        </h1>
        <hr className="mx-auto my-8 h-1 w-60 border-0 bg-gray-100" />
      </section>
    </main>
  );
}
