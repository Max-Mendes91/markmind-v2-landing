# SEO Rules — MarkMind v2 Landing

> Adapted from live-portfolio SEO skill. Product: MarkMind browser extension landing page.

---

## Page Identity

| Field | Value |
|---|---|
| Product | MarkMind |
| Type | Browser extension (Chrome / Firefox) |
| Primary keyword | "browser extension for reading" / "idea capture extension" |
| Target audience | Knowledge workers, researchers, founders, students |
| URL | https://markmind.app (or current domain) |

---

## Title Formula

```
[Primary Keyword] — [Brand] | [Trust Signal]
```

Examples:
```
MarkMind — Capture Ideas While You Browse | Free Browser Extension
MarkMind — Highlight, Annotate & Save from Any Webpage
```

Rules:
- Primary keyword **must be first** or within first 3 words
- **Under 60 characters** (Google truncates at ~60)
- Brand name always included
- No keyword stuffing — one primary keyword per page

---

## Meta Description Formula

```
[Keyword in first words]. [Core value prop]. [CTA]. [Trust signal].
```

Example:
```
Browser extension for instant idea capture. Highlight any webpage, add AI annotations,
and save to your knowledge base — in one click. Free to install. 400+ active users.
```

Rules:
- **Under 160 characters**
- Include the primary keyword in the first 10 words
- Always include a call to action ("Install free", "Get it now")
- End with a trust signal (user count, "free", version number)

---

## Heading Hierarchy

```
H1 → One per page (Hero headline — contains primary keyword)
H2 → Section headings (Features, How It Works, What Users Say)
H3 → Card titles, feature names, testimonial labels
```

**Never skip levels.** H1 → H3 without H2 is forbidden.

Current H1 candidate: `"Capture every idea. While you browse."` (in HeroSection)
— must contain at least one keyword variant.

---

## Open Graph & Twitter Card

Required files:
- `public/og-image.png` — **1200×630px**, dark background, MarkMind logo + tagline

Required in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title:       "MarkMind — Capture Ideas While You Browse",
  description: "Browser extension for instant idea capture. Highlight, annotate, and save from any webpage — in one click. Free to install.",
  keywords:    ["browser extension", "highlight text", "idea capture", "reading tool", "knowledge base", "annotation"],
  openGraph: {
    title:       "MarkMind — Capture Ideas While You Browse",
    description: "Zero-friction idea capture for every webpage you read.",
    url:         "https://markmind.app",
    siteName:    "MarkMind",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MarkMind browser extension" }],
    type: "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "MarkMind — Capture Ideas While You Browse",
    description: "Zero-friction idea capture for every webpage you read.",
    images:      ["/og-image.png"],
  },
}
```

---

## Structured Data (JSON-LD)

Add to `app/layout.tsx` or a `<Script>` component:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MarkMind",
  "applicationCategory": "BrowserApplication",
  "operatingSystem": "Chrome, Firefox",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Browser extension for instant idea capture from any webpage.",
  "url": "https://markmind.app"
}
```

---

## Keyword Rotation (avoid stuffing)

Primary synonyms to rotate:
- browser extension / Chrome extension / web extension
- idea capture / knowledge capture / thought capture
- highlight / annotate / bookmark / save
- reading workflow / reading tool / reading assistant
- knowledge base / second brain / personal knowledge management

---

## Checklist Before Launch

- [ ] `metadata` exported from `app/layout.tsx`
- [ ] One H1 on page containing primary keyword
- [ ] `og-image.png` exists at `public/og-image.png` (1200×630)
- [ ] `robots.txt` in `public/`
- [ ] `sitemap.xml` generated (Next.js `app/sitemap.ts`)
- [ ] No broken links (navbar CTA, footer links)
- [ ] Page title visible in browser tab
- [ ] Canonical URL set
