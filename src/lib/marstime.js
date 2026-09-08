/**
 * Real Mars time, not decoration.
 *
 * Mars Sol Date and Coordinated Mars Time follow the Mars24 algorithm
 * (Allison & McEwen 2000, NASA GISS). A sol is 24h 39m 35.244s, so MTC drifts
 * about 40 minutes further from the visitor's own clock every day they come
 * back. That drift is the whole point of putting it on screen.
 */

const MS_PER_DAY = 86400000;
const UNIX_EPOCH_JD = 2440587.5;

/** TT runs ahead of UTC by the leap seconds plus 32.184s. 37 leap seconds as of 2026. */
const TT_MINUS_UTC_S = 69.184;

export function marsSolDate(date = new Date()) {
  const jdUt = date.getTime() / MS_PER_DAY + UNIX_EPOCH_JD;
  const jdTt = jdUt + TT_MINUS_UTC_S / 86400;
  const deltaJ2000 = jdTt - 2451545.0;
  return (deltaJ2000 - 4.5) / 1.027491252 + 44796.0 - 0.00096;
}

/** Coordinated Mars Time as {h, m, s}, the fractional part of the sol. */
export function coordinatedMarsTime(date = new Date()) {
  const hours = ((marsSolDate(date) % 1) + 1) % 1 * 24;
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor((((hours - h) * 60) - m) * 60);
  return { h, m, s };
}

export const formatMtc = (t) =>
  [t.h, t.m, t.s].map((n) => String(n).padStart(2, '0')).join(':');

/** Sols elapsed since the contract went out. Ties the hero to the mission log. */
export function solsSince(isoDate, date = new Date()) {
  return Math.max(0, Math.floor(marsSolDate(date) - marsSolDate(new Date(isoDate))));
}

/**
 * One-way light delay to Mars, from circular-orbit heliocentric longitudes.
 * Real orbits are elliptical and inclined, so this lands within a few percent
 * of the true figure. It is labelled as approximate on screen for that reason.
 */
const AU_KM = 149597870.7;
const C_KM_S = 299792.458;

export function lightDelaySeconds(date = new Date()) {
  const d = (date.getTime() / MS_PER_DAY + UNIX_EPOCH_JD) - 2451545.0;

  // Mean longitudes at J2000 plus mean motion, in degrees.
  const earth = (100.46435 + 0.9856076686 * d) * (Math.PI / 180);
  const mars = (355.45332 + 0.5240207766 * d) * (Math.PI / 180);

  const rE = 1.0;
  const rM = 1.523679;
  const sep = mars - earth;
  const distAu = Math.sqrt(rE * rE + rM * rM - 2 * rE * rM * Math.cos(sep));

  return (distAu * AU_KM) / C_KM_S;
}

export function formatDelay(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}m ${String(s).padStart(2, '0')}s`;
}
