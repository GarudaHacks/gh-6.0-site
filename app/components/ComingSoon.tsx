"use client";

import React, { useEffect, useState } from "react";

function ComingSoon() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const words = React.useMemo(
    () => ["Hai!", "Bonjour!", "Nǐn hǎo!", "Konnichiwa!", "Guten Tag!"],
    []
  );
  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const currentWord = words[wordIndex];

    if (isTyping) {
      if (displayText.length < currentWord.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, LETTER_TYPE_DELAY);
      } else {
        typingTimeout = setTimeout(() => setIsTyping(false), WORD_STAY_DELAY);
      }
    } else {
      if (displayText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, LETTER_TYPE_DELAY);
      } else {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isTyping, wordIndex, words]);

  return (
    <div className="flex text-white">
      <h1 className="text-4xl font-bold relative font-[family-name:var(--font-montserrat)]">
        {displayText}
        <span className="ml-1 animate-blink">|</span>
      </h1>
    </div>
  );
}

export default ComingSoon;
