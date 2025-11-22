import { useEffect, useRef, useState } from "react";

export function useProgressBar(percentage: number) {
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Memicu ketika 50% elemen terlihat
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = percentage;
    if (start === end) return;

    const incrementTime = Math.abs(Math.floor(1000 / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [percentage, inView]);

  return {
    inView,
    ref,
    percentage,
    count,
  };
}
