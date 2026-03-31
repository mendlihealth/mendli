import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Mendli Health — Functional Medicine by Jenna Toupin, FNP | Virtual Nationwide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(145deg, #F9F5ED 0%, #EDE6D8 100%)",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Subtle warm circle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(58,43,32,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "rgba(58,43,32,0.4)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 32,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            MENDLI HEALTH
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: "#3A2B20",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              textAlign: "center",
              maxWidth: 900,
              marginBottom: 24,
            }}
          >
            Your health,{" "}
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>
              listened to.
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              color: "rgba(58,43,32,0.55)",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.5,
              fontFamily: "system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            Root-cause functional medicine · 60–90 min visits · Virtual
            nationwide
          </div>

          {/* Practitioner */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 40,
              padding: "14px 28px",
              background: "rgba(58,43,32,0.06)",
              borderRadius: 100,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#3A2B20",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F9F5ED",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              JT
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#3A2B20",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Jenna Toupin, FNP
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: "rgba(58,43,32,0.5)",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Board-Certified · 8+ Years
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
