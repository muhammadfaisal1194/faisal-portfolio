"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/content";
import { PhoneIcon } from "@/components/icons";

const navLinks = [
  { href: "/", label: "Voice AI" },
  { href: "/engineering", label: "Engineering" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/60 bg-ink-950/80 backdrop-blur-md">
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold text-white"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400">
            {/* mini waveform mark */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <rect x="1" y="6" width="2" height="4" rx="1" />
              <rect x="5" y="3" width="2" height="10" rx="1" />
              <rect x="9" y="1" width="2" height="14" rx="1" />
              <rect x="13" y="5" width="2" height="6" rx="1" />
            </svg>
          </span>
          <span className="hidden sm:inline">{site.shortName}</span>
          <span className="sm:hidden">Faisal</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${site.demoPhone}`}
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-400"
          >
            <PhoneIcon className="h-4 w-4" />
            Call my AI agent
          </a>
        </nav>

        {/* Mobile: keep the call CTA visible, collapse nav */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${site.demoPhone}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent-500 px-3 py-2 text-sm font-semibold text-ink-950"
          >
            <PhoneIcon className="h-4 w-4" />
            Call AI
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 hover:bg-ink-800"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink-700/60 bg-ink-950 md:hidden" aria-label="Mobile">
          <div className="container-content flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base ${
                  pathname === link.href
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
