<p align="center">
  <img src="public/logo.png" alt="MarkMind Logo" width="80" />
</p>

<h1 align="center">MarkMind - Landing Page</h1>

<p align="center">
  Marketing website for <a href="https://chromewebstore.google.com/detail/markmind/bdobgdkpeffdbonfpokgkbncgnbnjnoo">MarkMind</a>, an AI-powered Chrome extension that organizes your bookmarks into folders.
</p>

**Live site:** [www.markmind.xyz](https://www.markmind.xyz/)

**Chrome extension:** [Install MarkMind - Free](https://chromewebstore.google.com/detail/markmind/bdobgdkpeffdbonfpokgkbncgnbnjnoo)

**Extension source code:** [github.com/migsilva89/MarkMind](https://github.com/migsilva89/MarkMind)

---

## About the Project

This is the v2 landing page for MarkMind, built in collaboration with the [MarkMind team](https://github.com/migsilva89). MarkMind replaces Chrome's default bookmark button with AI that reads the page, checks your folder structure, and suggests the right place - you review, you approve, done.

The landing page showcases the extension's core features through real product GIFs, animated sections, and a responsive dark/light theme design.

## Features

- Responsive design optimized for mobile, tablet, and desktop
- Dark/light theme with system preference detection
- Animated bento grid with real product GIF demos (auto-switches per theme)
- Scroll-driven reveal cards section (CSS sticky + passive scroll)
- Infinite marquee with hover speed control
- Social proof section with testimonials
- Blog system powered by Contentful CMS
- SEO-optimized with Open Graph, Twitter Cards, and JSON-LD structured data
- Cookie consent and Google Analytics integration

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Theming | next-themes |
| Icons | Lucide React |
| CMS | Contentful |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Max-Mendes91/markmind-v2-landing.git
cd markmind-v2-landing

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Contentful and GA credentials

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, metadata, providers
  page.tsx            # Page composition (imports sections, no logic)
  globals.css         # Design tokens, keyframes, utilities
  blog/               # Blog pages (Contentful-powered)
components/
  sections/           # One file per page section
  ui/                 # Shared primitives (corners, badges, themed-gif)
  navbar.tsx          # Main navigation
  footer.tsx          # Site footer
hooks/                # Custom React hooks
lib/                  # Tokens, utilities, CMS helpers
types/                # Shared TypeScript interfaces
public/
  gifs/               # Optimized feature demo GIFs (light + dark)
```

## Collaboration

Built by [Max Mendes](https://github.com/Max-Mendes91) in collaboration with the MarkMind team ([Miguel Silva](https://github.com/migsilva89)).

## License

This project is part of the MarkMind ecosystem. All rights reserved by the MarkMind team.
