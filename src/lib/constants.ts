export const SITE = {
    name: "Mendli",
    tagline: "Virtual Functional Health Care",
    bookingUrl: "https://EXTERNAL_BOOKING_URL", // Replace with actual booking URL
    provider: {
        name: "Jenna Toupin",
        credentials: "NP",
        fullTitle: "Jenna Toupin, NP",
        email: "", // TBD
    },
};

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
] as const;
