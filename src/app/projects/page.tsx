import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import HeroTitle from "@/components/heroTitle";
import ScrollToSection from "@/components/scrollToSection";
import ViewProjectButton from "@/components/viewProjectButton";
import { TechnologyList } from "@/components/technologyList";

import { FaPython, FaDocker, FaReact, FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

import {
  SiFastapi,
  SiNginxproxymanager,
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiNestjs,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const technologies = {
  wxData: [
    { icon: FaPython, title: "Python" },
    { icon: FaDocker, title: "Docker" },
  ],
  pilotAssistAPI: [
    { icon: FaPython, title: "Python" },
    { icon: SiFastapi, title: "FastAPI" },
    { icon: SiMongodb, title: "MongoDB" },
    { icon: SiRedis, title: "Redis" },
    { icon: FaDocker, title: "Docker" },
    { icon: SiNginxproxymanager, title: "Nginx Proxy Manager" },
  ],
  vatpacCore: [
    { icon: SiTypescript, title: "TypeScript" },
    { icon: SiNestjs, title: "NestJS" },
    { icon: SiMongodb, title: "MongoDB" },
    { icon: SiRedis, title: "Redis" },
    { icon: FaDocker, title: "Docker" },
    { icon: SiNginxproxymanager, title: "Nginx Proxy Manager" },
  ],
  vatpacConference: [
    { icon: RiNextjsFill, title: "Next.js" },
    { icon: SiTailwindcss, title: "Tailwind CSS" },
    { icon: SiTypescript, title: "TypeScript" },
    { icon: FaReact, title: "React" },
    { icon: SiVercel, title: "Vercel" },
  ],
  portfolio: [
    { icon: RiNextjsFill, title: "Next.js" },
    { icon: SiTailwindcss, title: "Tailwind CSS" },
    { icon: SiTypescript, title: "TypeScript" },
    { icon: FaReact, title: "React" },
    { icon: SiVercel, title: "Vercel" },
  ],
};

const data = [
  {
    title: "2022",
    content: (
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Weather Data
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Created a weather data source to provide up-to-date aviation weather
          information in Australia for the{" "}
          <a
            target="_blank"
            href="https://vatsim.net"
            rel="noopener noreferrer"
            className="text-sky-700 hover:text-sky-600">
            VATSIM Network.
          </a>
        </p>
        <TechnologyList technologies={technologies.wxData} />
        <ViewProjectButton href="https://wx.vatpac.org/" />
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        {/* Pilot Assist API */}
        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Pilot Assist API
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Built and Maintained Pilot Assist API, a service that provides
          weather, notams and aeronautical data for virtual pilots within
          Australia.
        </p>
        <TechnologyList technologies={technologies.pilotAssistAPI} />
        <ViewProjectButton href="https://api.chrisgardiner.org" />

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/img/projects/pilot-assist-api-1.png"
            alt="startup template"
            width={800}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/img/projects/pilot-assist-api-2.png"
            alt="startup template"
            width={800}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        {/* VATPAC Core */}
        <h3 className="mt-12 text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          VATPAC Core
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Assisted with the development of VATPAC Core v2, a new system to
          manage Authentication, User Management and Permissions for the VATSIM
          Australia Pacific Division.
        </p>
        <TechnologyList technologies={technologies.vatpacCore} />
        <ViewProjectButton href="https://tms-server.vatpac.org/api" />

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/img/projects/vatpac-core-1.png"
            alt="startup template"
            width={800}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/img/projects/vatpac-core-2.png"
            alt="startup template"
            width={800}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        {/* VATPAC Conference Landing Page */}
        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          VATPAC Conference Landing Page
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Created a new site for VATSIM Australia Pacific as a landing page for
          their conference.
        </p>
        <TechnologyList technologies={technologies.vatpacConference} />
        <ViewProjectButton href="https://conference.vatpac.org" />
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/img/projects/vatpac-conference-1.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/img/projects/vatpac-conference-2.png"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        {/* Portfolio */}
        <h3 className="mt-12 text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Portfolio Website
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Designed this site using Next.js, Tailwind CSS and TypeScript.
        </p>
        <TechnologyList technologies={technologies.portfolio} />
        <ViewProjectButton
          href="/"
          GithubLink="https://github.com/chrisg06/porfolio-website"
        />
      </div>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="min-h-screen mt-20">
      <HeroTitle title="Projects" />
      <Timeline data={data} />
      <div className="py-16">
        <p className="text-center text-lg md:text-2xl">
          Want to see more? Check out my GitHub.
        </p>
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="flex items-center rounded-lg bg-white px-3 py-1.5 mb-8 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <span className="mr-2">
              <FaGithub size={22} />
            </span>
            <a
              target="_blank"
              href="https://github.com/chrisg06"
              rel="noopener noreferrer">
              chrisg06
            </a>
          </button>
        </div>
      </div>
      <div className="py-16">
        <ScrollToSection id="contact" alwaysBounce={false} />
      </div>
    </section>
  );
}
