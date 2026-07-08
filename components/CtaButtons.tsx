import { site, hero } from "@/content/content";
import { CalendarIcon } from "@/components/icons";

/**
 * The two primary conversion actions, reused in the hero and the final CTA.
 */
export function CtaButtons({ center = false }: { center?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:gap-4 ${
        center ? "items-center sm:justify-center" : "items-stretch sm:items-center"
      }`}
    >
      <a
        href={`tel:${site.demoPhone}`}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-7 py-4 text-base font-semibold text-ink-950 shadow-lg shadow-accent-500/20 transition hover:-translate-y-0.5 hover:bg-accent-400"
      >
        {hero.primaryCta}
      </a>
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-700 bg-ink-900/60 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent-500/50 hover:bg-ink-800"
      >
        <CalendarIcon className="h-5 w-5 text-accent-400" />
        {hero.secondaryCta}
      </a>
    </div>
  );
}
