import Link from "next/link";
import { whyMe } from "@/content/content";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export function WhyMe() {
  return (
    <section className="border-t border-ink-700/50 bg-ink-900/30">
      <div className="container-content grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{whyMe.heading}</h2>
          {whyMe.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg leading-relaxed text-zinc-400">
              {paragraph}
            </p>
          ))}
          <Link
            href="/engineering"
            className="mt-7 inline-flex items-center gap-2 font-medium text-accent-400 transition-colors hover:text-accent-300"
          >
            {whyMe.engineeringLink}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="space-y-5">
          {whyMe.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.1}>
              <div className="flex gap-4 rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base">{point.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-zinc-400">
                    {point.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
