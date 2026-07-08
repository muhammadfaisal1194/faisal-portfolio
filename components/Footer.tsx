import Link from "next/link";
import { site, isFilled } from "@/content/content";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-ink-700/60">
      <div className="container-content flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1.5">
          <p className="text-sm font-semibold text-white">{site.name}</p>
          <p className="text-sm text-zinc-500">
            AI voice agents for clinics, real estate &amp; service businesses.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav className="flex gap-5 text-sm text-zinc-400" aria-label="Footer">
            <Link href="/" className="hover:text-white">Voice AI</Link>
            <Link href="/engineering" className="hover:text-white">Engineering</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
          <div className="flex gap-4 text-zinc-500">
            <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-accent-400">
              <MailIcon className="h-5 w-5" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent-400">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            {isFilled(site.github) && (
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent-400">
                <GitHubIcon className="h-5 w-5" />
              </a>
            )}
            {isFilled(site.whatsappUrl) && (
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent-400">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-ink-700/40">
        <div className="container-content py-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
