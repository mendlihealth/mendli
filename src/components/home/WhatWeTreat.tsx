"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Stethoscope, Sparkles, Activity } from "lucide-react";
import AnimatedEntry from "@/components/ui/AnimatedEntry";
import { SITE } from "@/lib/constants";

const services = [
    {
        icon: Stethoscope,
        title: "Primary Care",
        description:
            "Whole-person virtual primary care that actually takes time with you. Not 15 minutes and out the door.",
        href: "/services#primary-care",
    },
    {
        icon: Activity,
        title: "Gut Health",
        description:
            "Bloating, IBS, SIBO, food sensitivities — traced to root causes, not masked with another prescription.",
        href: "/services#gut-health",
    },
    {
        icon: Sparkles,
        title: "Hormone Therapy",
        description:
            "Fatigue, weight changes, mood shifts — balanced through real testing and personalized protocols.",
        href: "/services#hormone-therapy",
    },
];

export default function WhatWeTreat() {
    return (
        <section id="what-we-treat" className="py-24 md:py-32">
            <div className="mx-auto max-w-[1200px] px-6 md:px-8">
                <AnimatedEntry>
                    <h2
                        className="text-[clamp(2rem,4vw,3rem)] tracking-tight mb-6 max-w-[600px]"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
                    >
                        Specialized care for the conditions
                        no one else could <span className="italic">figure out.</span>
                    </h2>
                    <p className="text-text-secondary text-[16px] leading-[1.7] max-w-[520px] mb-16">
                        We focus on the conditions that get brushed off, misdiagnosed,
                        or managed with band-aid prescriptions.
                    </p>
                </AnimatedEntry>

                {/* Service rows — horizontal, with clear hover states */}
                <div className="space-y-4 mb-10">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedEntry key={service.title} delay={i * 0.08}>
                                <Link href={service.href} className="group block">
                                    <div className="flex items-start gap-6 md:gap-8 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-surface-warm hover:shadow-[0_2px_20px_-4px_rgba(26,46,90,0.06)]">
                                        <div className="w-11 h-11 rounded-xl bg-surface-warm group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-300 mt-0.5">
                                            <Icon size={20} className="text-accent" strokeWidth={1.6} />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-4">
                                                <h3
                                                    className="text-[20px] tracking-tight"
                                                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                                                >
                                                    {service.title}
                                                </h3>
                                                <svg
                                                    width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                    className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 translate-x-0 group-hover:translate-x-1"
                                                >
                                                    <path d="M4 9H14M14 9L9 4M14 9L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-text-secondary text-[15px] leading-[1.7] mt-2 max-w-[520px]">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedEntry>
                        );
                    })}
                </div>

                {/* Featured thyroid block — warm palette, differentiated from closing CTA */}
                <AnimatedEntry delay={0.3}>
                    <Link href="/services#thyroid" className="group block">
                        <div className="relative rounded-[24px] overflow-hidden bg-[#f0ebe3]">
                            {/* Subtle warm accent glow */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "radial-gradient(ellipse 50% 70% at 80% 50%, rgba(196,149,106,0.12) 0%, transparent 60%)",
                                }}
                            />

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_260px] items-center">
                                <div className="p-10 md:p-14">
                                    <div className="flex items-center gap-2.5 mb-5">
                                        <Heart size={15} className="text-accent" strokeWidth={1.6} />
                                        <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-accent-dark">
                                            Our Signature Specialty
                                        </span>
                                    </div>

                                    <h3
                                        className="text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight mb-4"
                                        style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
                                    >
                                        Thyroid & <span className="italic">Hashimoto&apos;s</span>
                                    </h3>

                                    <p className="text-text-secondary text-[15px] leading-[1.7] max-w-[440px] mb-6">
                                        From someone who lives it. Deep clinical and personal expertise
                                        in autoimmune thyroid disease — not just a TSH check and a prescription.
                                    </p>

                                    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-accent group-hover:gap-3 transition-all duration-300">
                                        Learn more
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>

                                {/* Provider photo peek */}
                                <div className="hidden md:block relative h-full min-h-[280px]">
                                    <Image
                                        src="/jenna-toupin.jpg"
                                        alt={SITE.provider.fullTitle}
                                        fill
                                        className="object-cover object-top opacity-50 group-hover:opacity-65 transition-opacity duration-500"
                                        sizes="260px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#f0ebe3] via-[#f0ebe3]/60 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </AnimatedEntry>
            </div>
        </section>
    );
}
