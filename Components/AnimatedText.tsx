import React, { useState, useEffect } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return; // تحقق من وجود النص

    let timeoutId: NodeJS.Timeout;
    const animateText = (index: number) => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        timeoutId = setTimeout(() => animateText(index + 1), 100);
      }
    };

    animateText(0);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <h1 className={className}>
      {displayedText}
      {displayedText.length < text.length && <span className="cursor">|</span>}
    </h1>
  );
};

export default AnimatedText;
