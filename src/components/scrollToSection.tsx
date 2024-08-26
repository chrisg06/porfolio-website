"use client";

import { IoIosArrowDown } from "react-icons/io";

interface ScrollToSectionProps {
  id: string;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ScrollToSection({ id }: ScrollToSectionProps) {
  return (
    <button
      onClick={() => scrollToSection(id)}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
    >
      <IoIosArrowDown className="w-16 h-16 animate-bounce" />
    </button>
  );
}
