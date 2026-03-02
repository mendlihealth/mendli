"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedEntry from "@/components/ui/AnimatedEntry";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { CalendarCheck, Search, Sparkles } from "lucide-react";

const steps = [
    {
        icon: CalendarCheck,
        number: "1",
        title: "Schedule",
        description: "Book your initial consultation online. Pick a time that works — no phone tag.",
    },
    {
        icon: Search,
        number: "2",
        title: "Discover",
        description: "Comprehensive intake, targeted labs, and a deep-dive into your health story.",
    },
    {
        icon: Sparkles,
        number: "3",
        title: "Transform",
        description: "Personalized plan, ongoing support, and real results. Your health — finally moving.",
    },
];

export default function HowItWorks() {
    return (
        <>
            <SectionWrapper className="bg-surface-warm grain-overlay relative">
                <AnimatedEntry>
                    <div className="text-center mb-20">
                        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent mb-4">
                            How It Works
                        </p>
                        <h2
                            className="text-[clamp(1.75rem,3.5vw,2.8rem)] font-normal tracking-tight"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Three steps to <span className="italic">better health</span>
                        </h2>
                    </div>
                </AnimatedEntry>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-[40px] left-[16.67%] right-[16.67%] h-px bg-border" />

                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <AnimatedEntry key={step.number} delay={i * 0.12}>
                                <div className="relative text-center">
                                    <div className="relative inline-flex items-center justify-center w-[80px] h-[80px] rounded-full bg-surface border border-border/60 mb-8 mx-auto z-10">
                                        <Icon size={26} className="text-primary" strokeWidth={1.5} />
                                        <span
                                            className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent text-white text-[12px] font-semibold flex items-center justify-center"
                                        >
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3
                                        className="text-[22px] font-semibold mb-3 tracking-tight"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-text-secondary text-[14px] leading-[1.7] max-w-[280px] mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimatedEntry>
                        );
                    })}
                </div>
            </SectionWrapper>

            {/* Pricing note */}
            <SectionWrapper>
                <AnimatedEntry>
                    <div className="text-center max-w-[520px] mx-auto">
                        <h2
                            className="text-[24px] font-normal mb-4 tracking-tight"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Transparent pricing — <span className="italic">no surprises</span>
                        </h2>
                        <p className="text-text-secondary text-[15px] leading-[1.75] mb-10">
                            We believe in straightforward, honest pricing. Fee details
                            are shared during your consultation so you know exactly
                            what you&apos;re investing in your health.
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
