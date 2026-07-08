import type { Metadata } from "next";
import { contact, site, isFilled } from "@/content/content";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { CalendarIcon, MailIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free strategy call or send a message about AI receptionists, voice AI agents, and missed call automation for your business.",
};

export default function ContactPage() {
  return (
    <div className="container-content py-16 sm:py-24">
      <Reveal className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl">{contact.heading}</h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-400">
          {contact.subheading}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: booking + direct channels */}
        <div className="space-y-8">
          <Reveal>
            <div className="rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                  <CalendarIcon className="h-5 w-5" />
                </span>
                <h2 className="text-xl">Book a free strategy call</h2>
              </div>
              <p className="leading-relaxed text-zinc-400">
                30 minutes. We map your call flow and I&apos;ll point out the one
                automation with the fastest payoff — whether or not you hire me.
              </p>
              {isFilled(site.bookingUrl) ? (
                <div className="mt-5 overflow-hidden rounded-xl border border-ink-700">
                  <iframe
                    src={site.bookingUrl}
                    title="Book a strategy call"
                    loading="lazy"
                    className="h-[620px] w-full bg-white"
                  />
                </div>
              ) : (
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-accent-500 px-6 py-3.5 font-semibold text-ink-950 transition hover:bg-accent-400"
                >
                  Pick a time
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-2xl border border-ink-700/70 bg-ink-900/60 p-5 transition-colors hover:border-accent-500/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="truncate font-medium text-white">{site.email}</p>
                </div>
              </a>

              {isFilled(site.whatsappUrl) && (
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-ink-700/70 bg-ink-900/60 p-5 transition-colors hover:border-accent-500/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-zinc-500">WhatsApp</p>
                    <p className="font-medium text-white">Message me directly</p>
                  </div>
                </a>
              )}
            </div>
          </Reveal>
        </div>

        {/* Right: contact form */}
        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6 sm:p-7">
            <h2 className="mb-6 text-xl">Or send a message</h2>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
