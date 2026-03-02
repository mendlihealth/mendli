"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedEntryProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedEntry({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: AnimatedEntryProps) {
    const shouldReduceMotion = useReducedMotion();

    const offsets = {
        up: { y: 40, x: 0 },
        left: { y: 0, x: -40 },
        right: { y: 0, x: 40 },
        none: { y: 0, x: 0 },
    };

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y: offsets[direction].y,
                x: offsets[direction].x,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
