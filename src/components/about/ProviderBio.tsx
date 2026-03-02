"use client";

import Image from "next/image";
import AnimatedEntry from "@/components/ui/AnimatedEntry";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { SITE } from "@/lib/constants";

export default function ProviderBio() {
    return (
        <SectionWrapper className="pt-36 md:pt-44">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
                {/* Photo */}
                <AnimatedEntry direction="left">
                    <div className="relative mx-auto lg:mx-0">
                        <div className="w-[300px] h-[400px] md:w-[360px] md:h-[470px] rounded-[24px] overflow-hidden relative">
                            <Image
                                src="/jenna-toupin.jpg"
                                alt={`${SITE.provider.fullTitle} — Nurse Practitioner and founder of Mendli`}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 300px, 360px"
                                priority
                            />
                        </div>
                        {/* Offset accent frame */}
                        <div className="absolute -bottom-4 -right-4 w-[300px] h-[400px] md:w-[360px] md:h-[470px] rounded-[24px] border border-accent/20 -z-10" />
                    </div>
                </AnimatedEntry>

                {/* Bio */}
                <AnimatedEntry direction="right" delay={0.15}>
                    <div>
                        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent mb-4">
                            Your Provider
                        </p>

                        <h1
                            className="text-[clamp(2rem,4vw,3.2rem)] font-normal tracking-tight mb-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            {SITE.provider.fullTitle}
                        </h1>

                        <p className="text-accent font-medium text-[15px] mb-10">
                            Nurse Practitioner · Functional Medicine
                        </p>

                        <div className="space-y-5 text-text-secondary text-[15px] leading-[1.85]">
                            <p>
                                I didn&apos;t come to functional medicine through a textbook — I came to it through
                                my own body. After years of fatigue, brain fog, and being told my labs were
                                &ldquo;normal,&rdquo; I was finally diagnosed with Hashimoto&apos;s thyroiditis. And
                                what struck me wasn&apos;t just the diagnosis — it was how long it took to get
                                there.
                            </p>

                            <p>
                                As a Nurse Practitioner, I&apos;d spent years in clinical practice. I knew how to
                                read labs, manage medications, and follow protocols. But my own experience showed me
                                the gap: conventional medicine often treats numbers on a page, not the person sitting
                                in front of you.
                            </p>

                            <p>
                                That gap became my mission. I dove into functional medicine — an approach that asks
                                <em> why</em> instead of just <em>what</em>. I learned to look at the whole
                                picture: gut health, hormones, nutrition, stress, and how every system in the body
                                connects. And I saw my own health transform.
                            </p>

                            <p>
                                That&apos;s why I started Mendli — to give patients the kind of care I wished I&apos;d
                                had. The kind where your provider actually listens, runs the right tests, takes the
                                time, and builds a plan that&apos;s truly yours.
                            </p>

                            <p
                                className="font-medium text-text italic"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                When you work with me, you get a partner — not just a provider.
                            </p>
                        </div>
                    </div>
                </AnimatedEntry>
            </div>
        </SectionWrapper>
    );
}
