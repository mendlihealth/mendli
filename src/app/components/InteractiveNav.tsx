"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MAILTO } from "../constants";

const SECTIONS = ["about", "what", "pricing", "faq"] as const;

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function InteractiveNav() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const lastY = useRef(0);

  /* Nav scroll effect + scroll-spy for active section */
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          navRef.current?.classList.toggle("s", y > 40);

          // Hide on scroll-down, show on scroll-up (mobile only)
          const isMobile = window.innerWidth < 768;
          if (isMobile && navRef.current) {
            if (y > lastY.current && y > 100) {
              navRef.current.classList.add("nav-hidden");
            } else {
              navRef.current.classList.remove("nav-hidden");
            }
          } else {
            navRef.current?.classList.remove("nav-hidden");
          }
          lastY.current = y;

          // Scroll-spy: find which section is most visible
          const ALL_IDS = ["about", "what", "pricing", "reviews", "how", "faq"];
          const NAV_MAP: Record<string, string> = {
            about: "about", what: "what", pricing: "pricing",
            reviews: "pricing", how: "faq", faq: "faq",
          };
          let current: string | null = null;
          for (const id of ALL_IDS) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 200) current = NAV_MAP[id] ?? id;
            }
          }

          // If near bottom of page, force last nav section active
          const atBottom = (window.innerHeight + y) >= (document.documentElement.scrollHeight - 100);
          if (atBottom) current = "faq";

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Dark-zone detection — swap nav colors when over dark sections */
  useEffect(() => {
    const darkEls = document.querySelectorAll('[data-header-theme="dark"]');
    if (darkEls.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const anyDark = entries.some((e) => e.isIntersecting);
        navRef.current?.classList.toggle("dark-zone", anyDark);
      },
      { rootMargin: "0px 0px -92% 0px", threshold: 0 }
    );
    darkEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav" ref={navRef} aria-label="Main Navigation">
      <div className="nav-inner">
        <a
          href="#"
          className="nav-logo"
          aria-label="Mendli Health Homepage"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src="/mendli-logo-t.png"
            alt="Mendli Health Logo"
            title="Mendli Health"
            width={120}
            height={36}
            priority
            style={{ objectFit: "contain" }}
          />
        </a>
        <ul className="nav-capsule">
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              title="Learn about Jenna Toupin, FNP"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#what"
              className={activeSection === "what" ? "active" : ""}
              title="View our Functional Medicine Services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("what");
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className={activeSection === "pricing" ? "active" : ""}
              title="Consultation and Membership Pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("pricing");
              }}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className={activeSection === "faq" ? "active" : ""}
              title="Frequently Asked Questions"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("faq");
              }}
            >
              FAQ
            </a>
          </li>
        </ul>
        <div className="nav-right">
          <a
            href={MAILTO}
            className="nav-cta"
            title="Book a Functional Medicine Consultation"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
