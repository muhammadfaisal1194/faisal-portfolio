import { howItWorks } from "@/content/content";
import { Reveal } from "@/components/Reveal";
import { MapIcon, PhoneIcon, TuneIcon } from "@/components/icons";

const iconMap = {
  map: MapIcon,
  phone: PhoneIcon,
  tune: TuneIcon,
};

export function HowItWorks() {
  return (
    <section className="container-content py-20 sm:py-28" id="how-it-works">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl">{howItWorks.heading}</h2>
        <p className="mt-4 text-lg text-zinc-400">{howItWorks.subheading}</p>
      </Reveal>

      <ol className="mt-14 grid gap-6 sm:grid-cols-3">
        {howItWorks.steps.map((step, i) => {
          const Icon = iconMap[step.icon];
          return (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative h-full rounded-2xl border border-ink-700/70 bg-ink-900/60 p-7">
                <span className="absolute right-6 top-6 text-4xl font-bold text-ink-700/80">
                  {i + 1}
                </span>
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg">{step.title}</h3>
                <p className="mt-2.5 leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
