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
    <div className="flex justify-center my-4">
      <button
        onClick={() => scrollToSection(id)}
        className="w-16 h-16 hover:animate-bounce max-sm:hidden">
        <IoIosArrowDown className={classList} />
      </button>
    </div>
  );
}
