"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
                        : "bg-transparent"
                    }`}
            >
                <div className="mx-auto max-w-[1200px] px-6 md:px-8 flex items-center justify-between h-[80px]">
                    {/* Logo — serif wordmark */}
                    <Link
                        href="/"
                        className="text-[22px] font-semibold tracking-tight text-primary"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {SITE.name}
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 ${pathname === link.href
                                        ? "text-primary"
                                        : "text-text-secondary hover:text-primary"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button href={SITE.bookingUrl} external variant="accent" size="default">
                            Book a Call
                        </Button>
                    </div>

                    {/* Mobile controls */}
                    <div className="flex md:hidden items-center gap-3">
                        <Button
                            href={SITE.bookingUrl}
                            external
                            variant="accent"
                            size="default"
                            className="!px-5 !py-2.5 !text-[13px]"
                        >
                            Book
                        </Button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-text hover:text-primary transition-colors"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-bg md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-10 pt-[80px]">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.06 * i, duration: 0.4, ease: "easeOut" }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-3xl font-semibold tracking-tight transition-colors ${pathname === link.href
                                                ? "text-accent"
                                                : "text-text hover:text-accent"
                                            }`}
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.06 * NAV_LINKS.length, duration: 0.4 }}
                            >
                                <Button href={SITE.bookingUrl} external variant="accent" size="lg">
                                    Book a Consultation
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
