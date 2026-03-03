"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════
   Mendli Health — Single-page site
   ═══════════════════════════════════════════════════════════════ */

const MAILTO =
  "mailto:jenna@mendlihealth.com?subject=New%20Appointment&body=Hi%20Jenna%2C%0A%0AI%E2%80%99d%20love%20to%20book%20an%20appointment%20with%20you.%20Looking%20forward%20to%20getting%20started%20on%20my%20health%20journey.%0A%0AThank%20you!";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
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

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const togRef = useRef<HTMLButtonElement>(null);
  const mmRef = useRef<HTMLDivElement>(null);

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

  /* Nav scroll effect */
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          navRef.current?.classList.toggle("s", window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Mobile menu toggle */
  const toggleMenu = useCallback(() => {
    togRef.current?.classList.toggle("open");
    mmRef.current?.classList.toggle("open");
    document.body.style.overflow = mmRef.current?.classList.contains("open") ? "hidden" : "";
  }, []);

  const closeMenu = useCallback(() => {
    togRef.current?.classList.remove("open");
    mmRef.current?.classList.remove("open");
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      {/* ═══ NAV ═══ */}
      <nav className="nav" ref={navRef}>
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          Mendli Health
        </a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About</a></li>
          <li><a href="#what" onClick={(e) => { e.preventDefault(); scrollTo("what"); }}>Services</a></li>
          <li><a href="#approach" onClick={(e) => { e.preventDefault(); scrollTo("approach"); }}>Approach</a></li>
          <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollTo("pricing"); }}>Pricing</a></li>
          <li><a href={MAILTO} className="nav-cta">Book Now</a></li>
        </ul>
        <button className="n-tog" ref={togRef} aria-label="Menu" onClick={toggleMenu}>
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="mm" ref={mmRef}>
        <a href="#about" onClick={(e) => { e.preventDefault(); closeMenu(); scrollTo("about"); }}>About</a>
        <a href="#what" onClick={(e) => { e.preventDefault(); closeMenu(); scrollTo("what"); }}>Services</a>
        <a href="#approach" onClick={(e) => { e.preventDefault(); closeMenu(); scrollTo("approach"); }}>Approach</a>
        <a href="#pricing" onClick={(e) => { e.preventDefault(); closeMenu(); scrollTo("pricing"); }}>Pricing</a>
        <a href={MAILTO} onClick={() => closeMenu()}>Book Now</a>
      </div>

      {/* ═══ HERO — Centered typographic ═══ */}
      <section className="hero">
        {/* Grain texture overlay */}
        <div className="hero-grain" />

        {/* Radial light behind text */}
        <div className="hero-light" />

        {/* Topographic contour field */}
        <svg className="hero-topo" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Layer 1 — deepest/lowest contours */}
          <g className="topo-layer topo-1" stroke="var(--deep)" strokeWidth="0.8" opacity="0.25">
            <path d="M-40 820 Q200 780 400 790 Q600 800 800 760 Q1000 720 1200 750 Q1350 770 1450 740" />
            <path d="M-40 760 Q180 710 380 730 Q580 750 780 700 Q980 660 1180 690 Q1340 710 1450 680" />
            <path d="M-40 700 Q160 640 360 670 Q560 700 760 640 Q960 590 1160 630 Q1330 650 1450 620" />
          </g>

          {/* Layer 2 — mid contours */}
          <g className="topo-layer topo-2" stroke="var(--grn)" strokeWidth="0.6" opacity="0.12">
            <path d="M-40 640 Q140 570 340 610 Q540 650 740 580 Q940 520 1140 570 Q1320 600 1450 560" />
            <path d="M-40 580 Q120 500 320 550 Q520 600 720 520 Q920 450 1120 510 Q1310 540 1450 500" />
            <path d="M-40 520 Q100 440 300 490 Q500 540 700 460 Q900 390 1100 450 Q1300 480 1450 440" />
          </g>

          {/* Layer 3 — elevation contours */}
          <g className="topo-layer topo-3" stroke="var(--grn)" strokeWidth="0.5" opacity="0.08">
            <path d="M-40 460 Q80 380 280 430 Q480 480 680 400 Q880 330 1080 390 Q1280 420 1450 380" />
            <path d="M-40 400 Q60 320 260 370 Q460 420 660 340 Q860 270 1060 330 Q1260 360 1450 320" />
            <path d="M-40 340 Q80 270 280 310 Q480 350 660 290 Q840 230 1040 280 Q1240 310 1450 270" />
          </g>

          {/* Layer 4 — peak elevation, tightest contours (center focal) */}
          <g className="topo-layer topo-4" stroke="var(--terra)" strokeWidth="0.4" opacity="0.06">
            <path d="M300 300 Q450 250 600 280 Q750 310 900 260 Q1050 220 1100 250" />
            <path d="M350 270 Q480 230 620 255 Q760 280 880 240 Q1000 210 1060 230" />
            <path d="M420 250 Q520 220 640 240 Q740 260 840 230 Q940 210 1000 220" />
          </g>

          {/* Spot elevation markers */}
          <g opacity="0.15">
            <circle cx="700" cy="245" r="2" fill="var(--grn)" />
            <line x1="700" y1="240" x2="700" y2="250" stroke="var(--grn)" strokeWidth="0.5" />
            <line x1="695" y1="245" x2="705" y2="245" stroke="var(--grn)" strokeWidth="0.5" />

            <circle cx="380" cy="290" r="1.5" fill="var(--terra)" />
            <line x1="380" y1="286" x2="380" y2="294" stroke="var(--terra)" strokeWidth="0.4" />
            <line x1="376" y1="290" x2="384" y2="290" stroke="var(--terra)" strokeWidth="0.4" />

            <circle cx="1050" cy="225" r="1.5" fill="var(--grn)" />
          </g>

          {/* Upper atmosphere contours (very faint) */}
          <g className="topo-layer topo-5" stroke="var(--deep)" strokeWidth="0.3" opacity="0.1">
            <path d="M-40 180 Q200 120 400 160 Q600 200 800 140 Q1000 90 1200 130 Q1350 160 1450 120" />
            <path d="M-40 120 Q200 70 400 100 Q600 130 800 80 Q1000 40 1200 70 Q1350 90 1450 60" />
            <path d="M-40 60 Q200 30 400 50 Q600 70 800 35 Q1000 10 1200 30 Q1350 45 1450 20" />
          </g>
        </svg>

        {/* Content */}
        <div className="hero-center">
          <div className="hero-eyebrow">
            <span className="lbl-d" />
            Functional Health · Virtual · Nationwide
          </div>
          <h1>
            Your body has<br />been talking.<br /><em>Let&apos;s listen.</em>
          </h1>
          <p className="hero-p">
            Functional health care for people who are tired of being told everything looks
            &ldquo;normal&rdquo; — with the labs, the time, and the attention to finally find real answers.
          </p>
          <div className="hero-actions">
            <a href={MAILTO} className="btn btn-g">
              Schedule Your First Visit
              <ArrowRight />
            </a>
            <a href="#about" className="btn btn-o" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>
              Learn More
            </a>
          </div>
        </div>

        {/* Bottom fade line */}
        <div className="hero-fade" />
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="sec about" id="about">
        <div className="wrap">
          <div className="about-g">
            <div className="about-text r">
              <div className="lbl"><span className="lbl-d" /> About Jenna</div>
              <h2 className="about-name">Jenna Toupin, FNP</h2>
              <div className="about-title">Board-Certified Family Nurse Practitioner · Functional Health</div>
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
            </div>
            <div className="about-vis r">
              <div className="about-img">
                <Image
                  src="/jenna-toupin.jpg"
                  alt="Jenna Toupin, FNP"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(min-width: 1024px) 400px, 280px"
                />
              </div>
              <div className="about-acc" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="sec what" id="what">
        <div className="wrap">
          <div className="what-head r">
            <div className="lbl"><span className="lbl-d" /> Services</div>
            <h2 className="h2">
              Everything you need,<br /><em>one practitioner</em>
            </h2>
            <p className="sp">
              No referral loops. No fragmented care. I handle the full picture — from ordering labs
              to building your protocol.
            </p>
          </div>
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
      <section className="sec appr" id="approach">
        <div className="wrap">
          <div className="appr-head r">
            <div className="lbl"><span className="lbl-d" /> Approach</div>
            <h2 className="h2">
              Medicine that asks <em>why</em> —<br />not just what.
            </h2>
            <p className="sp">
              Functional health traces symptoms to their roots — examining your biology, environment,
              and history as one connected system.
            </p>
          </div>
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
          <div className="price-head r">
            <div className="lbl"><span className="lbl-d" /> Investment</div>
            <h2 className="h2">Simple, transparent <em>pricing</em></h2>
            <p className="sp">
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

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="testi">
        <div className="testi-in r">
          <div className="testi-stars">
            <Star /><Star /><Star /><Star /><Star />
          </div>
          <blockquote className="testi-q">
            &ldquo;For three years, every doctor told me my labs were fine. In our first session,
            Jenna asked questions no one had ever thought to ask. Three months later — real answers,
            and my energy back.&rdquo;
          </blockquote>
          <div className="testi-who">
            <strong>Sarah M.</strong> · Client since 2023
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="sec how" id="how">
        <div className="wrap">
          <div className="how-head r">
            <div className="lbl"><span className="lbl-d" /> Process</div>
            <h2 className="h2">How it <em>works</em></h2>
          </div>
          <div className="how-steps">
            <div className="how-step r">
              <div className="how-num">01</div>
              <h3>Book Your Visit</h3>
              <p>Schedule your 90-minute initial assessment. You&apos;ll receive intake forms and a health timeline questionnaire before we meet.</p>
            </div>
            <div className="how-step r">
              <div className="how-num">02</div>
              <h3>Deep Assessment</h3>
              <p>We meet virtually for a thorough review of your history, symptoms, and goals — then I order the right functional labs.</p>
            </div>
            <div className="how-step r">
              <div className="how-num">03</div>
              <h3>Your Roadmap + Ongoing Care</h3>
              <p>Lab results become a personalized plan: nutrition, supplements, lifestyle changes, and regular follow-ups to track and adjust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta" id="book">
        <div className="cta-shape" />
        <div className="cta-in r">
          <div className="lbl" style={{ justifyContent: "center" }}>
            <span className="lbl-d" /> Start Here
          </div>
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
      <footer>
        <div className="ft">
          <div className="ft-m">Mendli Health</div>
          <ul className="ft-l">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About</a></li>
            <li><a href="#what" onClick={(e) => { e.preventDefault(); scrollTo("what"); }}>Services</a></li>
            <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollTo("pricing"); }}>Pricing</a></li>
            <li><a href={MAILTO}>Book</a></li>
          </ul>
          <div className="ft-c">&copy; 2026 Mendli Health · Jenna Toupin, FNP</div>
        </div>
      </footer>
    </>
  );
}
