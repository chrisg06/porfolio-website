"use client";

import { useEffect, useState } from "react";
import HeroTitle from "@/components/heroTitle";
import IconCloud from "@/components/magicui/icon-cloud";
import GithubContributions from "@/components/GithubContributions";
import StatCard from "@/components/StatCard";
import ScrollToSection from "@/components/scrollToSection";

function getDaysSoFarInYear(): number {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diffInMilliseconds = now.getTime() - startOfYear.getTime();
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  return diffInDays + 1; // Add 1 to include the current day
}

export default function AboutPage() {
  const coffeeCount = getDaysSoFarInYear() * 1.5;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const slugs = [
    "typescript",
    "javascript",
    "python",
    "django",
    "fastapi",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "amazonaws",
    "postgresql",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "c",
    "angular",
    "mongodb",
    "redis",
    "vim",
    "githubactions",
  ];

  return (
    <section id="about" className="min-h-screen bg-white w-full">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f9fafb"
            d="M0,128L30,149.3C60,171,120,213,180,224C240,235,300,213,360,208C420,203,480,213,540,197.3C600,181,660,139,720,138.7C780,139,840,181,900,218.7C960,256,1020,288,1080,266.7C1140,245,1200,171,1260,149.3C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            transform="translate(0, -30)"></path>
        </svg>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <HeroTitle title="About" underline={false} />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 items-center mx-8 md:mx-16 lg:mx-24 place-items-center">
        <div className="col-span-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 items-center place-items-center">
            <div className="col-span-1 px-2">
              <GithubContributions />
            </div>
            <div className="col-span-1 px-2">
              <StatCard
                title="Coffee Counter"
                value={coffeeCount}
                subtext="Cups Consumed"
                loading={loading}
              />
            </div>
            <div className="col-span-1 px-2">
              <StatCard
                title="Lines of Code"
                value={136}
                subtext="So Far"
                loading={loading}
                valueUnit="K"
              />
            </div>
          </div>

          <p className="mt-8 text-center text-xl md:text-left md:w-4/5 md:ml-4">
            I started my software development journey in 2020 and have been
            developing powerful web applications ever since. The primary focus
            for my development has been around the field of aviation, and tools
            for online flight simulation.
          </p>
          <p className="mt-8 text-center text-xl md:text-left md:w-4/5 md:ml-4">
            My favourite technologies to work with are Python and TypeScript,
            which allow me to create powerful and efficient applications. I
            always enjoy discovering new technologies, and I am currently
            teaching myself Java and C to further expand my knowledge. When I am
            not coding, you can find me sharing my passion for sport while
            working as a Rowing Coach, or catching up with friends.
          </p>
        </div>
        <div className="col-span-1">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <ScrollToSection id="skills" alwaysBounce={false} />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f9fafb"
          d="M0,128L30,149.3C60,171,120,213,180,208C240,203,300,149,360,117.3C420,85,480,75,540,106.7C600,139,660,213,720,229.3C780,245,840,203,900,186.7C960,171,1020,181,1080,202.7C1140,224,1200,256,1260,256C1320,256,1380,224,1410,208L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          transform="translate(0 0)"></path>
      </svg>
    </section>
  );
}
