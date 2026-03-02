"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedEntry from "@/components/ui/AnimatedEntry";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Philosophy() {
    return (
        <>
            <SectionWrapper className="bg-surface-warm grain-overlay relative">
                <AnimatedEntry>
                    <div className="max-w-[680px] mx-auto">
                        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent mb-4">
                            Our Philosophy
                        </p>

                        <h2
                            className="text-[clamp(1.75rem,3.5vw,2.8rem)] font-normal tracking-tight mb-12"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Healthcare that <span className="italic">partners with you,</span>
                            {" "}not dictates to you
                        </h2>

                        <div className="space-y-6 text-text-secondary text-[15px] leading-[1.85]">
                            <p>
                                Functional medicine is built on a simple idea: your body is a connected system, and
                                symptoms are messages — not problems to silence. Instead of reaching for a
                                prescription at the first sign of trouble, we investigate. We ask why. We look
                                upstream.
                            </p>

                            <p>
                                Conventional care isn&apos;t broken — but it has blind spots. Fifteen-minute visits
                                and narrow lab panels can miss the bigger picture. Patients fall through the cracks,
                                especially those with complex, multi-system conditions like autoimmune disease, gut
                                dysfunction, and hormonal imbalances.
                            </p>

                            <p>
                                At Mendli, being virtual-first isn&apos;t a compromise — it&apos;s by design.
                                Virtual care removes barriers: no commute, no waiting rooms, no geographic
                                limitations.
                            </p>

                            {/* Callout */}
                            <blockquote className="my-12 py-8 px-8 bg-primary/[0.03] border-l-2 border-accent/50 rounded-r-xl">
                                <p
                                    className="text-[20px] md:text-[24px] text-text font-normal leading-[1.3] italic"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    &ldquo;You deserve a provider who sees you — not just your chart.&rdquo;
                                </p>
                            </blockquote>

                            <p>
                                This is what care should feel like: unhurried, thorough, and human. A partnership
                                where you&apos;re empowered with knowledge and treated
                                like the whole, complex person you are.
                            </p>
                        </div>
                    </div>
                </AnimatedEntry>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper>
                <AnimatedEntry>
                    <div className="text-center">
                        <h2
                            className="text-[clamp(1.75rem,3.5vw,2.8rem)] font-normal tracking-tight mb-5"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Let&apos;s start with <span className="italic">a conversation</span>
                        </h2>
                        <p className="text-text-secondary text-[16px] mb-10 max-w-[440px] mx-auto leading-[1.7]">
                            No pressure. No judgment. Just a real conversation about your health.
                        </p>
                        <Button href={SITE.bookingUrl} external variant="accent" size="lg">
                            Schedule a Consultation
                        </Button>
                    </div>
                </AnimatedEntry>
            </SectionWrapper>
        </>
    );
}
