"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedEntry from "@/components/ui/AnimatedEntry";
import Accordion from "@/components/faq/Accordion";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import type { FAQCategory } from "@/lib/faq-data";

interface FAQContentProps {
    data: FAQCategory[];
}

export default function FAQContent({ data }: FAQContentProps) {
    return (
        <>
            <SectionWrapper className="pt-36 md:pt-44">
                <AnimatedEntry>
                    <div className="text-center mb-20">
                        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent mb-4">
                            FAQ
                        </p>
                        <h1
                            className="text-[clamp(2rem,4.5vw,3.5rem)] font-normal tracking-tight mb-5"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Questions & <span className="italic">answers</span>
                        </h1>
                        <p className="text-text-secondary text-[16px] max-w-[480px] mx-auto leading-[1.7]">
                            Everything you need to know before your first visit. Can&apos;t find
                            what you&apos;re looking for? Just reach out.
                        </p>
                    </div>
                </AnimatedEntry>

                <div className="max-w-[720px] mx-auto space-y-14">
                    {data.map((category, i) => (
                        <AnimatedEntry key={category.title} delay={i * 0.08}>
                            <div>
                                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent/70 mb-4">
                                    {category.title}
                                </p>
                                <div className="bg-surface rounded-[20px] border border-border/60 px-7 md:px-9">
                                    <Accordion items={category.items} />
                                </div>
                            </div>
                        </AnimatedEntry>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper>
                <AnimatedEntry>
                    <div className="text-center">
                        <h2
                            className="text-[clamp(1.75rem,3.5vw,2.8rem)] font-normal tracking-tight mb-5"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Still have <span className="italic">questions?</span>
                        </h2>
                        <p className="text-text-secondary text-[16px] mb-10 max-w-[440px] mx-auto leading-[1.7]">
                            We&apos;d love to hear from you. Schedule a consultation and let&apos;s
                            talk about your health goals.
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
