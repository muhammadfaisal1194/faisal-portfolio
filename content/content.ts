/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONTENT — edit everything here, never in components.
 *
 * Anything marked [FILL] is a placeholder waiting for your real value.
 * Search this file for "FILL" to find them all.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Muhammad Faisal Mahmood",
  shortName: "Faisal Mahmood",
  role: "Voice AI Agent Developer",
  title: "Faisal Mahmood — AI Voice Agents for Clinics & Service Businesses",
  description:
    "I build AI voice agents that answer your business calls 24/7 — an AI receptionist that books appointments, recovers missed calls, and logs every lead in your CRM.",

  // [FILL] Your production domain (used for canonical URLs, sitemap, and OG tags).
  url: "https://faisalmahmood.dev",

  email: "muhammadfaisal1194@gmail.com",

  // [FILL] Demo agent phone number in E.164 format, e.g. "+15551234567".
  demoPhone: "+15551234567",
  // Human-readable version shown next to the button (optional).
  demoPhoneDisplay: "",

  // [FILL] Your Calendly / Cal.com booking link.
  bookingUrl: "https://calendly.com/FILL-your-link/strategy-call",

  // [FILL] WhatsApp link, e.g. "https://wa.me/923001234567". Leave "" to hide.
  whatsappUrl: "",

  linkedin: "https://www.linkedin.com/in/dev-faisal-mahmood/",

  // [FILL] Your GitHub profile URL.
  github: "https://github.com/FILL-your-username",

  // Drop resume.pdf into /public and this button works.
  resumeUrl: "/resume.pdf",
} as const;

/** True once a [FILL] value has been replaced with something real. */
export const isFilled = (value: string) =>
  value.length > 0 && !value.includes("FILL") && value !== "+15551234567";

export const hero = {
  eyebrow: "Voice AI for clinics, real estate & service businesses",
  headline: "AI agents that answer your business calls 24/7.",
  subheadline:
    "I build voice AI systems that greet your callers, book appointments into your calendar, and log everything in your CRM — so no call goes unanswered and no lead slips away.",
  primaryCta: "📞 Call my AI agent now",
  secondaryCta: "Book a free strategy call",
} as const;

export const testimonial = {
  quote:
    "The voice AI booking agent Faisal built for us handles our patient calls better than we expected. We're getting after-hours and weekend bookings now, and that's building more trust with our patients.",
  // [FILL] Client name / clinic if permitted; otherwise leave as-is.
  attribution: "Healthcare clinic client",
} as const;

export const howItWorks = {
  heading: "How it works",
  subheading: "From first call to production agent — without a big project plan.",
  steps: [
    {
      icon: "map" as const,
      title: "We map your call flow",
      description:
        "On a free strategy call, we walk through what happens when your phone rings today — and pick the one automation with the fastest payoff.",
    },
    {
      icon: "phone" as const,
      title: "You get a working agent in days",
      description:
        "Within days, your AI receptionist is live on a real phone number, answering calls, booking appointments, and taking messages.",
    },
    {
      icon: "tune" as const,
      title: "We refine it on real conversations",
      description:
        "We review real calls together and tune the agent until it's production-reliable — the way it should sound before it represents your business.",
    },
  ],
} as const;

export type CaseStudy = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  details: string[];
  outcome: string;
  stack: string[];
  // [FILL] Loom share URL, e.g. "https://www.loom.com/share/abc123".
  loomUrl: string;
};

export const caseStudies: { heading: string; subheading: string; items: CaseStudy[] } = {
  heading: "Real agents, on real phone numbers",
  subheading:
    "Three voice AI systems I've built end-to-end — watch them handle actual conversations.",
  items: [
    {
      id: "clinic-receptionist",
      tag: "Inbound · Healthcare",
      title: "AI Receptionist for a Healthcare Clinic",
      summary:
        "An inbound AI receptionist that answers patient calls, checks real-time availability, and books appointments directly into the clinic's calendar.",
      details: [
        "Answers every patient call — including after-hours and weekends, when the front desk is closed.",
        "Checks real-time availability and books or reschedules appointments directly into Google Calendar.",
        "Handles common patient FAQs (hours, location, insurance questions) without staff involvement.",
        "Takes structured messages for anything that needs a human, so mornings start with a clean call log instead of a full voicemail box.",
      ],
      outcome:
        "The clinic now captures after-hours and weekend bookings that used to go to voicemail.",
      stack: ["Retell AI", "n8n", "Google Calendar"],
      loomUrl: "https://www.loom.com/share/FILL-clinic-demo",
    },
    {
      id: "outbound-sales",
      tag: "Outbound · Sales",
      title: "Outbound AI Sales Agent with HubSpot Sync",
      summary:
        "An outbound voice agent that works through lead lists, qualifies prospects in natural conversation, and syncs every outcome to HubSpot automatically.",
      details: [
        "Works through lead lists methodically — no lead sits uncalled because the team got busy.",
        "Qualifies prospects with natural conversation, not a robotic survey.",
        "Syncs every call outcome to HubSpot automatically: notes, lead status, and follow-up tasks.",
        "Sales reps open HubSpot to a prioritized list of warm, qualified conversations instead of a raw lead dump.",
      ],
      outcome:
        "Every call outcome lands in HubSpot with notes, status, and a follow-up task — zero manual data entry.",
      stack: ["Retell AI", "n8n", "HubSpot"],
      loomUrl: "https://www.loom.com/share/FILL-outbound-demo",
    },
    {
      id: "real-estate-qualifier",
      tag: "Inbound · Real Estate",
      title: "Real Estate Lead Qualifier",
      summary:
        "A voice agent that captures property inquiries, qualifies buyers on budget and timeline, and routes hot leads to an agent instantly.",
      details: [
        "Answers property inquiry calls the moment they come in — speed-to-lead without a human on standby.",
        "Qualifies buyers on budget, timeline, and property requirements in a natural conversation.",
        "Routes hot leads to an agent instantly; logs everything else for structured follow-up.",
        "Every inquiry is captured in Google Sheets with full qualification details.",
      ],
      outcome:
        "Hot buyers reach a human agent while they're still on the line or seconds after hanging up.",
      stack: ["Vapi", "Twilio", "n8n", "Google Sheets"],
      loomUrl: "https://www.loom.com/share/FILL-realestate-demo",
    },
  ],
};

export const services = {
  heading: "What I build for you",
  subheading:
    "Every engagement is framed around one question: which calls are you losing, and what are they worth?",
  items: [
    {
      icon: "inbound" as const,
      title: "Inbound AI receptionists",
      description:
        "An AI receptionist that answers every call, books appointments into your calendar, and answers your callers' most common questions — 24/7, including weekends.",
    },
    {
      icon: "outbound" as const,
      title: "Outbound sales & follow-up agents",
      description:
        "Voice agents that call your leads, qualify them in natural conversation, and make sure no prospect goes cold waiting for a follow-up.",
    },
    {
      icon: "recover" as const,
      title: "Missed-call recovery",
      description:
        "Missed call automation that calls or texts back within seconds, so the lead you paid to generate doesn't book with whoever answered first.",
    },
    {
      icon: "sync" as const,
      title: "CRM & calendar automation",
      description:
        "Every call outcome logged where your team already works — n8n, GoHighLevel, HubSpot, Google Calendar — with no manual data entry.",
    },
    {
      icon: "custom" as const,
      title: "Custom integrations & self-hosted voice stacks",
      description:
        "For high call volume or unusual requirements: custom integrations and self-hosted voice infrastructure that keeps per-minute costs under control.",
    },
  ],
} as const;

export const whyMe = {
  heading: "Why work with me",
  paragraphs: [
    "Before voice AI, I spent 8 years as a full-stack engineer building SaaS products. That matters more than it sounds: when your agent needs a custom integration or complex logic, I build it — I don't work around platform limits.",
    "I'm platform-agnostic: Retell AI, Vapi, or self-hosted (LiveKit) depending on your budget and call volume. You get the right stack for your business, not the one I happen to resell.",
  ],
  points: [
    {
      title: "Engineer first",
      description:
        "8 years of full-stack engineering behind every agent — custom logic and integrations are built, not bolted on.",
    },
    {
      title: "Platform-agnostic",
      description:
        "Retell AI, Vapi, or self-hosted LiveKit — chosen for your budget and volume, not a reseller margin.",
    },
    {
      title: "Production-minded",
      description:
        "Agents are refined on real conversations until they're reliable enough to represent your business.",
    },
  ],
  engineeringLink: "See my engineering background",
} as const;

export const finalCta = {
  heading: "Hear it for yourself.",
  line: "I'll map out one voice AI automation that can realistically pay for itself within 30 days.",
} as const;

/* ────────────────────────── /engineering page ────────────────────────── */

export const engineering = {
  heading: "Senior Full-Stack & AI Engineer",
  intro:
    "Before specializing in voice AI, I spent 8 years shipping production software — SaaS frontends, cloud backends, and more recently LLM systems: RAG pipelines, multi-agent platforms, and voice agents. This page is the engineering side of the story.",
  timeline: [
    {
      period: "2022 — Present",
      role: "Freelance AI / Full-Stack Engineer",
      org: "Upwork",
      location: "Remote",
      description:
        "AI and LLM systems for international clients: RAG pipelines, multi-agent platforms, and production voice AI agents end-to-end — telephony, conversation design, and CRM/calendar integrations.",
    },
    {
      period: "2022",
      role: "Frontend Engineer (sole frontend)",
      org: "Unblinked",
      location: "Seoul · Remote",
      description:
        "Sole frontend engineer, owning the product's web frontend end-to-end.",
    },
    {
      period: "2021 — 2022",
      role: "Full-Stack Engineer",
      org: "Frag Games",
      location: "Lahore",
      description:
        "Built an NFT marketplace with a heavy AWS backend footprint.",
    },
    {
      period: "2020 — 2021",
      role: "Team Lead",
      org: "Argon Technologies",
      location: "Pakistan",
      description:
        "Led a development team delivering client projects.",
    },
    {
      period: "2018 — 2020",
      role: "Software Engineer",
      org: "CodeCradle",
      location: "Pakistan",
      description:
        "First engineering role — full-stack web development.",
    },
  ],
  stack: [
    { group: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
    { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "NestJS", "FastAPI"] },
    {
      group: "AI / LLM",
      items: ["LangChain", "LangGraph", "RAG", "OpenAI / Claude / Gemini APIs"],
    },
    {
      group: "Voice",
      items: ["Retell AI", "Vapi", "LiveKit", "Twilio", "ElevenLabs", "Deepgram"],
    },
    { group: "Data", items: ["PostgreSQL", "MongoDB", "Supabase"] },
    { group: "DevOps", items: ["AWS", "Docker", "CI/CD"] },
  ],
} as const;

/* ────────────────────────── /contact page ────────────────────────── */

export const contact = {
  heading: "Let's talk about your calls",
  subheading:
    "Book a free strategy call, or send a message — I reply within one business day.",
  businessTypes: [
    "Healthcare / clinic",
    "Real estate",
    "Agency",
    "Other service business",
    "Recruiter / hiring",
    "Other",
  ],
} as const;
