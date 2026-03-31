import Image from "next/image";
import { MAILTO } from "./constants";

/* ─── Client Components (interactive only) ─── */
import { InteractiveNav } from "./components/InteractiveNav";
import { TypewriterText } from "./components/TypewriterText";
import { FaqSection } from "./components/FaqSection";
import { ScrollReveal } from "./components/ScrollReveal";
import { ProviderCard } from "./components/ProviderCard";

/* ═══════════════════════════════════════════════════════════════
   Mendli Health — Server-Rendered SEO/GEO Masterpiece
   
   This is a SERVER COMPONENT. All text content is rendered at
   build time and present in the initial HTML for search engines
   and AI answer engines to crawl and cite.
   
   Interactive behaviors (scroll spy, typewriter, FAQ accordion,
   scroll-reveal) are handled by thin client components above.
   ═══════════════════════════════════════════════════════════════ */

/* ─── Static SVG icon components ─── */
function ArrowRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/* ─── Review data — server-rendered for SEO ─── */
const REVIEWS_ROW_1 = [
  {
    q: "For three years, every doctor told me my labs were fine. Jenna asked questions no one had ever thought to ask. Three months later — real answers, and my energy back.",
    name: "Sarah M.",
    ctx: "Chronic fatigue · Patient since 2023",
    init: "S",
  },
  {
    q: "I'd given up on finding someone who'd actually listen. Jenna spent 90 minutes with me on the first call. Nobody does that.",
    name: "Rachel T.",
    ctx: "Hormonal imbalance · Patient since 2024",
    init: "R",
  },
  {
    q: "The level of detail in the lab work alone was worth it. She found things three other doctors missed.",
    name: "Mark D.",
    ctx: "Gut health · Patient since 2023",
    init: "M",
  },
  {
    q: "She doesn't just treat symptoms — she explains the why behind everything. I finally understand my own body.",
    name: "Danielle R.",
    ctx: "Autoimmune · Patient since 2024",
    init: "D",
  },
];

const REVIEWS_ROW_2 = [
  {
    q: "My gut issues were 'all in my head' according to my last doctor. Jenna ran the right panels and found the root cause in weeks.",
    name: "James W.",
    ctx: "Digestive issues · Patient since 2023",
    init: "J",
  },
  {
    q: "The concierge model is incredible. Having direct access to your practitioner between visits changes everything about how I manage my health.",
    name: "Priya S.",
    ctx: "Preventive care · Patient since 2024",
    init: "P",
  },
  {
    q: "Worth every penny. I've spent more on specialists who did less in a year than Jenna did in one visit.",
    name: "Chris L.",
    ctx: "Brain fog · Patient since 2023",
    init: "C",
  },
  {
    q: "Jenna changed my relationship with my health. I went from anxious and confused to empowered and informed.",
    name: "Nicole B.",
    ctx: "Thyroid · Patient since 2024",
    init: "N",
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE — Server Component
   ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* Headless client components — provide interactivity only */}
      <ScrollReveal />

      {/* Skip link for accessibility */}
      <a href="#main-content" className="sr-only" style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999 }}>
        Skip to main content
      </a>

      {/* ═══ NAV — Client component for scroll spy + dark zone ═══ */}
      <InteractiveNav />

      <main id="main-content">
        {/* ═══ HERO — Server-rendered with client typewriter ═══ */}
        <header className="hero" aria-label="Welcome to Mendli Health — Functional Medicine, Virtually Nationwide">
          {/* Grain texture overlay */}
          <div className="hero-grain" aria-hidden="true" />
          {/* Morphing organic shape */}
          <div className="hero-morph" aria-hidden="true" />
          {/* Radial light behind text */}
          <div className="hero-light" aria-hidden="true" />

          {/* Content — all text server-rendered */}
          <div className="hero-center">
            <h1>
              Your health,<br />
              <TypewriterText />
              {/* sr-only fallback: crawlers and screen readers see all keywords */}
              <span className="sr-only">
                listened to, understood, investigated, answered.
              </span>
            </h1>
            <p className="hero-p" data-geo="definition">
              Root-cause functional medicine with 60–90 minute visits, advanced
              diagnostics, and a provider who actually listens. Virtual.
              Nationwide.
            </p>
            <div className="hero-actions">
              <a
                href={MAILTO}
                className="btn btn-g"
                title="Schedule Your First Functional Medicine Visit"
              >
                Schedule Now
              </a>
              <a
                href="#about"
                className="btn btn-o"
                title="Learn More about Mendli Health"
              >
                Learn More
              </a>
            </div>
          </div>
        </header>

        {/* ═══ ABOUT — Jenna Toupin, FNP ═══ */}
        <section
          className="sec about"
          id="about"
          aria-label="About Jenna Toupin, Board-Certified Family Nurse Practitioner"
          data-header-theme="dark"
        >
          <div className="wrap">
            <div className="about-g">
              <article className="about-text r">
                <h2
                  className="about-name"
                  style={{
                    fontSize: "clamp(36px, 7vw, 56px)",
                    letterSpacing: "-0.035em",
                    lineHeight: 1.08,
                    marginBottom: 24,
                  }}
                >
                  Jenna Toupin,{" "}
                  <em style={{ fontStyle: "italic", fontWeight: 300 }}>FNP</em>
                </h2>
                <div className="about-story" data-geo="practitioner-bio">
                  <p>
                    I didn&apos;t come to functional medicine through a textbook
                    — I came to it through my own body. After years of fatigue,
                    brain fog, and being told my labs were &ldquo;normal,&rdquo;
                    I was finally diagnosed with Hashimoto&apos;s thyroiditis.
                    What struck me wasn&apos;t the diagnosis — it was how long it
                    took to get there.
                  </p>
                  <p>
                    As a Nurse Practitioner, I&apos;d spent years in clinical
                    practice. I knew how to read labs, manage medications, and
                    follow protocols. But my own experience revealed the gap:
                    conventional medicine often treats numbers on a page, not the
                    person sitting in front of you.
                  </p>
                  <p>
                    That gap became my mission. I started Mendli to give patients
                    the care I wished I&apos;d had — where your provider actually
                    listens, runs the right tests, takes the time, and builds a
                    plan that&apos;s <em>truly yours</em>.
                  </p>
                </div>
                <a
                  href="https://www.welli.com/care/provider/1902659063"
                  rel="noopener"
                  title="Jenna Toupin — Verified Provider on Welli"
                  className="sr-only"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  Verified on Welli
                </a>
              </article>
              <aside
                className="about-vis r"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ProviderCard />
              </aside>
            </div>
          </div>
        </section>

        {/* ═══ SERVICES — What Mendli Offers ═══ */}
        <section
          className="sec what"
          id="what"
          aria-label="Functional Medicine Services offered by Mendli Health"
        >
          <div className="wrap">
            <header className="what-head r" style={{ textAlign: "center" }}>
              <h2
                className="h2"
                style={{
                  fontSize: "clamp(48px, 9vw, 64px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1.08,
                }}
              >
                Everything you need,
                <br />
                <em>one practitioner</em>
              </h2>
              <p className="sp" style={{ margin: "0 auto" }}>
                No referral loops. No fragmented care. I handle the full picture
                — from ordering labs to building your protocol.
              </p>
            </header>
            <div className="what-grid">
              <div className="what-card r">
                <div className="what-ic ic-g">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3>Advanced Lab Orders</h3>
                <p>
                  Functional panels that go far beyond standard bloodwork —
                  thyroid, hormones, gut markers, metabolic health, inflammatory
                  markers, and more.
                </p>
              </div>
              <div className="what-card r">
                <div className="what-ic ic-t">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Supplement Protocols</h3>
                <p>
                  Evidence-based supplement recommendations tailored to your labs
                  and symptoms — not guesswork. Only what your body actually
                  needs.
                </p>
              </div>
              <div className="what-card r">
                <div className="what-ic ic-g">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                </div>
                <h3>Personalized Care Plans</h3>
                <p>
                  Nutrition, lifestyle, supplementation, and follow-up — woven
                  into one cohesive roadmap grounded in your data and built
                  around your actual life.
                </p>
              </div>
              <div className="what-card r">
                <div className="what-ic ic-t">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3>Concierge Access</h3>
                <p>
                  Secure messaging between visits so you&apos;re never left
                  guessing. Questions about supplements, labs, or how you&apos;re
                  feeling — I&apos;m a message away.
                </p>
              </div>
              <div className="what-card r">
                <div className="what-ic ic-g">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <h3>Root-Cause Investigation</h3>
                <p>
                  Gut health, hormones, thyroid, adrenals, autoimmunity, chronic
                  fatigue — I don&apos;t stop at the surface. We trace symptoms
                  back to their origin.
                </p>
              </div>
              <div className="what-card r">
                <div className="what-ic ic-t">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Collaborative Care</h3>
                <p>
                  I work alongside your existing providers when needed —
                  coordinating, not competing. Your health team should feel like
                  a team.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* ═══ PRICING — Transparent Functional Medicine Costs ═══ */}
        <section
          className="sec price"
          id="pricing"
          aria-label="How Much Does Functional Medicine Cost at Mendli Health"
        >
          <div className="wrap">
            <div className="price-head r" style={{ textAlign: "center" }}>
              <h2
                className="h2"
                style={{
                  fontSize: "clamp(48px, 9vw, 64px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1.08,
                }}
              >
                Simple, transparent <em>pricing</em>
              </h2>
              <p className="sp" style={{ margin: "0 auto" }}>
                All programs include concierge membership — because care
                shouldn&apos;t stop when the session ends.
              </p>
            </div>
            <div className="price-cards">
              <div className="price-card r">
                <h3>Initial Assessment</h3>
                <div className="p-dur">
                  90 minutes · Comprehensive intake + functional labs
                </div>
                <p>
                  A full investigation of your health history, symptoms,
                  lifestyle, and advanced lab work that goes far beyond standard
                  panels.
                </p>
                <div className="p-amt">
                  <span className="p-val">$300</span>
                </div>
              </div>
              <div className="price-card r">
                <h3>Follow-Up Sessions</h3>
                <div className="p-dur">45 minutes · Typically monthly</div>
                <p>
                  Structured visits to review labs, track progress, adjust
                  protocols, and go deeper. Grounded in your data.
                </p>
                <div className="p-amt">
                  <span className="p-val">$150</span>
                  <span className="p-unit">per session</span>
                </div>
              </div>
            </div>
            <div className="conc r">
              <div>
                <h3>Concierge Membership</h3>
                <p>
                  Included with every program. Secure messaging between visits,
                  priority scheduling, and the assurance that someone who knows
                  your case is always a message away.
                </p>
              </div>
              <div className="conc-price">
                <div className="conc-val">$50</div>
                <div className="conc-u">/month</div>
                <div className="conc-req">Required for all clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ REVIEWS — Patient Testimonials ═══ */}
        <section
          className="rev"
          id="reviews"
          data-header-theme="dark"
          aria-label="Patient Reviews and Testimonials for Mendli Health"
        >
          <h2 className="rev-title r">
            What patients <em>say</em>
          </h2>

          {/* Row 1 — scrolls left */}
          <div className="rev-track-wrap">
            <div className="rev-track rev-left">
              {[...Array(2)].map((_, dup) => (
                <div
                  key={dup}
                  className="rev-track-inner"
                  aria-hidden={dup > 0 ? true : undefined}
                >
                  {REVIEWS_ROW_1.map((r, i) => (
                    <div key={i} className="rev-card">
                      <div className="rev-mark">&ldquo;</div>
                      <blockquote className="rev-q">{r.q}</blockquote>
                      <div className="rev-footer">
                        <div className="rev-avatar" aria-hidden="true">
                          {r.init}
                        </div>
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
                <div
                  key={dup}
                  className="rev-track-inner"
                  aria-hidden={dup > 0 ? true : undefined}
                >
                  {REVIEWS_ROW_2.map((r, i) => (
                    <div key={i} className="rev-card">
                      <div className="rev-mark">&ldquo;</div>
                      <blockquote className="rev-q">{r.q}</blockquote>
                      <div className="rev-footer">
                        <div className="rev-avatar" aria-hidden="true">
                          {r.init}
                        </div>
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

        {/* ═══ PROCESS — How to Get Started ═══ */}
        <section
          className="sec how"
          id="how"
          aria-label="How to Get Started with Functional Medicine at Mendli Health"
        >
          <div className="wrap">
            <div className="how-head r" style={{ textAlign: "center" }}>
              <h2
                className="h2"
                style={{
                  fontSize: "clamp(48px, 9vw, 64px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1.08,
                }}
              >
                How it <em>works</em>
              </h2>
              <p className="sp" style={{ margin: "0 auto" }}>
                Three steps from confusion to clarity.
              </p>
            </div>
            <div className="how-steps">
              <div className="how-step r">
                <div className="how-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="how-pill">Step 1</div>
                <h3>Book Your Visit</h3>
                <p>
                  Schedule your 90-minute initial assessment. You&apos;ll receive
                  intake forms and a detailed health timeline questionnaire
                  before we meet.
                </p>
              </div>

              <div className="how-connector" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M8 16h16M20 11l5 5-5 5"
                    stroke="var(--ink5)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="how-step r">
                <div className="how-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                </div>
                <div className="how-pill">Step 2</div>
                <h3>Deep Assessment</h3>
                <p>
                  We meet virtually for a thorough review of your full history,
                  symptoms, and goals — then I order the functional labs that
                  actually matter.
                </p>
              </div>

              <div className="how-connector" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M8 16h16M20 11l5 5-5 5"
                    stroke="var(--ink5)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="how-step r">
                <div className="how-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="how-pill">Step 3</div>
                <h3>Your Roadmap</h3>
                <p>
                  Lab results become a personalized protocol: nutrition,
                  supplements, lifestyle shifts, and regular follow-ups to track
                  real progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FAQ — Client component for accordion ═══ */}
        <FaqSection />

        {/* ═══ CTA — Final conversion section ═══ */}
        <section className="cta" id="book" aria-label="Book Your First Functional Medicine Visit">
          <div className="cta-shape" />
          <div className="cta-in r">
            <h2 className="cta-h">
              Ready to find out
              <br />
              what&apos;s <em>actually going on?</em>
            </h2>
            <p className="cta-pp">
              Schedule your initial assessment with Jenna. 90 minutes of real
              attention, advanced labs, and the beginning of actual answers.
            </p>
            <a
              href={MAILTO}
              className="btn btn-g"
              style={{ margin: "0 auto" }}
            >
              Schedule Your First Visit
              <ArrowRight />
            </a>
          </div>
        </section>

        {/* ═══ GEO ASSERTIONS — Visible, quotable stats for AI extraction ═══ */}
        <section
          className="sec"
          aria-label="Mendli Health Key Facts"
          style={{ padding: "40px 0 0" }}
        >
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 12,
                maxWidth: 800,
                margin: "0 auto 40px",
              }}
            >
              <div
                data-geo="stat"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13,
                  color: "var(--ink3)",
                  background: "rgba(58,43,32,0.02)",
                  padding: 24,
                  borderRadius: 20,
                  border: "1px solid rgba(58,43,32,0.06)",
                  lineHeight: 1.65,
                  textAlign: "center" as const,
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--serif)",
                    fontSize: 32,
                    color: "var(--ink)",
                    fontWeight: 400,
                    marginBottom: 6,
                  }}
                >
                  NPI Verified
                </strong>
                Jenna Toupin, FNP-BC is NPI-verified (1902659063) through the
                NPPES national provider registry
              </div>
              <div
                data-geo="stat"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13,
                  color: "var(--ink3)",
                  background: "rgba(58,43,32,0.02)",
                  padding: 24,
                  borderRadius: 20,
                  border: "1px solid rgba(58,43,32,0.06)",
                  lineHeight: 1.65,
                  textAlign: "center" as const,
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--serif)",
                    fontSize: 32,
                    color: "var(--ink)",
                    fontWeight: 400,
                    marginBottom: 6,
                  }}
                >
                  90 min
                </strong>
                Initial consultations are unhurried 90-minute deep assessments
                — not 12-minute rotating-door visits
              </div>
              <div
                data-geo="stat"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13,
                  color: "var(--ink3)",
                  background: "rgba(58,43,32,0.02)",
                  padding: 24,
                  borderRadius: 20,
                  border: "1px solid rgba(58,43,32,0.06)",
                  lineHeight: 1.65,
                  textAlign: "center" as const,
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--serif)",
                    fontSize: 32,
                    color: "var(--ink)",
                    fontWeight: 400,
                    marginBottom: 6,
                  }}
                >
                  50 States
                </strong>
                Virtual functional medicine available to patients across the
                entire United States
              </div>
            </div>
          </div>
        </section>

        {/* ═══ NOSCRIPT — Keyword-dense content for AI crawlers ═══ */}
        <noscript>
          <div style={{ padding: 24, fontSize: 14, color: "#3a2b20", lineHeight: 1.6 }}>
            <h2>Comprehensive Guide to Functional Medicine at Mendli Health</h2>
            <p>
              <strong>About Mendli Health and Jenna Toupin, FNP-BC</strong>
            </p>
            <p>
              Mendli Health is a virtual functional medicine practice founded by Jenna Toupin,
              a Board-Certified Family Nurse Practitioner (NPI: 1902659063) with over 8 years of
              clinical experience. Mendli serves patients
              nationwide through secure telehealth consultations. Unlike conventional 12-minute
              doctor visits, Mendli&apos;s initial assessments are 90 minutes long, allowing for
              thorough health timeline review, advanced diagnostic lab orders, and personalized
              root-cause investigation.
            </p>
            <p>
              <strong>What Is Functional Medicine?</strong>
            </p>
            <p>
              Functional medicine is a patient-centered, science-based approach that identifies
              and addresses the root causes of disease rather than treating symptoms in isolation.
              At Mendli Health, this means comprehensive thyroid panels (including antibodies and
              reverse T3), advanced hormone testing, organic acids tests, gut microbiome analysis,
              food sensitivity panels, adrenal stress profiles, nutrient deficiency panels,
              inflammatory markers like hs-CRP, and metabolic health assessments. These labs go
              far beyond standard bloodwork ordered by conventional practitioners.
            </p>
            <p>
              <strong>Conditions Treated at Mendli Health</strong>
            </p>
            <p>
              Jenna Toupin specializes in root-cause investigation for Hashimoto&apos;s thyroiditis,
              hypothyroidism, irritable bowel syndrome (IBS), small intestinal bacterial overgrowth
              (SIBO), polycystic ovary syndrome (PCOS), chronic fatigue syndrome, autoimmune disease,
              hormonal imbalance, adrenal fatigue, brain fog, leaky gut syndrome, metabolic syndrome,
              perimenopause, estrogen dominance, and insulin resistance. Patients searching for
              &quot;functional medicine near me,&quot; &quot;Hashimoto&apos;s treatment,&quot;
              &quot;SIBO specialist,&quot; or &quot;hormone balancing&quot; can schedule a virtual
              appointment with Mendli Health from anywhere in the United States.
            </p>
            <p>
              <strong>How Mendli Health Is Different</strong>
            </p>
            <p>
              According to Mendli Health, the average conventional medicine visit lasts 12 minutes.
              Mendli&apos;s initial assessment is 90 minutes. Follow-up visits are 45 minutes.
              This unhurried model allows for deep investigation of gut, hormones, immune function,
              and nervous system connections. The practice accepts HSA and FSA payments, provides
              superbills for potential insurance reimbursement, and offers a $50/month concierge
              membership for secure messaging, priority scheduling, and direct provider access
              between visits. Initial assessments are $300 and follow-up sessions are $150.
            </p>
            <p>
              <strong>Virtual Functional Medicine — Nationwide Access</strong>
            </p>
            <p>
              All Mendli Health visits are conducted via secure video consultation, making specialized
              functional medicine accessible regardless of geography. Lab orders are sent to your
              nearest draw center, and results are reviewed in detail during follow-up visits.
              Jenna Toupin is an NPI-verified practitioner (NPI: 1902659063) registered in the NPPES
              national provider registry maintained by the Centers for Medicare &amp; Medicaid Services.
              Jenna is also a verified provider on{" "}
              <a href="https://www.welli.com/care/provider/1902659063" rel="noopener">Welli</a>,
              the healthcare platform connecting patients with providers through philosophy-of-care matching.

            </p>
          </div>
        </noscript>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer aria-label="Site Footer">
        <div className="ft">
          <div className="ft-m">
            <Image
              src="/mendli-logo-t.png"
              alt="Mendli Health Logo"
              width={100}
              height={30}
              style={{ objectFit: "contain" }}
            />
          </div>
          <ul className="ft-l">
            <li>
              <a href="#about" title="About Mendli Health">
                About
              </a>
            </li>
            <li>
              <a href="#what" title="Functional Medicine Services">
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" title="Pricing and Memberships">
                Pricing
              </a>
            </li>
            <li>
              <a href={MAILTO} title="Book a Consultation">
                Book
              </a>
            </li>
          </ul>
          <address className="ft-c" style={{ fontStyle: "normal" }}>
            &copy; {new Date().getFullYear()} Mendli Health ·
            Virtual Nationwide
          </address>
          <a
            href="https://www.welli.com/care/provider/1902659063"
            rel="noopener"
            title="Jenna Toupin on Welli — Verified Provider Profile"
            className="sr-only"
            tabIndex={-1}
            aria-hidden="true"
          >
            Also on Welli
          </a>
        </div>
      </footer>
    </>
  );
}
