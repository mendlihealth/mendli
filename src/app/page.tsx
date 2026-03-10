"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   Mendli Health — Single-page site
   ═══════════════════════════════════════════════════════════════ */

const MAILTO =
  "mailto:jenna@mendlihealth.com?subject=New%20Appointment&body=Hi%20Jenna%2C%0A%0AI%E2%80%99d%20love%20to%20book%20an%20appointment%20with%20you.%20Looking%20forward%20to%20getting%20started%20on%20my%20health%20journey.%0A%0AThank%20you!";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ─── Typewriter — cycling accent word ─── */
const TYPEWRITER_WORDS = ['listened to.', 'understood.', 'investigated.', 'answered.'];
const TYPE_MS = 80;
const DELETE_MS = 50;
const HOLD_MS = 2200;
const PAUSE_MS = 400;

function TypewriterText() {
  const [display, setDisplay] = useState('');
  const phase = useRef<'typing' | 'holding' | 'deleting' | 'pausing'>('typing');
  const wordIdx = useRef(0);
  const charIdx = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function step() {
      const word = TYPEWRITER_WORDS[wordIdx.current];
      switch (phase.current) {
        case 'typing': {
          charIdx.current++;
          setDisplay(word.slice(0, charIdx.current));
          if (charIdx.current >= word.length) {
            phase.current = 'holding';
            timer.current = setTimeout(step, HOLD_MS);
          } else {
            timer.current = setTimeout(step, TYPE_MS);
          }
          break;
        }
        case 'holding': {
          phase.current = 'deleting';
          timer.current = setTimeout(step, DELETE_MS);
          break;
        }
        case 'deleting': {
          charIdx.current--;
          setDisplay(word.slice(0, charIdx.current));
          if (charIdx.current <= 0) {
            phase.current = 'pausing';
            timer.current = setTimeout(step, PAUSE_MS);
          } else {
            timer.current = setTimeout(step, DELETE_MS);
          }
          break;
        }
        case 'pausing': {
          wordIdx.current = (wordIdx.current + 1) % TYPEWRITER_WORDS.length;
          charIdx.current = 0;
          phase.current = 'typing';
          timer.current = setTimeout(step, TYPE_MS);
          break;
        }
      }
    }
    timer.current = setTimeout(step, TYPE_MS);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, []);

  return (
    <span style={{ fontStyle: 'italic', color: 'var(--taupe)' }}>
      {display}
      <span
        className="typewriter-cursor"
        style={{
          display: 'inline-block', width: 3, height: '0.8em',
          background: 'var(--taupe)', marginLeft: 2,
          verticalAlign: 'baseline', borderRadius: 2,
          position: 'relative', top: '0.05em',
        }}
      />
    </span>
  );
}

/* ─── Stars SVG (for testimonial) ─── */
function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* ─── Arrow icon ─── */
function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/* ─── FAQ data ─── */
const FAQS = [
  {
    q: "Do you have a physical location?",
    a: "All Mendli visits are currently virtual — available to patients nationwide. That said, a physical location in Indianapolis is in development for patients who prefer in-person care. If you'd like to be notified when the office opens, just let me know when you book.",
  },
  {
    q: "Do you offer primary care?",
    a: "Yes — I'm a Board-Certified Family Nurse Practitioner, and primary care is what I trained in. I grew up around it, too; my dad was a Family Physician. Once the Indianapolis office is established, I plan to offer a dedicated primary care package alongside functional health services.",
  },
  {
    q: "Do you take insurance?",
    a: "Mendli is currently out-of-network with all insurance plans. This model allows me to spend 60–90 minutes with you instead of 12 — without the limitations insurance-based practices face. I provide superbills after each visit that you can submit to your insurer for potential reimbursement, and I accept HSA and FSA cards.",
  },
  {
    q: "What's included with the Concierge Membership?",
    a: "Your membership ($50/month) includes secure messaging between visits, priority scheduling, and direct access to Jenna. Think of it as always having someone who truly knows your full health picture just a message away. It's required because continuity is how functional health actually works — your care doesn't stop between appointments.",
  },
];

/* ─── Provider Card — Production-ready, large format ─── */
function ProviderCard() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Ambient glow behind card */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '120%', height: '120%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(58,43,32,.1) 0%, rgba(58,43,32,.03) 40%, transparent 70%)',
        pointerEvents: 'none', filter: 'blur(50px)',
      }} />
      <div style={{
        background: 'linear-gradient(180deg, #fff 0%, #FEFCF9 100%)',
        borderRadius: 32, width: '100%', maxWidth: 420,
        boxShadow: '0 1px 3px rgba(58,43,32,.05), 0 12px 32px rgba(58,43,32,.1), 0 32px 80px rgba(58,43,32,.08)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Noise texture */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.02, zIndex: 1, pointerEvents: 'none',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '128px 128px',
        }} />
        {/* Rim light */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', borderRadius: 32,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(58,43,32,0.02)',
        }} />

        {/* Header gradient */}
        <div style={{
          height: 110,
          background: 'linear-gradient(180deg, rgba(58,43,32,0.05) 0%, transparent 100%)',
          position: 'relative', zIndex: 2,
        }} />

        {/* Avatar */}
        <div style={{ marginTop: -70, display: 'flex', justifyContent: 'center', marginBottom: 18, position: 'relative', zIndex: 3 }}>
          <div style={{ position: 'relative' }}>
            {/* Breathing glow */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 190, height: 190, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(58,43,32,0.06) 0%, transparent 70%)',
              animation: 'morph 6s ease-in-out infinite',
              pointerEvents: 'none',
            }} />
            <Image
              src="/jenna-headshot.png"
              alt="Jenna Toupin, FNP"
              width={140}
              height={140}
              style={{
                borderRadius: '50%', objectFit: 'cover',
                border: '5px solid #fff',
                boxShadow: '0 6px 24px rgba(58,43,32,0.12), 0 2px 6px rgba(58,43,32,0.06)',
              }}
            />
            {/* Verified badge */}
            <div style={{
              position: 'absolute', bottom: 8, right: 8,
              width: 28, height: 28, borderRadius: '50%',
              background: '#10B981', border: '3.5px solid #fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(16,185,129,0.35)',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '0 36px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          {/* Name */}
          <span style={{
            fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500,
            color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 4,
          }}>Jenna Toupin</span>

          {/* Subtitle */}
          <span style={{
            fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 600,
            color: 'var(--ink4)',
            letterSpacing: '0.05em', marginBottom: 20,
          }}>Family Nurse Practitioner</span>

          {/* Credentials row */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, width: '100%' }}>
            {[
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Board Certified' },
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: '8+ Years' },
            ].map((c, i) => (
              <div key={i} style={{
                flex: 1, display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 14px', borderRadius: 14,
                background: 'rgba(58,43,32,0.03)', border: '1px solid rgba(58,43,32,0.05)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon} /></svg>
                <span style={{ fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 600, color: 'var(--ink2)' }}>{c.label}</span>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, justifyContent: 'center', marginBottom: 20 }}>
            {['Functional', 'Root Cause', 'Holistic', 'Preventive'].map(t => (
              <span key={t} style={{
                fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 600,
                color: 'var(--linen)', background: 'var(--clay)',
                padding: '6px 14px', borderRadius: 20,
                letterSpacing: '0.03em',
              }}>{t}</span>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: 1, background: 'rgba(58,43,32,0.06)', marginBottom: 20 }} />

          {/* Next available */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', padding: '12px 16px', borderRadius: 16,
            background: 'rgba(58,43,32,0.03)', border: '1px solid rgba(58,43,32,0.05)',
            marginBottom: 20,
          }}>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, color: 'var(--ink5)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 3 }}>Next available</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700, color: '#10B981' }}>This Week</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--ink4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span style={{ fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 600, color: 'var(--ink3)' }}>Virtual · Nationwide</span>
            </div>
          </div>

          {/* CTA */}
          <a href={MAILTO} className="nav-cta" style={{
            width: '100%', textAlign: 'center' as const,
            fontSize: '.875rem', padding: '14px 0',
            display: 'block',
          }}>
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── FAQ Accordion — Welli-style glassmorphic ─── */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function FaqItem({ q, a, isOpen, onToggle, index }: {
  q: string; a: string; isOpen: boolean; onToggle: () => void; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: EASE }}
      style={{
        background: 'rgba(254,252,249,0.72)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        borderRadius: 22,
        border: `1px solid ${isOpen ? 'rgba(58,43,32,0.12)' : 'rgba(58,43,32,0.04)'}`,
        boxShadow: isOpen
          ? '0 12px 40px rgba(58,43,32,0.07), inset 0 1px 0 rgba(255,255,255,0.9)'
          : '0 2px 8px rgba(58,43,32,0.03), inset 0 1px 0 rgba(255,255,255,0.9)',
        marginBottom: 12, overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
      onClick={onToggle}
    >
      <div style={{
        width: '100%', padding: '24px 28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: 20, textAlign: 'left',
      }}>
        <span style={{
          fontFamily: 'var(--sans)', fontSize: 'clamp(15px, 1.6vw, 17px)',
          fontWeight: 600, color: 'var(--ink)', lineHeight: 1.45,
        }}>{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
          style={{
            width: 32, height: 32, borderRadius: 10, flexShrink: 0,
            background: isOpen ? 'var(--clay)' : 'rgba(58,43,32,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.25s',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke={isOpen ? '#fff' : 'var(--ink4)'} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 28px', marginBottom: 24 }}>
              <div style={{ height: 1, background: 'rgba(58,43,32,0.06)', marginBottom: 18 }} />
              <p style={{
                fontFamily: 'var(--sans)', fontSize: 'clamp(14px, 1.4vw, 15.5px)',
                fontWeight: 400, lineHeight: 1.8, color: 'var(--ink3)', margin: 0,
              }}>{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="sec faq" id="faq">
      <div className="wrap">
        <div className="faq-head r" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ fontSize: 'clamp(48px, 9vw, 64px)', letterSpacing: '-0.035em', lineHeight: 1.08 }}>Frequently <em>asked</em></h2>
          <p className="faq-sub" style={{ margin: '0 auto' }}>Everything you need to know before your first visit.</p>
        </div>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          {FAQS.map((f, i) => (
            <FaqItem
              key={i}
              q={f.q}
              a={f.a}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


const SECTIONS = ["about", "what", "approach", "pricing"] as const;

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll(".r");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target as HTMLElement;
            const siblings = [...(el.parentElement?.children ?? [])].filter((c) =>
              c.classList.contains("r")
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

  /* Nav scroll effect + scroll-spy for active section */
  const lastY = useRef(0);
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
          let current: string | null = null;
          for (const id of SECTIONS) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 200) current = id;
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
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
    <>
      {/* ═══ NAV — Floating Capsule ═══ */}
      <nav className="nav" ref={navRef} aria-label="Main Navigation">
        <div className="nav-inner">
          <a href="#" className="nav-logo" aria-label="Mendli Health Homepage" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <Image src="/mendli-logo-t.png" alt="Mendli Health Logo" title="Mendli Health" width={120} height={36} priority style={{ objectFit: 'contain' }} />
          </a>
          <ul className="nav-capsule">
            <li><a href="#about" className={activeSection === "about" ? "active" : ""} title="Learn about Jenna Toupin, FNP" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About</a></li>
            <li><a href="#what" className={activeSection === "what" ? "active" : ""} title="View our Functional Medicine Services" onClick={(e) => { e.preventDefault(); scrollTo("what"); }}>Services</a></li>
            <li><a href="#approach" className={activeSection === "approach" ? "active" : ""} title="Understand our Root-Cause Approach" onClick={(e) => { e.preventDefault(); scrollTo("approach"); }}>Approach</a></li>
            <li><a href="#pricing" className={activeSection === "pricing" ? "active" : ""} title="Consultation and Membership Pricing" onClick={(e) => { e.preventDefault(); scrollTo("pricing"); }}>Pricing</a></li>
          </ul>
          <div className="nav-right">
            <a href={MAILTO} className="nav-cta" title="Book a Functional Medicine Consultation">Book Now</a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO — Typewriter + Provider Card ═══ */}
      <header className="hero" aria-label="Welcome to Mendli Health">
        {/* Grain texture overlay */}
        <div className="hero-grain" aria-hidden="true" />

        {/* Morphing organic shape behind everything */}
        <div className="hero-morph" aria-hidden="true" />

        {/* Radial light behind text */}
        <div className="hero-light" aria-hidden="true" />

        {/* Content */}
        <div className="hero-center">
          <h1>
            Your health,<br /><TypewriterText />
          </h1>
          <p className="hero-p">
            Root-cause functional medicine with 60–90 minute visits, advanced diagnostics, and a provider who actually listens. Virtual. Nationwide.
          </p>
          <div className="hero-actions">
            <a href={MAILTO} className="btn btn-g" title="Schedule Your First Functional Medicine Visit">
              Schedule Now
            </a>
            <a href="#about" className="btn btn-o" title="Learn More about Mendli Health" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* ═══ ABOUT ═══ */}
      <section className="sec about" id="about" aria-label="About Jenna Toupin" data-header-theme="dark">
        <div className="wrap">
          <div className="about-g">
            <article className="about-text r">
              <h2 className="about-name" style={{ fontSize: 'clamp(36px, 7vw, 56px)', letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: 24 }}>Jenna Toupin, <em style={{ fontStyle: 'italic', fontWeight: 300 }}>FNP</em></h2>
              <div className="about-story">
                <p>
                  I didn&apos;t come to functional medicine through a textbook — I came to it through my own
                  body. After years of fatigue, brain fog, and being told my labs were &ldquo;normal,&rdquo; I
                  was finally diagnosed with Hashimoto&apos;s thyroiditis. What struck me wasn&apos;t the
                  diagnosis — it was how long it took to get there.
                </p>
                <p>
                  As a Nurse Practitioner, I&apos;d spent years in clinical practice. I knew how to read labs,
                  manage medications, and follow protocols. But my own experience revealed the gap:
                  conventional medicine often treats numbers on a page, not the person sitting in front of you.
                </p>
                <p>
                  That gap became my mission. I started Mendli to give patients the care I wished I&apos;d had
                  — where your provider actually listens, runs the right tests, takes the time, and builds a
                  plan that&apos;s <em>truly yours</em>.
                </p>
              </div>
            </article>
            <aside className="about-vis r" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ProviderCard />
            </aside>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="sec what" id="what" aria-label="Functional Medicine Services">
        <div className="wrap">
          <header className="what-head r" style={{ textAlign: 'center' }}>
            <h2 className="h2" style={{ fontSize: 'clamp(48px, 9vw, 64px)', letterSpacing: '-0.035em', lineHeight: 1.08 }}>
              Everything you need,<br /><em>one practitioner</em>
            </h2>
            <p className="sp" style={{ margin: '0 auto' }}>
              No referral loops. No fragmented care. I handle the full picture — from ordering labs
              to building your protocol.
            </p>
          </header>
          <div className="what-grid">
            <div className="what-card r">
              <div className="what-ic ic-g">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>Advanced Lab Orders</h3>
              <p>Functional panels that go far beyond standard bloodwork — thyroid, hormones, gut markers, metabolic health, inflammatory markers, and more.</p>
            </div>
            <div className="what-card r">
              <div className="what-ic ic-t">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Supplement Protocols</h3>
              <p>Evidence-based supplement recommendations tailored to your labs and symptoms — not guesswork. Only what your body actually needs.</p>
            </div>
            <div className="what-card r">
              <div className="what-ic ic-g">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
              </div>
              <h3>Personalized Care Plans</h3>
              <p>Nutrition, lifestyle, supplementation, and follow-up — woven into one cohesive roadmap grounded in your data and built around your actual life.</p>
            </div>
            <div className="what-card r">
              <div className="what-ic ic-t">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <h3>Concierge Access</h3>
              <p>Secure messaging between visits so you&apos;re never left guessing. Questions about supplements, labs, or how you&apos;re feeling — I&apos;m a message away.</p>
            </div>
            <div className="what-card r">
              <div className="what-ic ic-g">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              </div>
              <h3>Root-Cause Investigation</h3>
              <p>Gut health, hormones, thyroid, adrenals, autoimmunity, chronic fatigue — I don&apos;t stop at the surface. We trace symptoms back to their origin.</p>
            </div>
            <div className="what-card r">
              <div className="what-ic ic-t">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3>Collaborative Care</h3>
              <p>I work alongside your existing providers when needed — coordinating, not competing. Your health team should feel like a team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ APPROACH ═══ */}
      <section className="sec appr" id="approach" aria-label="Our Functional Health Approach">
        <div className="wrap">
          <header className="appr-head r" style={{ textAlign: 'center' }}>
            <h2 className="h2" style={{ fontSize: 'clamp(48px, 9vw, 64px)', letterSpacing: '-0.035em', lineHeight: 1.08 }}>
              Medicine that asks <em>why</em> —<br />not just what.
            </h2>
            <p className="sp" style={{ margin: '0 auto' }}>
              Functional health traces symptoms to their roots — examining your biology, environment,
              and history as one connected system.
            </p>
          </header>
          <div className="appr-row">
            <div className="appr-card r">
              <h3>Unhurried Sessions</h3>
              <p>Your initial appointment is 90 minutes. Follow-ups are 45. Your story can&apos;t be told in a 12-minute visit — so I don&apos;t pretend it can.</p>
            </div>
            <div className="appr-card r">
              <h3>Systems Thinking</h3>
              <p>Gut, hormones, immune function, nervous system — deeply interconnected. I look at the full web, not a single strand.</p>
            </div>
            <div className="appr-card r">
              <h3>Evidence-Led</h3>
              <p>Advanced lab panels and peer-reviewed research, translated into plain language and concrete steps you can actually follow.</p>
            </div>
            <div className="appr-card r">
              <h3>True Partnership</h3>
              <p>You know your body best. I bring the clinical lens. Together — not top-down — we figure it out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="sec price" id="pricing">
        <div className="wrap">
          <div className="price-head r" style={{ textAlign: 'center' }}>
            <h2 className="h2" style={{ fontSize: 'clamp(48px, 9vw, 64px)', letterSpacing: '-0.035em', lineHeight: 1.08 }}>Simple, transparent <em>pricing</em></h2>
            <p className="sp" style={{ margin: '0 auto' }}>
              All programs include concierge membership — because care shouldn&apos;t stop when the session ends.
            </p>
          </div>
          <div className="price-cards">
            <div className="price-card r">
              <h3>Initial Assessment</h3>
              <div className="p-dur">90 minutes · Comprehensive intake + functional labs</div>
              <p>A full investigation of your health history, symptoms, lifestyle, and advanced lab work that goes far beyond standard panels.</p>
              <div className="p-amt">
                <span className="p-val">$300</span>
              </div>
            </div>
            <div className="price-card r">
              <h3>Follow-Up Sessions</h3>
              <div className="p-dur">45 minutes · Typically monthly</div>
              <p>Structured visits to review labs, track progress, adjust protocols, and go deeper. Grounded in your data.</p>
              <div className="p-amt">
                <span className="p-val">$150</span>
                <span className="p-unit">per session</span>
              </div>
            </div>
          </div>
          <div className="conc r">
            <div>
              <h3>Concierge Membership</h3>
              <p>Included with every program. Secure messaging between visits, priority scheduling, and the assurance that someone who knows your case is always a message away.</p>
            </div>
            <div className="conc-price">
              <div className="conc-val">$50</div>
              <div className="conc-u">/month</div>
              <div className="conc-req">Required for all clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section className="rev" data-header-theme="dark">
        <h2 className="rev-title r">What patients <em>say</em></h2>

        {/* Row 1 — scrolls left */}
        <div className="rev-track-wrap">
          <div className="rev-track rev-left">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="rev-track-inner" aria-hidden={dup > 0 ? true : undefined}>
                {[
                  { q: "For three years, every doctor told me my labs were fine. Jenna asked questions no one had ever thought to ask. Three months later — real answers, and my energy back.", name: "Sarah M.", ctx: "Chronic fatigue · Patient since 2023", init: "S" },
                  { q: "I'd given up on finding someone who'd actually listen. Jenna spent 90 minutes with me on the first call. Nobody does that.", name: "Rachel T.", ctx: "Hormonal imbalance · Patient since 2024", init: "R" },
                  { q: "The level of detail in the lab work alone was worth it. She found things three other doctors missed.", name: "Mark D.", ctx: "Gut health · Patient since 2023", init: "M" },
                  { q: "She doesn't just treat symptoms — she explains the why behind everything. I finally understand my own body.", name: "Danielle R.", ctx: "Autoimmune · Patient since 2024", init: "D" },
                ].map((r, i) => (
                  <div key={i} className="rev-card">
                    <div className="rev-mark">&ldquo;</div>
                    <p className="rev-q">{r.q}</p>
                    <div className="rev-footer">
                      <div className="rev-avatar">{r.init}</div>
                      <div>
                        <div className="rev-name">{r.name}</div>
                        <div className="rev-ctx">{r.ctx}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="rev-track-wrap">
          <div className="rev-track rev-right">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="rev-track-inner" aria-hidden={dup > 0 ? true : undefined}>
                {[
                  { q: "My gut issues were 'all in my head' according to my last doctor. Jenna ran the right panels and found the root cause in weeks.", name: "James W.", ctx: "Digestive issues · Patient since 2023", init: "J" },
                  { q: "The concierge model is incredible. Having direct access to your practitioner between visits changes everything about how I manage my health.", name: "Priya S.", ctx: "Preventive care · Patient since 2024", init: "P" },
                  { q: "Worth every penny. I've spent more on specialists who did less in a year than Jenna did in one visit.", name: "Chris L.", ctx: "Brain fog · Patient since 2023", init: "C" },
                  { q: "Jenna changed my relationship with my health. I went from anxious and confused to empowered and informed.", name: "Nicole B.", ctx: "Thyroid · Patient since 2024", init: "N" },
                ].map((r, i) => (
                  <div key={i} className="rev-card">
                    <div className="rev-mark">&ldquo;</div>
                    <p className="rev-q">{r.q}</p>
                    <div className="rev-footer">
                      <div className="rev-avatar">{r.init}</div>
                      <div>
                        <div className="rev-name">{r.name}</div>
                        <div className="rev-ctx">{r.ctx}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="sec how" id="how">
        <div className="wrap">
          <div className="how-head r" style={{ textAlign: 'center' }}>
            <h2 className="h2" style={{ fontSize: 'clamp(48px, 9vw, 64px)', letterSpacing: '-0.035em', lineHeight: 1.08 }}>How it <em>works</em></h2>
            <p className="sp" style={{ margin: '0 auto' }}>Three steps from confusion to clarity.</p>
          </div>
          <div className="how-steps">
            <div className="how-step r">
              <div className="how-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="how-pill">Step 1</div>
              <h3>Book Your Visit</h3>
              <p>Schedule your 90-minute initial assessment. You&apos;ll receive intake forms and a detailed health timeline questionnaire before we meet.</p>
            </div>

            <div className="how-connector" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16h16M20 11l5 5-5 5" stroke="var(--ink5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>

            <div className="how-step r">
              <div className="how-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <div className="how-pill">Step 2</div>
              <h3>Deep Assessment</h3>
              <p>We meet virtually for a thorough review of your full history, symptoms, and goals — then I order the functional labs that actually matter.</p>
            </div>

            <div className="how-connector" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16h16M20 11l5 5-5 5" stroke="var(--ink5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>

            <div className="how-step r">
              <div className="how-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="how-pill">Step 3</div>
              <h3>Your Roadmap</h3>
              <p>Lab results become a personalized protocol: nutrition, supplements, lifestyle shifts, and regular follow-ups to track real progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FaqSection />

      {/* ═══ CTA ═══ */}
      <section className="cta" id="book">
        <div className="cta-shape" />
        <div className="cta-in r">
          <h2 className="cta-h">
            Ready to find out<br />what&apos;s <em>actually going on?</em>
          </h2>
          <p className="cta-pp">
            Schedule your initial assessment with Jenna. 90 minutes of real attention, advanced labs,
            and the beginning of actual answers.
          </p>
          <a href={MAILTO} className="btn btn-g" style={{ margin: "0 auto" }}>
            Schedule Your First Visit
            <ArrowRight />
          </a>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer aria-label="Site Footer">
        <div className="ft">
          <div className="ft-m"><Image src="/mendli-logo-t.png" alt="Mendli Health Logo" width={100} height={30} style={{ objectFit: 'contain' }} /></div>
          <ul className="ft-l">
            <li><a href="#about" title="About Mendli Health" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About</a></li>
            <li><a href="#what" title="Functional Medicine Services" onClick={(e) => { e.preventDefault(); scrollTo("what"); }}>Services</a></li>
            <li><a href="#pricing" title="Pricing and Memberships" onClick={(e) => { e.preventDefault(); scrollTo("pricing"); }}>Pricing</a></li>
            <li><a href={MAILTO} title="Book a Consultation">Book</a></li>
          </ul>
          <address className="ft-c" style={{ fontStyle: "normal" }}>
            &copy; {new Date().getFullYear()} Mendli Health
          </address>
        </div>
      </footer>
    </>
  );
}
