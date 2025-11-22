import { useEffect, useState, useRef } from "react";

export function useScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef<HTMLDivElement | null>(null);

  // Function to show/hide the button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 1200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    isVisible,
    homeRef,
    scrollToTop,
  };
}
