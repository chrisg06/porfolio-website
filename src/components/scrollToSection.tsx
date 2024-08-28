"use client";

import { IoIosArrowDown } from "react-icons/io";

interface ScrollToSectionProps {
  id: string;
  alwaysBounce?: boolean;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ScrollToSection({
  id,
  alwaysBounce = true,
}: ScrollToSectionProps) {
  var classList: string;

  if (!alwaysBounce) {
    classList = "w-16 h-16 hover:animate-bounce";
  } else {
    classList = "w-16 h-16 animate-bounce";
  }
  return (
    <div className="relative">
      <button
        onClick={() => scrollToSection(id)}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 max-sm:hidden ">
        <IoIosArrowDown className={classList} />
      </button>
    </div>
  );
}
