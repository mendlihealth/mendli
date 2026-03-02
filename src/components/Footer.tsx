import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Footer() {
    return (
        <footer className="bg-[#0f1d3d] text-white grain-overlay relative">
            <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 md:gap-8">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="text-[22px] font-semibold tracking-tight"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            {SITE.name}
                        </Link>
                        <p className="mt-4 text-white/40 text-[14px] leading-[1.8] max-w-[300px]">
                            Virtual functional health care that listens, investigates, and gets to the root of what&apos;s really going on.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/30 mb-5">
                            Navigate
                        </p>
                        <div className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[14px] text-white/50 hover:text-accent transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/30 mb-5">
                            Get Started
                        </p>
                        <p className="text-white/40 text-[14px] leading-[1.7] mb-6">
                            Ready to take the first step? We&apos;d love to hear from you.
                        </p>
                        <Button
                            href={SITE.bookingUrl}
                            external
                            variant="accent"
                            size="default"
                        >
                            Book a Consultation
                        </Button>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[13px] text-white/25">
                        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-[13px] text-white/25 hover:text-white/50 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-[13px] text-white/25 hover:text-white/50 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
