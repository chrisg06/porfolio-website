import { useEffect, useState } from "react";

function useInView(threshold = 0.1, delay = 2000) {
  const [isInView, setIsInView] = useState<boolean>(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsInView(true);
          }, delay);
          observer.disconnect(); // Stop observing once in view
          return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.disconnect();
    };
  }, [ref, threshold, delay]);

  return [setRef, isInView] as const;
}

export default useInView;
