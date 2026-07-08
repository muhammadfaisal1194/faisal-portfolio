import { testimonial } from "@/content/content";
import { Reveal } from "@/components/Reveal";

export function SocialProof() {
  return (
    <section className="border-y border-ink-700/50 bg-ink-900/50">
      <div className="container-content py-14 sm:py-16">
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <svg
              className="mx-auto mb-5 h-8 w-8 text-accent-500/60"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M11 7H6.5A2.5 2.5 0 0 0 4 9.5v5A2.5 2.5 0 0 0 6.5 17H9a2 2 0 0 0 2-2V7zm9 0h-4.5A2.5 2.5 0 0 0 13 9.5v5a2.5 2.5 0 0 0 2.5 2.5H18a2 2 0 0 0 2-2V7z" />
            </svg>
            <blockquote className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm font-medium uppercase tracking-wider text-zinc-500">
              — {testimonial.attribution}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
