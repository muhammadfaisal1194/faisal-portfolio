# Faisal Mahmood — Voice AI Portfolio

Personal portfolio site: AI voice agents for clinics, real estate & service businesses, with an engineering background page for recruiters.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion. Static-first, zero-config deploy on Vercel.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

**All copy lives in [`content/content.ts`](content/content.ts)** — you never need to touch a component to change text.

### Fill-in checklist

Search `content/content.ts` for `FILL` and replace:

- [ ] `site.url` — your production domain (canonical URLs, sitemap, OG tags)
- [ ] `site.demoPhone` — your demo agent's phone number (E.164, e.g. `+15551234567`)
- [ ] `site.bookingUrl` — your Calendly / Cal.com link (embeds on /contact once it no longer contains "FILL")
- [ ] `site.whatsappUrl` — optional `https://wa.me/...` link (leave `""` to hide)
- [ ] `site.github` — your GitHub profile URL
- [ ] `testimonial.attribution` — client name/clinic if permitted
- [ ] `caseStudies.items[*].loomUrl` — Loom share URLs (placeholder tiles show until filled)
- [ ] Drop `resume.pdf` into `/public` for the resume download button

## Contact form → n8n

The form posts to `/api/contact`. It's a stub until you set the env var:

```
CONTACT_WEBHOOK_URL=https://your-n8n-instance/webhook/...
```

Submissions are forwarded as JSON: `{ name, email, businessType, message, submittedAt }`. Without the env var, submissions are logged to the server console.

## Deploy

Push to GitHub → import in Vercel → done. No environment variables required for the site to work (only `CONTACT_WEBHOOK_URL` when you're ready to receive form submissions).
