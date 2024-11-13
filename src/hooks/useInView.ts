import { useEffect, useRef, useState } from "react";

export const useInView = (options?: IntersectionObserverInit) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);
    return () => {
      if (!ref.current) return;
      observer.unobserve(ref.current);
    };
  }, []);

  return [ref, inView] as const;
};
