interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({
    children,
    className = "",
    hover = true,
}: CardProps) {
    return (
        <div
            className={`bg-surface rounded-[20px] border border-border/60 p-8 md:p-10 transition-all duration-500 ${hover
                    ? "hover:shadow-[0_8px_40px_-12px_rgba(26,46,90,0.08)] hover:-translate-y-1"
                    : ""
                } ${className}`}
        >
            {children}
        </div>
    );
}
