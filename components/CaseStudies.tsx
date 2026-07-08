"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { caseStudies, isFilled, type CaseStudy } from "@/content/content";
import { Reveal } from "@/components/Reveal";
import { CheckIcon, ChevronDownIcon, PlayIcon } from "@/components/icons";

/** Convert a Loom share URL to its embeddable form. */
function loomEmbedUrl(shareUrl: string) {
  return shareUrl.replace("/share/", "/embed/");
}

function LoomBlock({ study }: { study: CaseStudy }) {
  if (isFilled(study.loomUrl)) {
    return (
      <div className="overflow-hidden rounded-xl border border-ink-700">
        <div className="relative aspect-video">
          <iframe
            src={loomEmbedUrl(study.loomUrl)}
            title={`Demo video — ${study.title}`}
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    );
  }

  // Placeholder until the real Loom URL is added in content.ts
  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-ink-700 bg-ink-950/60">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
        <PlayIcon className="h-5 w-5 translate-x-0.5" />
      </span>
      <p className="text-sm text-zinc-500">Demo video coming soon</p>
    </div>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <Reveal delay={index * 0.1}>
      <article className="overflow-hidden rounded-2xl border border-ink-700/70 bg-ink-900/60 transition-colors hover:border-ink-700">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`case-study-${study.id}`}
          className="flex w-full items-start justify-between gap-4 p-7 text-left"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-400">
              {study.tag}
            </p>
            <h3 className="text-xl sm:text-2xl">{study.title}</h3>
            <p className="mt-3 leading-relaxed text-zinc-400">{study.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink-700 bg-ink-950/60 px-3 py-1 text-xs font-medium text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <span
            className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-700 text-zinc-400 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          >
            <ChevronDownIcon className="h-4 w-4" />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`case-study-${study.id}`}
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <div className="grid gap-8 border-t border-ink-700/60 p-7 lg:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    What it does
                  </h4>
                  <ul className="space-y-3">
                    {study.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-zinc-300">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent-400" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 rounded-xl border border-accent-500/20 bg-accent-500/5 p-4 text-sm leading-relaxed text-accent-300">
                    {study.outcome}
                  </p>
                </div>
                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    Watch it in action
                  </h4>
                  <LoomBlock study={study} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

export function CaseStudies() {
  return (
    <section className="border-t border-ink-700/50 bg-ink-900/30" id="case-studies">
      <div className="container-content py-20 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">{caseStudies.heading}</h2>
          <p className="mt-4 text-lg text-zinc-400">{caseStudies.subheading}</p>
        </Reveal>

        <div className="mt-14 space-y-5">
          {caseStudies.items.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
