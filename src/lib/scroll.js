import { useEffect, useRef } from 'react';

/**
 * A single rAF loop that hands every subscriber its own 0..1 pass-through
 * progress and lets it write a transform directly.
 *
 * This replaces `motion`'s useScroll/useTransform, which cost ~70 kB gzipped
 * for four parallax effects. One shared listener also beats one observer per
 * effect: the work is proportional to the number of moving elements, not to
 * how many of them happen to be on screen.
 */
const subs = new Set();
let frame = null;

function tick() {
  frame = null;
  const vh = window.innerHeight;
  for (const sub of subs) {
    const r = sub.el.getBoundingClientRect();
    const span = r.height + vh;
    if (span <= 0) continue;
    // 0 when the element's top edge first touches the bottom of the viewport,
    // 1 when its bottom edge has cleared the top.
    const p = Math.min(1, Math.max(0, (vh - r.top) / span));
    sub.apply(p, r, vh);
  }
}

function schedule() {
  if (frame === null) frame = requestAnimationFrame(tick);
}

function subscribe(sub) {
  const first = subs.size === 0;
  subs.add(sub);
  if (first) {
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
  }
  schedule();
  return () => {
    subs.delete(sub);
    if (!subs.size) {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    }
  };
}

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Runs `apply(progress, rect, viewportHeight)` for the returned ref's element
 * on every scroll frame. Skipped entirely when the visitor asked for less
 * motion, so the element keeps whatever the stylesheet gave it.
 */
export function useScrollPass(apply, enabled = true) {
  const ref = useRef(null);
  const applyRef = useRef(apply);

  // Kept current after every render so the subscription never captures a stale
  // closure and never has to resubscribe.
  useEffect(() => {
    applyRef.current = apply;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || prefersReducedMotion()) return;
    return subscribe({ el, apply: (p, r, vh) => applyRef.current(p, r, vh) });
  }, [enabled]);

  return ref;
}

/** Maps a 0..1 progress onto a numeric range. */
export const lerp = (p, from, to) => from + (to - from) * p;
