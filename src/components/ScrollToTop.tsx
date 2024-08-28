"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        history.replaceState(null, "", window.location.pathname);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className="fixed bottom-4 right-4 p-4 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-400"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", window.location.pathname);
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      <a href="#" className="sr-only"></a>
    </button>
  );
}
