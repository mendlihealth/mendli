/* ─── Shared constants used across server and client components ─── */

export const MAILTO =
  "mailto:jenna@mendlihealth.com?subject=New%20Appointment&body=Hi%20Jenna%2C%0A%0AI%E2%80%99d%20love%20to%20book%20an%20appointment%20with%20you.%20Looking%20forward%20to%20getting%20started%20on%20my%20health%20journey.%0A%0AThank%20you!";

export const SITE_URL = "https://mendlihealth.com";

/* ─── FAQ data: imported by FaqSection component AND layout.tsx schema ─── */
export const FAQS = [
  /* ── Practice / Logistics ── */
  {
    q: "Do you have a physical location?",
    a: "All Mendli visits are currently virtual — available to patients nationwide. That said, a physical location in Indianapolis is in development for patients who prefer in-person care. If you'd like to be notified when the office opens, just let me know when you book.",
  },
  {
    q: "Do you offer primary care?",
    a: "Yes — I'm a Board-Certified Family Nurse Practitioner, and primary care is what I trained in. I grew up around it, too; my dad was a Family Physician. Once the Indianapolis office is established, I plan to offer a dedicated primary care package alongside functional health services.",
  },
  {
    q: "Do you take insurance?",
    a: "Mendli is currently out-of-network with all insurance plans. This model allows me to spend 60–90 minutes with you instead of 12 — without the limitations insurance-based practices face. I provide superbills after each visit that you can submit to your insurer for potential reimbursement, and I accept HSA and FSA cards.",
  },
  {
    q: "What's included with the Concierge Membership?",
    a: "Your membership ($50/month) includes secure messaging between visits, priority scheduling, and direct access to Jenna. Think of it as always having someone who truly knows your full health picture just a message away. It's required because continuity is how functional health actually works — your care doesn't stop between appointments.",
  },
  /* ── High-intent search-targeted FAQs ── */
  {
    q: "What is functional medicine?",
    a: "Functional medicine is a patient-centered approach that identifies and addresses the root causes of disease rather than treating symptoms in isolation. Instead of asking 'what medication covers this symptom,' we ask 'why is this symptom happening in the first place?' At Mendli, this means 60–90 minute consultations, advanced diagnostic labs that go far beyond standard bloodwork, and personalized care plans built around your unique biology, lifestyle, and health history.",
  },
  {
    q: "How is functional medicine different from conventional medicine?",
    a: "Conventional medicine typically treats symptoms with medication in 12–15 minute visits. Functional medicine starts with your full health timeline and uses advanced diagnostics — comprehensive thyroid panels, gut microbiome testing, hormone metabolites, inflammatory markers — to find the underlying cause. At Mendli, your initial visit is 90 minutes. I look at how your body's systems interact, rather than treating each symptom in a silo.",
  },
  {
    q: "What lab tests does a functional medicine practitioner order?",
    a: "At Mendli, labs go far beyond standard bloodwork. Depending on your symptoms, I may order comprehensive thyroid panels (including antibodies and reverse T3), advanced hormone testing, organic acids tests, gut microbiome analysis, food sensitivity panels, adrenal stress profiles, nutrient deficiency panels, inflammatory markers like hs-CRP, and metabolic health assessments including insulin resistance markers. Every panel is selected based on your specific symptoms and health history — never a one-size-fits-all panel.",
  },
  {
    q: "How long does it take to see results with functional medicine?",
    a: "Most patients begin noticing meaningful shifts within 4–8 weeks of starting their personalized protocol. Some changes — like improved energy, better sleep, and reduced brain fog — can happen within the first 2–3 weeks. Deeper systemic issues like hormonal rebalancing, gut healing, or autoimmune management typically show significant progress within 3–6 months. We track progress with follow-up labs and regular check-ins so you can see objective improvement, not just feel it.",
  },
  {
    q: "Is functional medicine evidence-based?",
    a: "Absolutely. Functional medicine combines peer-reviewed research with clinical experience and advanced diagnostics. The labs I order, the supplements I recommend, and the protocols I build are all grounded in published research. The difference isn't whether the science is used — it's how deeply it's applied. Conventional care often stops at 'your labs are normal.' Functional medicine reads those same labs through a narrower lens, comparing your results against optimal ranges rather than just population averages.",
  },
  {
    q: "Can I see a functional medicine practitioner virtually?",
    a: "Yes — and virtual care is actually ideal for functional medicine. At Mendli, all visits are conducted via secure video. Lab orders are sent to your nearest lab draw center, and results are reviewed in detail during your follow-up visit. The virtual model means you get access to specialized functional medicine care no matter where you are in the United States, without the travel or wait times of in-person practice.",
  },
];

/* ─── Conditions we investigate — displayed on page + used in schema ─── */
export const CONDITIONS = [
  {
    name: "Thyroid & Hashimoto's",
    description:
      "The most under-diagnosed and under-treated condition in America. Standard panels miss it. We don't.",
    signs: [
      "Persistent fatigue despite sleeping enough",
      "Unexplained weight gain or difficulty losing weight",
      "Hair thinning, dry skin, or brittle nails",
      "Feeling cold when others are comfortable",
      "Brain fog and poor concentration",
    ],
    icon: "thyroid",
    schemaName: "Hashimoto's Thyroiditis",
  },
  {
    name: "Gut Health & Digestion",
    description:
      "Your gut is connected to everything — immunity, mood, hormones, and energy. Let's find out what's really going on.",
    signs: [
      "Bloating, gas, or abdominal discomfort after meals",
      "Irregular bowel movements (IBS-like symptoms)",
      "Food sensitivities that seem to multiply",
      "Skin issues like acne, eczema, or rosacea",
      "Frequent infections or weakened immunity",
    ],
    icon: "gut",
    schemaName: "Irritable Bowel Syndrome",
  },
  {
    name: "Hormonal Imbalance",
    description:
      "From PCOS to perimenopause to estrogen dominance — hormones affect every system. We test what others skip.",
    signs: [
      "Irregular or painful menstrual cycles",
      "Mood swings, anxiety, or depression",
      "Low libido or sexual dysfunction",
      "Perimenopause or early menopause symptoms",
      "Acne, facial hair, or PCOS-related symptoms",
    ],
    icon: "hormones",
    schemaName: "Hormonal Disorders",
  },
  {
    name: "Chronic Fatigue & Low Energy",
    description:
      "If you've been told 'your labs are normal' but you're still exhausted — there's a reason your body is whispering.",
    signs: [
      "Exhaustion that doesn't improve with rest",
      "Needing caffeine to function through the day",
      "Crashing in the afternoon despite eating well",
      "Feeling 'wired but tired' at night",
      "Post-exertional malaise or exercise intolerance",
    ],
    icon: "fatigue",
    schemaName: "Chronic Fatigue Syndrome",
  },
  {
    name: "Brain Fog & Cognitive Issues",
    description:
      "Poor focus, memory lapses, and mental sluggishness aren't just stress — they're symptoms with identifiable causes.",
    signs: [
      "Difficulty concentrating or completing tasks",
      "Forgetting words mid-sentence",
      "Feeling mentally 'cloudy' or slow",
      "Poor short-term memory",
      "Difficulty making decisions",
    ],
    icon: "brain",
    schemaName: "Cognitive Dysfunction",
  },
  {
    name: "Autoimmune Conditions",
    description:
      "When your immune system attacks your own tissue, we look for the environmental and biological triggers driving it.",
    signs: [
      "Joint pain, swelling, or stiffness",
      "Skin rashes or unexplained inflammation",
      "Multiple food or chemical sensitivities",
      "Fatigue alongside elevated inflammatory markers",
      "Family history of autoimmune disease",
    ],
    icon: "autoimmune",
    schemaName: "Autoimmune Disease",
  },
];
