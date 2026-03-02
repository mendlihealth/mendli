import type { Metadata } from "next";
import ProviderBio from "@/components/about/ProviderBio";
import Philosophy from "@/components/about/Philosophy";

export const metadata: Metadata = {
    title: "About",
    description:
        "Meet your provider — a Nurse Practitioner with deep clinical and personal expertise in functional medicine, Hashimoto's, and autoimmune health.",
};

export default function AboutPage() {
    return (
        <>
            <ProviderBio />
            <Philosophy />
        </>
    );
}
