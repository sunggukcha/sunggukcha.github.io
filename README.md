# Sungguk Cha — Online CV

An editorial research portfolio built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Content

Research, experience, talks, and CV entries live in `src/data/*.yaml`. Page templates are in `src/pages`, and the shared visual system is in `src/styles/global.css`.

## Validation

```bash
npm run check
npm run build
```

The production build is written to `docs/`. GitHub Pages serves `master/docs`, so run `npm run build` and commit the updated build output when publishing content changes.
