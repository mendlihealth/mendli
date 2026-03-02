"use client";

import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "accent" | "ghost";
    size?: "default" | "lg";
    className?: string;
    external?: boolean;
}

export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
    size = "default",
    className = "",
    external = false,
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 cursor-pointer select-none";

    const variants: Record<string, string> = {
        primary:
            "bg-primary text-white rounded-full hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
            "border border-primary/20 text-primary rounded-full hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5 active:translate-y-0",
        accent:
            "bg-accent text-white rounded-full hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 active:translate-y-0",
        ghost:
            "text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary/80",
    };

    const sizes: Record<string, string> = {
        default: "px-7 py-3 text-[14px]",
        lg: "px-9 py-4 text-[15px]",
    };

    const classes = `${base} ${variants[variant]} ${variant !== "ghost" ? sizes[size] : "text-[15px]"} ${className}`;

    if (href) {
        if (external) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
