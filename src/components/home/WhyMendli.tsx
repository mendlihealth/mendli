"use client";

import AnimatedEntry from "@/components/ui/AnimatedEntry";

const points = [
    {
        number: "01",
        title: "Root-cause, not band-aid.",
        body: "We dig into why — not just what. Symptoms are signals. We follow them to the source and build a plan that addresses what's actually going on in your body.",
    },
    {
        number: "02",
        title: "Virtual-first by design.",
        body: "Expert care from wherever you are. No commute, no waiting rooms. Just focused, meaningful time with your provider — the way healthcare should work.",
    },
    {
        number: "03",
        title: "Real time with your provider.",
        body: "Your visits aren't rushed. You're a person with a story, not a 15-minute slot. We take the time to understand the full picture before making a plan.",
    },
    {
        number: "04",
        title: "Lived experience.",
        body: "Your provider has walked the autoimmune path herself. Hashimoto's, the dismissals, the runaround. This isn't theoretical — it's deeply personal, and that makes it deeply effective.",
    },
];

export default function WhyMendli() {
    return (
        <section className="relative py-24 md:py-36 overflow-hidden bg-surface-warm">
            <div className="mx-auto max-w-[1200px] px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24">
                    {/* Left — headline */}
                    <AnimatedEntry direction="left">
                        <div className="lg:sticky lg:top-32">
                            <h2
                                className="text-[clamp(2.2rem,4vw,3.2rem)] tracking-tight leading-[1.08]"
                                style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
                            >
                                Medicine that starts with{" "}
                                <span className="italic text-accent">believing you.</span>
                            </h2>

                            <p className="mt-6 text-text-secondary text-[15px] leading-[1.75] max-w-[360px]">
                                We built Mendli for the patients who&apos;ve been told &ldquo;everything looks
                                fine&rdquo; when they know it doesn&apos;t feel fine.
                            </p>
                        </div>
                    </AnimatedEntry>

                    {/* Right — points as mini-cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {points.map((point, i) => (
                            <AnimatedEntry key={i} delay={i * 0.08}>
                                <div className="bg-white rounded-2xl p-7 h-full">
                                    <span
                                        className="text-[32px] font-light text-accent/25 leading-none block mb-4"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {point.number}
                                    </span>
                                    <h3
                                        className="text-[17px] mb-2.5 tracking-tight"
                                        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                                    >
                                        {point.title}
                                    </h3>
                                    <p className="text-text-secondary text-[14px] leading-[1.7]">
                                        {point.body}
                                    </p>
                                </div>
                            </AnimatedEntry>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
