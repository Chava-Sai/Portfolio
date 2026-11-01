# Srinivasa Sai Chava — Portfolio

Personal portfolio site. Live at **https://chava-sai.github.io/Portfolio/**

M.S. Artificial Intelligence at Boston University — multilingual NLP,
weakly supervised computer vision, and retrieval-augmented systems.

## Credits

The design system and component architecture of this site are based on
[shubham-hadawle/shubhams-website-portfolio](https://github.com/shubham-hadawle/shubhams-website-portfolio)
by **Shubham Hadawle**, used with his permission. All content, copy, data and
imagery are my own.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · framer-motion ·
lucide-react. Deployed as a static export to GitHub Pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000/Portfolio
```

## Deploying

```bash
npm run deploy     # builds a static export to out/ and pushes it to gh-pages
```

`basePath` is `/Portfolio` so the export matches the GitHub Pages URL. Plain
`<img>` tags and `next/image` with `unoptimized` do not apply `basePath`
automatically, so image sources go through `assetPath()` in `lib/utils.ts`.

## Content

All copy, figures and project data live in [`lib/data.ts`](lib/data.ts).
Editing that file is enough to update the whole site.
