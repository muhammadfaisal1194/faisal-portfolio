import { site } from "@/content/content";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudies } from "@/components/CaseStudies";
import { Services } from "@/components/Services";
import { WhyMe } from "@/components/WhyMe";
import { FinalCta } from "@/components/FinalCta";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  sameAs: [site.linkedin],
  knowsAbout: [
    "AI receptionist",
    "voice AI agent",
    "AI appointment booking",
    "missed call automation",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <CaseStudies />
      <Services />
      <WhyMe />
      <FinalCta />
    </>
  );
}
