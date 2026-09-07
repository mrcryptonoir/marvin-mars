/**
 * Every generated frame ships as <name>.webp (wide) + <name>@sm.webp (mobile).
 * If a frame is missing the wrapper keeps its aspect box so layout never jumps.
 */
export default function Img({ name, alt = '', ratio, className = '', eager = false, style }) {
  const src = `${import.meta.env.BASE_URL}art/${name}.webp`;
  const small = `${import.meta.env.BASE_URL}art/${name}@sm.webp`;

  return (
    <img
      src={src}
      srcSet={`${small} 860w, ${src} 1920w`}
      sizes="(max-width: 720px) 100vw, 90vw"
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      fetchPriority={eager ? 'high' : 'auto'}
      style={{ aspectRatio: ratio, ...style }}
      onError={(e) => {
        e.currentTarget.style.visibility = 'hidden';
      }}
    />
  );
}
