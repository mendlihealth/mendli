import type { Metadata } from "next";
import ServiceBlocks from "@/components/services/ServiceBlock";
import HowItWorks from "@/components/services/HowItWorks";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore Mendli's virtual functional health services: Primary Care, Gut Health, Hormone Therapy, and Thyroid & Hashimoto's care.",
};

export default function ServicesPage() {
    return (
        <>
            <ServiceBlocks />
            <HowItWorks />
        </>
    );
}
