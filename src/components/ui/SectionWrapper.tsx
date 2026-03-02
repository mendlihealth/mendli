interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function SectionWrapper({
    children,
    className = "",
    id,
}: SectionWrapperProps) {
    return (
        <section id={id} className={`py-20 md:py-28 lg:py-32 ${className}`}>
            <div className="mx-auto max-w-[1200px] px-6 md:px-8">{children}</div>
        </section>
    );
}
