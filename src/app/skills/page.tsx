import HeroTitle from "@/components/heroTitle";
import { FaReact, FaNodeJs, FaDocker, FaJava } from "react-icons/fa";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFastapi,
  SiDjango,
  SiExpress,
  SiNestjs,
  SiRedis,
} from "react-icons/si";

const backend = [
  { name: "Python", icon: SiPython, color: "text-[#366F9F]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#007ACC]" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#699E5B]" },
  { name: "FastAPI", icon: SiFastapi, color: "text-[#009385]" },
  { name: "Django", icon: SiDjango, color: "text-[#092E20]" },
  { name: "Express", icon: SiExpress, color: "text-gray-900" },
  { name: "NestJs", icon: SiNestjs, color: "text-[#E11E4D]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Redis", icon: SiRedis, color: "text-[#DC382C]" },
];

export default function SkillsPage() {
  return (
    <section id="skills" className="min-h-screen  py-12 bg-gray-50">
      <HeroTitle title="Skills" />
      <div className="container mx-auto px-6 mt-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {backend.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <tech.icon className={`${tech.color} text-4xl mb-4`} />
              <h3 className="text-xl font-semibold text-gray-700">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}