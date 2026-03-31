"use client";

import { useEffect, useRef, useState } from "react";

const TYPEWRITER_WORDS = [
  "listened to.",
  "understood.",
  "investigated.",
  "answered.",
];
const TYPE_MS = 80;
const DELETE_MS = 50;
const HOLD_MS = 2200;
const PAUSE_MS = 400;

export function TypewriterText() {
  const [display, setDisplay] = useState("");
  const phase = useRef<"typing" | "holding" | "deleting" | "pausing">("typing");
  const wordIdx = useRef(0);
  const charIdx = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function step() {
      const word = TYPEWRITER_WORDS[wordIdx.current];
      switch (phase.current) {
        case "typing": {
          charIdx.current++;
          setDisplay(word.slice(0, charIdx.current));
          if (charIdx.current >= word.length) {
            phase.current = "holding";
            timer.current = setTimeout(step, HOLD_MS);
          } else {
            timer.current = setTimeout(step, TYPE_MS);
          }
          break;
        }
        case "holding": {
          phase.current = "deleting";
          timer.current = setTimeout(step, DELETE_MS);
          break;
        }
        case "deleting": {
          charIdx.current--;
          setDisplay(word.slice(0, charIdx.current));
          if (charIdx.current <= 0) {
            phase.current = "pausing";
            timer.current = setTimeout(step, PAUSE_MS);
          } else {
            timer.current = setTimeout(step, DELETE_MS);
          }
          break;
        }
        case "pausing": {
          wordIdx.current =
            (wordIdx.current + 1) % TYPEWRITER_WORDS.length;
          charIdx.current = 0;
          phase.current = "typing";
          timer.current = setTimeout(step, TYPE_MS);
          break;
        }
      }
    }
    timer.current = setTimeout(step, TYPE_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <span style={{ fontStyle: "italic", color: "var(--taupe)" }}>
      {display}
      <span
        className="typewriter-cursor"
        style={{
          display: "inline-block",
          width: 3,
          height: "0.8em",
          background: "var(--taupe)",
          marginLeft: 2,
          verticalAlign: "baseline",
          borderRadius: 2,
          position: "relative",
          top: "0.05em",
        }}
      />
    </span>
  );
}
