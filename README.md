# MARVIN — Four Hundred Meters on Mars

Marketing site for **$MARVIN**, a community meme token on **Robinhood Chain**
(Robinhood's Arbitrum Orbit layer 2, ETH gas, ~100 ms blocks, settling to
Ethereum with blob data availability).

## Stack

- Vite + React 19
- `motion` for scroll-linked parallax, `lenis` for smooth scrolling
- Hand-written CSS — no framework, no design system to fight
- Deployed on Vercel

## Art direction

Black void with hard flips to bone. Editorial serif (Instrument Serif) at
planetary scale for the chapter voice; Anton for the type walls that carry
media inside the letter gaps; JetBrains Mono for the telemetry furniture —
reticles, hazcam labels, sol counters. Robin Neon `#CCFF00` is the only accent
colour and is spent sparingly.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Imagery

Every frame in `public/art/` is generated and ships as a pair:
`<name>.webp` at 1920w and `<name>@sm.webp` at 860w, wired up through
`src/components/ui/Img.jsx` with a `srcSet`. Adding a frame means dropping both
files in and referencing the base name.

## Disclaimer

MARVIN is an independent community token. It is not affiliated with, endorsed
by, or issued by Robinhood Markets, SpaceX, Tesla, or any individual referenced
on the site. Nothing here is financial advice.
