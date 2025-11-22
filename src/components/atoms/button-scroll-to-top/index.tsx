import { ChevronTopIcon } from "@/src/assets/icon/icon-main";
import React from "react";

interface ButtonScrollToTopProps {
  isVisible: boolean;
  scrollToTop: () => void;
}

export function ButtonScrollToTop({
  isVisible,
  scrollToTop,
}: ButtonScrollToTopProps) {
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 p-2.5 bg-galaxy text-white rounded-full shadow-lg hover:bg-galaxy_core transition duration-300 z-9999"
        >
          <ChevronTopIcon />
        </button>
      )}
    </>
  );
}
