# Adriano Zagar — Portfolio

A minimal, high-contrast engineering portfolio built with Next.js (App Router), Tailwind CSS, and Lucide icons. Deployed as a static export to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

## Customize

- **`data/portfolio.ts`** — all site content: bio, contact links, experience, projects, skills, certifications, and the two project detail pages (calculator, rocket).
- **`components/ProjectDetail.tsx`** — shared layout used by both project detail pages, so they stay visually identical.
- **`public/resume.pdf`** — your resume file.
- **`public/projects/calculator/`** and **`public/projects/rocket/`** — images used on each project's detail page.

## Deploy

Auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.
