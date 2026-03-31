"use client";

import { useEffect } from "react";

/**
 * Headless client component — renders nothing.
 * Attaches an IntersectionObserver to all `.r` elements,
 * toggling `.v` for the scroll-reveal animation.
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".r");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target as HTMLElement;
            const siblings = [...(el.parentElement?.children ?? [])].filter(
              (c) => c.classList.contains("r")
            );
            el.style.transitionDelay = `${siblings.indexOf(el) * 80}ms`;
            el.classList.add("v");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
