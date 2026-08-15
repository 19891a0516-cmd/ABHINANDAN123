# RadarSeq — Premium Redesign

A ground-up visual redesign of the RadarSeq marketing site on **Next.js 15 (App Router)** +
**TypeScript** + **Tailwind CSS**, with a live **React Three Fiber** hero scene, **Framer
Motion** micro-interactions, **GSAP** scroll animations wired through **Lenis** smooth
scroll, animated **CountUp** stats, and tilt-on-hover glass cards.

Every section, statistic, publication, team member, project, endpoint, and contact detail
from the original site is preserved exactly (see `lib/data.ts`) — only the UI has been
rebuilt. All "RadarSeq++" branding has been replaced with **RadarSeq**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the repo directly in the Vercel dashboard — zero config needed, this is a
standard Next.js 15 App Router project.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, Lenis smooth-scroll provider
  page.tsx           Assembles every section in order
  globals.css        Design tokens, glass/gradient utilities
components/
  layout/            Navbar, Footer, Logo, SmoothScroll (Lenis + GSAP wiring)
  ui/                 Reveal (scroll-in), TiltCard (hover tilt), CountUpStat
  three/              R3F Canvas + the 3 procedural hero objects
    objects/
      RadarOrb.tsx        glass orb, animated rings, radar sweep
      NeuralCrystal.tsx   refractive icosahedron crystal
      NetworkOrb.tsx      wireframe sphere + particle network
  sections/           One file per content section (Hero, Overview, Innovations, …)
lib/
  data.ts             All copy, stats, publications, team, nav links — single source of truth
```

## The hero 3D scene

The three hero objects are **procedural geometry**, not downloaded GLB assets — this keeps
the bundle small, avoids any third-party licensing questions, and loads instantly with no
network request. They render simultaneously behind the hero card, rotate continuously,
float gently (via drei's `<Float>`), and the whole scene has a subtle parallax that follows
the cursor. On `prefers-reduced-motion`, the automatic camera drift and float loops still
render but skip large motion — the canvas itself respects the same reduced-motion query the
rest of the site does.

If you'd rather swap in real GLB models later, drop them in `public/models/` and load them
in `components/three/objects/` with `useGLTF` from `@react-three/drei`.

## Notes

- This sandbox had no network access, so dependencies could not be installed or the build
  verified end-to-end here. The code is written to current, compatible versions of every
  package in `package.json` — run `npm install` locally or let Vercel do it on deploy.
- Tailwind content colors, spacing, and typography scale match the original screenshots
  (Manrope display type, Inter body, IBM Plex Mono for labels/code).
