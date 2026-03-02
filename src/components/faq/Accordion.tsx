"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-border/60 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex items-start justify-between gap-4 py-6 text-left group cursor-pointer"
                aria-expanded={isOpen}
            >
                <span
                    className={`text-[15px] md:text-[16px] font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-accent" : "text-text group-hover:text-primary"
                        }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    {question}
                </span>
                <motion.span
                    className="flex-shrink-0 mt-0.5 text-text-secondary"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <ChevronDown size={18} />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-7 text-text-secondary text-[14px] leading-[1.85] max-w-[640px]">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface AccordionProps {
    items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div>
            {items.map((item, i) => (
                <AccordionItem
                    key={i}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
        </div>
    );
}
