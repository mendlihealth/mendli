export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQCategory {
    title: string;
    items: FAQItem[];
}

export const FAQ_DATA: FAQCategory[] = [
    {
        title: "About Mendli",
        items: [
            {
                question: "What is functional medicine?",
                answer:
                    "Functional medicine is a patient-centered approach that focuses on identifying and addressing the root causes of disease rather than just treating symptoms. We look at the whole picture — your genetics, environment, lifestyle, and health history — to create a personalized plan that helps your body heal and thrive.",
            },
            {
                question: "How is Mendli different from my regular doctor?",
                answer:
                    "Most conventional visits are 10-15 minutes focused on individual symptoms. At Mendli, we take a deep-dive approach — longer visits, comprehensive lab work, and a plan that looks at how your body's systems work together. We partner with you to find real answers, not just prescriptions.",
            },
            {
                question: "Is Mendli right for me?",
                answer:
                    "If you've been told your labs are 'normal' but you still don't feel right, if you're tired of band-aid solutions, or if you want a provider who actually listens — Mendli was built for you. We specialize in gut health, hormones, thyroid conditions, and whole-person primary care.",
            },
            {
                question: "What states do you see patients in?",
                answer:
                    "We currently see patients virtually in select states. Please schedule a consultation or reach out to confirm we can practice in your state. We're actively working on expanding our availability.",
            },
        ],
    },
    {
        title: "Appointments & Process",
        items: [
            {
                question: "What happens during the first visit?",
                answer:
                    "Your initial consultation is a comprehensive deep-dive into your health story. We'll review your full history, discuss your symptoms and goals, order targeted lab work, and start building your personalized care plan. Expect to feel heard — probably for the first time in a long time.",
            },
            {
                question: "How long are appointments?",
                answer:
                    "Initial consultations are typically 60 minutes. Follow-up visits range from 30-45 minutes depending on your needs. We don't rush. You get the time you deserve.",
            },
            {
                question: "How do virtual visits work?",
                answer:
                    "Virtual visits happen through a secure, HIPAA-compliant video platform. All you need is a device with a camera, a stable internet connection, and a quiet space. It's just like an in-person visit, except you're in the comfort of your own home.",
            },
            {
                question: "How do I get lab work done?",
                answer:
                    "We order labs through major national lab networks. You'll receive a requisition form and can visit a local draw site at your convenience. We also work with at-home lab testing options when appropriate.",
            },
            {
                question: "Do you prescribe medications?",
                answer:
                    "Yes. As a Nurse Practitioner, your provider can prescribe medications, including bioidentical hormones and thyroid medications. We take a balanced approach — using medications when needed alongside lifestyle and nutritional strategies.",
            },
        ],
    },
    {
        title: "Thyroid & Hashimoto's",
        items: [
            {
                question:
                    "Why do I still feel terrible even though my doctor says my thyroid labs are normal?",
                answer:
                    "This is one of the most common things we hear. Most providers only test TSH — sometimes T4. But optimal thyroid function requires looking at the full picture: Free T3, Free T4, Reverse T3, and thyroid antibodies. 'Normal' lab ranges are wide, and you may not be at YOUR optimal level. We dig deeper.",
            },
            {
                question: "What thyroid tests should I actually be getting?",
                answer:
                    "A comprehensive thyroid panel should include: TSH, Free T4, Free T3, Reverse T3, TPO antibodies, and Thyroglobulin antibodies. We also look at key nutrients that affect thyroid function — iron, ferritin, vitamin D, selenium, and zinc.",
            },
            {
                question: "Can Hashimoto's be managed without just medication?",
                answer:
                    "Medication is often an important piece, but it's not the whole picture. Hashimoto's is an autoimmune condition, and managing the immune component is key. We use dietary protocols, gut healing, targeted supplementation, stress management, and lifestyle changes alongside medication optimization.",
            },
        ],
    },
    {
        title: "Logistics",
        items: [
            {
                question: "Do you accept insurance?",
                answer:
                    "We operate as an out-of-network provider. We can provide superbills that you may submit to your insurance for potential reimbursement. Many patients find that the depth of care they receive more than justifies the investment.",
            },
            {
                question: "What are your fees?",
                answer:
                    "Transparent pricing — no surprises. Specific fee details are shared during your consultation. We believe you should know exactly what you're investing in your health.",
            },
            {
                question: "How do I schedule, cancel, or reschedule?",
                answer:
                    "You can schedule your appointment through our online booking system. Cancellations and reschedules can be made up to 24 hours in advance through the same system or by contacting us directly.",
            },
            {
                question: "What technology do I need for a virtual visit?",
                answer:
                    "You'll need a smartphone, tablet, or computer with a camera and microphone, plus a reliable internet connection. We recommend a quiet, private space for your visit. We'll send you a link before your appointment — just click and connect.",
            },
        ],
    },
];
