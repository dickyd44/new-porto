import { useState, useEffect } from "react";

export const texts = ["Front-End Developer", "Full-Stack Developer"];

export function useHomeStore() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);
  const [hoverIndexDicky, setIsHoveredDicky] = useState<number | null>(null);
  const [hoverIndexDarmawan, setIsHoveredDarmawan] = useState<number | null>(
    null
  );

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeOutDuration = isReversing ? 70 : 100;

    const letterTimeOut = setTimeout(() => {
      if (!isReversing) {
        if (currentLetterIndex < currentText.length) {
          setCurrentLetterIndex((prevIndex) => prevIndex + 1);
        } else {
          setTimeout(() => {
            setIsReversing(true);
          }, 1500);
        }
      } else {
        if (currentLetterIndex > 0) {
          setCurrentLetterIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsReversing(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, timeOutDuration);

    return () => clearTimeout(letterTimeOut);
  }, [currentLetterIndex, currentTextIndex, isReversing]);

  return {
    currentTextIndex,
    currentLetterIndex,
    isReversing,
    texts,
    setIsHoveredDicky,
    hoverIndexDicky,
    hoverIndexDarmawan,
    setIsHoveredDarmawan,
  };
}
