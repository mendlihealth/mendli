import type { Metadata } from "next";
import { FAQ_DATA } from "@/lib/faq-data";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
    title: "FAQ",
    description:
        "Frequently asked questions about Mendli's virtual functional health services, appointments, thyroid care, and more.",
};

export default function FAQPage() {
    return <FAQContent data={FAQ_DATA} />;
}
