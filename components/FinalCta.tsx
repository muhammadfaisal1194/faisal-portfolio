import { finalCta } from "@/content/content";
import { CtaButtons } from "@/components/CtaButtons";
import { Reveal } from "@/components/Reveal";
import { Waveform } from "@/components/Waveform";

export function FinalCta() {
  return (
    <section className="border-t border-ink-700/50">
      <div className="container-content py-20 sm:py-28">
        <Reveal>
          <div className="hero-glow relative overflow-hidden rounded-3xl border border-accent-500/20 bg-ink-900/70 px-6 py-14 text-center sm:px-12 sm:py-16">
            <Waveform className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-[0.06]" />
            <div className="relative">
              <h2 className="mx-auto max-w-xl text-3xl sm:text-4xl">
                {finalCta.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">
                {finalCta.line}
              </p>
              <div className="mt-9">
                <CtaButtons center />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
