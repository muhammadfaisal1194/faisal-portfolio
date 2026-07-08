import { services } from "@/content/content";
import { Reveal } from "@/components/Reveal";
import {
  CustomIcon,
  InboundIcon,
  OutboundIcon,
  RecoverIcon,
  SyncIcon,
} from "@/components/icons";

const iconMap = {
  inbound: InboundIcon,
  outbound: OutboundIcon,
  recover: RecoverIcon,
  sync: SyncIcon,
  custom: CustomIcon,
};

export function Services() {
  return (
    <section className="container-content py-20 sm:py-28" id="services">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl">{services.heading}</h2>
        <p className="mt-4 text-lg text-zinc-400">{services.subheading}</p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-ink-700/70 bg-ink-900/60 p-7 transition-colors hover:border-accent-500/30">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg">{service.title}</h3>
                <p className="mt-2.5 leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
