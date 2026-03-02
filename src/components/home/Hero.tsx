"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
            {/* Clean warm gradient — no canvas, no blobs */}
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg, #faf9f7 0%, #f5f2ed 50%, #ede8e0 100%)" }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[100dvh] py-28 lg:py-0">
                    {/* Left — Copy */}
                    <div className="max-w-[560px]">
                        <motion.p
                            className="text-[13px] font-medium tracking-[0.06em] text-accent-dark mb-8 uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Virtual Functional Medicine
                        </motion.p>

                        <motion.h1
                            className="text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.06] tracking-[-0.03em] mb-7"
                            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                        >
                            You&apos;re not crazy.
                            <br />
                            You&apos;re not &ldquo;just stressed.&rdquo;
                            <br />
                            <span className="italic text-accent">Let&apos;s find out what&apos;s really going on.</span>
                        </motion.h1>

                        <motion.p
                            className="text-[17px] text-text-secondary leading-[1.75] mb-8 max-w-[460px]"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        >
                            Mendli is NP-led virtual care that investigates root causes — specializing
                            in gut health, hormones, and thyroid conditions like Hashimoto&apos;s.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap items-center gap-4"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.65, ease: [0.19, 1, 0.22, 1] }}
                        >
                            <Button href={SITE.bookingUrl} external variant="accent" size="lg">
                                Schedule a Consultation
                            </Button>
                            <Button href="#what-we-treat" variant="ghost">
                                See what we treat ↓
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right — Provider Image */}
                    <motion.div
                        className="relative hidden lg:block"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <div className="relative aspect-[3/4] max-h-[600px] mx-auto rounded-[28px] overflow-hidden shadow-[0_24px_80px_-16px_rgba(26,46,90,0.12)]">
                            <Image
                                src="/jenna-toupin.jpg"
                                alt={SITE.provider.fullTitle}
                                fill
                                className="object-cover object-top"
                                sizes="(min-width: 1024px) 500px, 0px"
                                priority
                            />
                            {/* Warm gradient overlay at bottom */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(to top, rgba(237,232,224,0.4) 0%, transparent 40%)",
                                }}
                            />
                        </div>

                        {/* Floating credential badge */}
                        <motion.div
                            className="absolute -left-6 bottom-24 bg-white rounded-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] px-5 py-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <p
                                className="text-[15px] font-semibold text-primary tracking-tight"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {SITE.provider.fullTitle}
                            </p>
                            <p className="text-[12px] text-text-secondary mt-0.5">
                                Functional Medicine
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
