import Image from "next/image";
import { MAILTO } from "../constants";

/**
 * ProviderCard — Server Component
 * Pure CSS animations (morph, breathing glow), no client hooks needed.
 * Fully rendered in the initial HTML for SEO/GEO.
 */
export function ProviderCard() {
  return (
    <div style={{ position: "relative" }}>
      {/* Ambient glow behind card */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(58,43,32,.1) 0%, rgba(58,43,32,.03) 40%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          background: "linear-gradient(180deg, #fff 0%, #FEFCF9 100%)",
          borderRadius: 32,
          width: "100%",
          maxWidth: 420,
          boxShadow:
            "0 1px 3px rgba(58,43,32,.05), 0 12px 32px rgba(58,43,32,.1), 0 32px 80px rgba(58,43,32,.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Noise texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.02,
            zIndex: 1,
            pointerEvents: "none",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "128px 128px",
          }}
        />
        {/* Rim light */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            borderRadius: 32,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(58,43,32,0.02)",
          }}
        />

        {/* Header gradient */}
        <div
          style={{
            height: 110,
            background:
              "linear-gradient(180deg, rgba(58,43,32,0.05) 0%, transparent 100%)",
            position: "relative",
            zIndex: 2,
          }}
        />

        {/* Avatar */}
        <div
          style={{
            marginTop: -70,
            display: "flex",
            justifyContent: "center",
            marginBottom: 18,
            position: "relative",
            zIndex: 3,
          }}
        >
          <div style={{ position: "relative" }}>
            {/* Breathing glow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 190,
                height: 190,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(58,43,32,0.06) 0%, transparent 70%)",
                animation: "morph 6s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />
            <Image
              src="/jenna-headshot.jpg"
              alt="Jenna Toupin, Board-Certified Family Nurse Practitioner and founder of Mendli Health"
              width={140}
              height={140}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 15%",
                border: "5px solid #fff",
                boxShadow:
                  "0 6px 24px rgba(58,43,32,0.12), 0 2px 6px rgba(58,43,32,0.06)",
              }}
            />
            {/* Verified badge */}
            <div
              style={{
                position: "absolute",
                bottom: 8,
                right: 8,
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#10B981",
                border: "3.5px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(16,185,129,0.35)",
              }}
              aria-label="Board certified and verified"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            padding: "0 36px 36px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Name */}
          <span
            style={{
              fontFamily: "var(--serif)",
              fontSize: 26,
              fontWeight: 500,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              marginBottom: 4,
            }}
          >
            Jenna Toupin
          </span>

          {/* Subtitle */}
          <span
            style={{
              fontFamily: "var(--sans)",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--ink4)",
              letterSpacing: "0.05em",
              marginBottom: 20,
            }}
          >
            Family Nurse Practitioner
          </span>

          {/* Credentials row */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, width: "100%" }}>
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                label: "FNP-BC",
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                label: "8+ Years",
              },
              {
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                label: "NPI Verified",
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 14px",
                  borderRadius: 14,
                  background: "rgba(58,43,32,0.03)",
                  border: "1px solid rgba(58,43,32,0.05)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--ink4)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={c.icon} />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--ink2)",
                  }}
                >
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap" as const,
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            {["Functional", "Root Cause", "Holistic", "Preventive"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 10,
                  fontWeight: 600,
                  color: "var(--linen)",
                  background: "var(--clay)",
                  padding: "6px 14px",
                  borderRadius: 20,
                  letterSpacing: "0.03em",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: 1,
              background: "rgba(58,43,32,0.06)",
              marginBottom: 20,
            }}
          />

          {/* Next available */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "12px 16px",
              borderRadius: 16,
              background: "rgba(58,43,32,0.03)",
              border: "1px solid rgba(58,43,32,0.05)",
              marginBottom: 20,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 9,
                  fontWeight: 700,
                  color: "var(--ink5)",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  marginBottom: 3,
                }}
              >
                Next available
              </div>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#10B981",
                }}
              >
                This Week
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ink4)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--ink3)",
                }}
              >
                Virtual · Nationwide
              </span>
            </div>
          </div>

          {/* CTA */}
          <a
            href={MAILTO}
            className="nav-cta"
            style={{
              width: "100%",
              textAlign: "center" as const,
              fontSize: ".875rem",
              padding: "14px 0",
              display: "block",
            }}
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
