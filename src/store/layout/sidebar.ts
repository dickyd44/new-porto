import React, { useEffect, useState } from "react";

export function useSidebarStore() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const updatedLink = `#${entry.target.id}`;
            setActiveLink(updatedLink);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.3 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return { activeLink, React };
}
