"use client";

import * as React from "react";

type TypewriterProps = {
  words: string[];
  className?: string;

  // typing behaviour (tweak if you want)
  typingSpeedMs?: number; // per character
  deletingSpeedMs?: number; // per character
  pauseMs?: number; // pause when a word finishes
  startDelayMs?: number; // initial delay before starting
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
};

export default function Typewriter({
  words,
  className,
  typingSpeedMs = 70,
  deletingSpeedMs = 45,
  pauseMs = 1100,
  startDelayMs = 200,
  loop = true,
  showCursor = true,
  cursorChar = "|",
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    if (!words?.length) return;

    const currentWord = words[wordIndex % words.length];

    // done typing → pause → start deleting
    if (!isDeleting && text === currentWord) {
      const t = window.setTimeout(() => setIsDeleting(true), pauseMs);
      return () => window.clearTimeout(t);
    }

    // done deleting → next word
    if (isDeleting && text === "") {
      const next = wordIndex + 1;

      if (!loop && next >= words.length) return;

      setIsDeleting(false);
      setWordIndex(next);
      const t = window.setTimeout(() => {}, 0);
      return () => window.clearTimeout(t);
    }

    const nextText = isDeleting
      ? currentWord.slice(0, text.length - 1)
      : currentWord.slice(0, text.length + 1);

    const delay =
      text === "" && !isDeleting
        ? startDelayMs
        : isDeleting
        ? deletingSpeedMs
        : typingSpeedMs;

    const timer = window.setTimeout(() => {
      setText(nextText);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    words,
    wordIndex,
    text,
    isDeleting,
    typingSpeedMs,
    deletingSpeedMs,
    pauseMs,
    startDelayMs,
    loop,
  ]);

  return (
    <span className={className}>
      {text}
      {showCursor && <span className="animate-pulse">{cursorChar}</span>}
    </span>
  );
}
