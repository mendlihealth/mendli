"use client";

import {
    Stethoscope,
    Activity,
    Sparkles,
    Heart,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedEntry from "@/components/ui/AnimatedEntry";

interface ServiceBlockProps {
    id: string;
    icon: React.ElementType;
    title: string;
    subtitle?: string;
    description: string;
    conditions: string[];
    approach: string[];
    callout?: string;
    elevated?: boolean;
}

function ServiceBlock({
    id,
    icon: Icon,
    title,
    subtitle,
    description,
    conditions,
    approach,
    callout,
    elevated = false,
}: ServiceBlockProps) {
    return (
        <AnimatedEntry>
            <div
                id={id}
                className={`scroll-mt-28 py-16 md:py-20 border-b border-border/60 last:border-b-0 ${elevated ? "relative" : ""
                    }`}
            >
                {elevated && (
                    <div className="absolute -left-4 md:-left-8 top-16 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent-light to-transparent rounded-full" />
                )}

                <div className={`${elevated ? "pl-6 md:pl-10" : ""}`}>
                    <div className="flex items-start gap-5 mb-8">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/[0.05] flex items-center justify-center">
                            <Icon size={22} className="text-primary" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h2
                                className="text-[26px] md:text-[30px] font-normal tracking-tight"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {title}
                            </h2>
                            {subtitle && (
                                <p className="text-accent text-[13px] font-medium uppercase tracking-[0.1em] mt-1">{subtitle}</p>
                            )}
                        </div>
                    </div>

                    <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-[660px]">
                        {description}
                    </p>

                    {callout && (
                        <blockquote className="my-8 py-6 px-8 bg-primary/[0.03] border-l-2 border-accent/50 rounded-r-xl">
                            <p
                                className="text-[18px] md:text-[20px] text-text font-normal italic leading-[1.35]"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                &ldquo;{callout}&rdquo;
                            </p>
                        </blockquote>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                        <div>
                            <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-primary/50 mb-5">
                                Conditions Addressed
                            </h3>
                            <ul className="space-y-3">
                                {conditions.map((condition, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-text-secondary text-[14px] leading-[1.6]"
                                    >
                                        <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                                        {condition}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-primary/50 mb-5">
                                Our Approach
                            </h3>
                            <ul className="space-y-3">
                                {approach.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-text-secondary text-[14px] leading-[1.6]"
                                    >
                                        <span className="mt-2 w-1 h-1 rounded-full bg-primary/30 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedEntry>
    );
}

const services: ServiceBlockProps[] = [
    {
        id: "primary-care",
        icon: Stethoscope,
        title: "Primary Care",
        description:
            "Whole-person virtual primary care that takes the time conventional medicine can't. We manage your overall health with the depth and attention you deserve — from annual wellness to chronic conditions.",
        conditions: [
            "Annual wellness visits & preventive care",
            "Chronic condition management",
            "Medication management & optimization",
            "Lab interpretation & health screening",
            "Lifestyle & nutrition guidance",
        ],
        approach: [
            "Comprehensive health assessments",
            "Thorough lab analysis (not just checkbox panels)",
            "Extended visit times with your dedicated provider",
            "Ongoing virtual support between visits",
            "Coordination with specialists when needed",
        ],
    },
    {
        id: "gut-health",
        icon: Activity,
        title: "Gut Health",
        description:
            "Your gut affects everything — your energy, mood, immunity, hormones, and more. When conventional GI care hasn't given you answers, we dig deeper with comprehensive functional testing and targeted protocols.",
        conditions: [
            "IBS & chronic bloating",
            "SIBO (Small Intestinal Bacterial Overgrowth)",
            "Leaky gut & intestinal permeability",
            "Food sensitivities & intolerances",
            "Dysbiosis & microbiome imbalance",
        ],
        approach: [
            "Comprehensive stool analysis & functional testing",
            "Personalized dietary protocols & elimination diets",
            "Targeted supplementation for gut restoration",
            "Microbiome optimization strategies",
            "Lifestyle modifications for lasting gut health",
        ],
    },
    {
        id: "hormone-therapy",
        icon: Sparkles,
        title: "Hormone Therapy",
        description:
            "Hormones govern how you feel every day. When they're out of balance, everything suffers. We run the right tests, listen to your experience, and create a personalized protocol to help you feel like yourself again.",
        conditions: [
            "Perimenopause & menopause symptoms",
            "PCOS (Polycystic Ovary Syndrome)",
            "Adrenal dysfunction & cortisol imbalance",
            "Low testosterone (men & women)",
            "Fatigue, weight changes & mood shifts",
        ],
        approach: [
            "Full hormone panels (not just the basics)",
            "Bioidentical hormone therapy options",
            "Adrenal & cortisol assessment",
            "Lifestyle & nutritional integration",
            "Ongoing monitoring & protocol adjustment",
        ],
    },
    {
        id: "thyroid",
        icon: Heart,
        title: "Thyroid & Hashimoto's",
        subtitle: "Our Signature Specialty",
        description:
            "This is personal. Your provider lives with Hashimoto's — and brings both clinical expertise and lived experience to every thyroid case. If you've been told your labs are 'normal' but you feel anything but, you're in the right place.",
        conditions: [
            "Hypothyroidism & subclinical hypothyroidism",
            "Hashimoto's thyroiditis",
            "Thyroid antibody management",
            "Medication optimization & conversion issues",
            "Thyroid-related fatigue, weight & mood changes",
        ],
        approach: [
            "Full thyroid panels (TSH, Free T3, Free T4, Reverse T3, antibodies)",
            "Optimal range interpretation (not just 'normal')",
            "Antibody reduction protocols",
            "Dietary & lifestyle strategies for autoimmune management",
            "Medication optimization (T4, T3, combination therapy)",
        ],
        callout:
            "I know what it's like to be told your labs are 'normal' when you feel anything but.",
        elevated: true,
    },
];

export default function ServiceBlocks() {
    return (
        <SectionWrapper className="pt-36 md:pt-44">
            <AnimatedEntry>
                <div className="text-center mb-8">
                    <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent mb-4">
                        Our Services
                    </p>
                    <h1
                        className="text-[clamp(2rem,4.5vw,3.5rem)] font-normal tracking-tight mb-5"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Care that <span className="italic">goes deeper</span>
                    </h1>
                    <p className="text-text-secondary text-[16px] max-w-[500px] mx-auto leading-[1.7]">
                        Comprehensive, root-cause care for the conditions conventional medicine
                        often overlooks.
                    </p>
                </div>
            </AnimatedEntry>

            {services.map((service) => (
                <ServiceBlock key={service.id} {...service} />
            ))}
        </SectionWrapper>
    );
}
