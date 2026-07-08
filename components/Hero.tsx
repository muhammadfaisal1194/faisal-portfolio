"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import { hero } from "@/content/content";
import { CtaButtons } from "@/components/CtaButtons";
import { Waveform } from "@/components/Waveform";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => {
    const transition: Transition = {
      duration: 0.6,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    };
    return {
      initial: reduceMotion ? false : { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition,
    };
  };

  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="container-content flex flex-col items-center pb-16 pt-20 text-center sm:pb-24 sm:pt-28">
        <motion.p
          {...fadeUp(0)}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
          </span>
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          {...fadeUp(0.08)}
          className="max-w-3xl text-4xl leading-[1.1] sm:text-5xl md:text-6xl"
        >
          AI agents that answer your business calls{" "}
          <span className="text-accent-400">24/7.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div {...fadeUp(0.24)} className="mt-9 w-full sm:w-auto">
          <CtaButtons center />
        </motion.div>

        <motion.div
          {...fadeUp(0.34)}
          className="mt-14 h-16 w-full max-w-md sm:h-20"
        >
          <Waveform className="h-full" />
        </motion.div>
      </div>
    </section>
  );
}
