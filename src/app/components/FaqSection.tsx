"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "../constants";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: EASE }}
      style={{
        background: "rgba(254,252,249,0.72)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: 22,
        border: `1px solid ${
          isOpen ? "rgba(58,43,32,0.12)" : "rgba(58,43,32,0.04)"
        }`,
        boxShadow: isOpen
          ? "0 12px 40px rgba(58,43,32,0.07), inset 0 1px 0 rgba(255,255,255,0.9)"
          : "0 2px 8px rgba(58,43,32,0.03), inset 0 1px 0 rgba(255,255,255,0.9)",
        marginBottom: 12,
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      <div
        style={{
          width: "100%",
          padding: "24px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--sans)",
            fontSize: "clamp(15px, 1.6vw, 17px)",
            fontWeight: 600,
            color: "var(--ink)",
            lineHeight: 1.45,
          }}
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
          style={{
            width: 32,
            height: 32,
            borderRadius: 10,
            flexShrink: 0,
            background: isOpen ? "var(--clay)" : "rgba(58,43,32,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.25s",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke={isOpen ? "#fff" : "var(--ink4)"}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 28px", marginBottom: 24 }}>
              <div
                style={{
                  height: 1,
                  background: "rgba(58,43,32,0.06)",
                  marginBottom: 18,
                }}
              />
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "clamp(14px, 1.4vw, 15.5px)",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "var(--ink3)",
                  margin: 0,
                }}
              >
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      className="sec faq"
      id="faq"
      aria-label="Frequently Asked Questions about Mendli Health and Functional Medicine"
    >
      <div className="wrap">
        <div className="faq-head r" style={{ textAlign: "center" }}>
          <h2
            className="h2"
            style={{
              fontSize: "clamp(48px, 9vw, 64px)",
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
            }}
          >
            Frequently <em>asked</em>
          </h2>
          <p className="faq-sub" style={{ margin: "0 auto" }}>
            Everything you need to know before your first visit.
          </p>
        </div>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
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
