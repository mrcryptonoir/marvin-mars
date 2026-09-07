# MARVIN

Marketing site for **$MARVIN**, a community meme token on **Robinhood Chain**
(Robinhood's Arbitrum Orbit layer 2: ETH gas, ~100 ms blocks, settling to
Ethereum with blob data availability).

## Stack

- Vite + React 19
- `lenis` for smooth scrolling
- Scroll effects run on one shared rAF loop in `src/lib/scroll.js` rather than
  an animation library. That covers the hero parallax, the type-wall drift and
  the legion rail for about 200 bytes.
- Hand-written CSS, no framework
- Deployed on Vercel

## Art direction

Black void with hard flips to bone. Statements are set in condensed black caps
(Archivo at `wdth 62 / wght 900`) at the largest size the viewport allows, cut
by an Instrument Serif italic for the one word carrying the joke. JetBrains Mono
handles the furniture: reticles, hazcam labels, sol counters. Robin Neon
`#CCFF00` is the only accent and is spent sparingly.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Imagery

Every frame in `public/art/` ships as a pair: `<name>.webp` at 1600w and
`<name>@sm.webp` at 860w, wired through `src/components/ui/Img.jsx` with a
`srcSet`. Adding a frame means dropping both files in and referencing the base
name. The generator scripts and prompts live one level up in `site-art/`.

## Before launch

`src/data/site.js` holds a placeholder contract address and placeholder social
links. Both need real values.

## Disclaimer

MARVIN is an independent community token. It is not affiliated with, endorsed
by, or issued by Robinhood Markets, SpaceX, Tesla, or any person referenced on
the site. Nothing here is financial advice.
