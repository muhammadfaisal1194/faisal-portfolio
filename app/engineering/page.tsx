import type { Metadata } from "next";
import { engineering, site, isFilled } from "@/content/content";
import { Reveal } from "@/components/Reveal";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Senior Full-Stack & AI Engineer — 8 years shipping production software: React/Next.js frontends, Node.js and Python backends, and LLM systems including RAG pipelines and voice AI agents.",
};

export default function EngineeringPage() {
  return (
    <div className="container-content py-16 sm:py-24">
      {/* Intro */}
      <Reveal className="max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-400">
          For recruiters &amp; CTOs
        </p>
        <h1 className="text-4xl sm:text-5xl">{engineering.heading}</h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          {engineering.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-accent-400"
          >
            <DownloadIcon className="h-4 w-4" />
            Download resume
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-900/60 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-500/50"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          {isFilled(site.github) && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-900/60 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-500/50"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </Reveal>

      {/* Experience timeline */}
      <section className="mt-20">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl">Experience</h2>
        </Reveal>
        <ol className="mt-10 space-y-0 border-l border-ink-700/70">
          {engineering.timeline.map((entry, i) => (
            <Reveal key={`${entry.org}-${entry.period}`} delay={i * 0.06}>
              <li className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-500" />
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  {entry.period}
                </p>
                <h3 className="mt-1.5 text-lg">
                  {entry.role}{" "}
                  <span className="text-zinc-400">
                    · {entry.org} — {entry.location}
                  </span>
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-zinc-400">
                  {entry.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Tech stack grid */}
      <section className="mt-20">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl">Tech stack</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engineering.stack.map((group, i) => (
            <Reveal key={group.group} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-ink-700/70 bg-ink-900/60 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400">
                  {group.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-700 bg-ink-950/60 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
