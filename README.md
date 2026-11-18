# RadarSeq website

The site uses Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion and React Three Fiber. The public content is maintained in `lib/data.ts`; research metrics are presented as reported study results, and interactive visualisations use labelled synthetic data.

## Local development

```bash
npm ci
npm run dev
```

## Static GitHub Pages deployment

The project is configured for the repository path `/radarseq12`:

```bash
npm run build
```

Next.js exports the static site to `out/`. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys `out/` when changes reach `main` or when manually dispatched. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

No Next.js server or API route is required. The contact form prepares a `mailto:` draft for `info@radarseq.ai`; no form data is submitted automatically.

## Content and research notes

- RadarSeq v1 uses CNN image processing of radar-chart sequences followed by BiLSTM temporal modelling.
- RadarSeq++ processes feature sequences directly using a state-space and attention architecture.
- The reported research studies use different evaluation setups; results are not service guarantees or a controlled like-for-like comparison.
- Demonstration charts are synthetic examples and do not call a live model or backend.
- Research papers and supplied team details should be updated in `lib/data.ts` when verified source material is available.
