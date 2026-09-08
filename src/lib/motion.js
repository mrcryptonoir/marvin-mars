/**
 * Whether this visitor should be served the background clips at all.
 *
 * Reduced-motion is a stated preference. Save-Data is an explicit request to
 * stop spending the visitor's money, and 2g/slow-2g means the clips would
 * arrive after they had already scrolled past. In all three the poster is the
 * whole experience, and it is a good one.
 */
export function clipsWanted() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;

  const c = navigator.connection;
  if (c) {
    if (c.saveData) return false;
    if (c.effectiveType === 'slow-2g' || c.effectiveType === '2g') return false;
  }
  return true;
}
