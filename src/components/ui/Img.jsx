/**
 * Every generated frame ships as <name>.webp (1600w) + <name>@sm.webp (860w).
 * `ratio` reserves the box so nothing shifts while the file is in flight.
 */
export default function Img({ name, alt = '', ratio, className = '', sizes = '(max-width: 760px) 100vw, 50vw' }) {
  const base = `${import.meta.env.BASE_URL}art/${name}`;

  return (
    <img
      src={`${base}.webp`}
      srcSet={`${base}@sm.webp 860w, ${base}.webp 1600w`}
      sizes={sizes}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      style={ratio ? { aspectRatio: ratio } : undefined}
    />
  );
}
