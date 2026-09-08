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

## The hero

The hero is a camera deck: a stage showing one feed, a rail of the rest, and an
on-screen display over the top. `src/data/cameras.js` is the manifest; a camera
with no `clip` shows its still and the OSD says `STILL` rather than `REC`.

The clock is real. `src/lib/marstime.js` implements Mars Sol Date and
Coordinated Mars Time from the Mars24 algorithm (Allison & McEwen, NASA GISS),
so MTC drifts about 40 minutes further from the visitor's clock every day. The
light delay is computed from circular-orbit longitudes, which lands within a
few percent, and is labelled approximate on screen for that reason.

Number keys 1-0 jump to a camera, arrows walk past the dead one. Only one video
element exists for the whole deck; switching changes its source.

## Motion

`public/video/` holds twenty-seven six-second loops, generated from the matching
still with Grok and re-encoded muted, without audio or cover art, at CRF 30.
`src/components/ui/Loop.jsx` paints the still first and only fetches the clip
once the element is near the viewport, then pauses it again on the way out, so
a visitor who never scrolls that far never pays for the file. Reduced-motion
visitors keep the still.

## Imagery

Every frame in `public/art/` ships as a pair: `<name>.webp` at 1600w and
`<name>@sm.webp` at 860w, wired through `src/components/ui/Img.jsx` with a
`srcSet`. Adding a frame means dropping both files in and referencing the base
name. The generator scripts and prompts live one level up in `site-art/`, alongside
`encode.sh`, which turns raw Grok clips into the files served here.

## Before launch

`src/data/site.js` holds a placeholder contract address and placeholder social
links. Both need real values.

## Disclaimer

MARVIN is an independent community token. It is not affiliated with, endorsed
by, or issued by Robinhood Markets, SpaceX, Tesla, or any person referenced on
the site. Nothing here is financial advice.
