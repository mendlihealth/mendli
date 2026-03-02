"use client";

import AnimatedEntry from "@/components/ui/AnimatedEntry";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function ClosingCTA() {
    return (
        <section className="relative py-28 md:py-36 overflow-hidden">
            {/* Warm inviting background — distinct from the navy thyroid-era blocks */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(170deg, #1a2e5a 0%, #162649 50%, #0f1d3d 100%)",
                }}
            />
            {/* Subtle warm glow in the center */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(196,149,106,0.1) 0%, transparent 60%)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 text-center">
                <AnimatedEntry>
                    <p className="text-[13px] font-medium tracking-[0.08em] text-accent/70 uppercase mb-8">
                        Take the first step
                    </p>

                    <h2
                        className="text-[clamp(2rem,4.5vw,3.5rem)] text-white tracking-tight leading-[1.08] mb-6 mx-auto max-w-[600px]"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
                    >
                        Ready to feel like <span className="italic">yourself</span> again?
                    </h2>

                    <p className="text-white/45 text-[16px] leading-[1.7] mb-10 max-w-[440px] mx-auto">
                        You deserve real answers and a provider who truly listens.
                        Let&apos;s start with a conversation.
                    </p>

                    <Button
                        href={SITE.bookingUrl}
                        external
                        variant="accent"
                        size="lg"
                    >
                        Schedule a Consultation
                    </Button>
                </AnimatedEntry>
            </div>
        </section>
    );
}
