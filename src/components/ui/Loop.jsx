import { useEffect, useRef, useState } from 'react';

/**
 * A looping background clip that behaves itself: it holds the still frame until
 * the element is close to the viewport, only then fetches the video, and pauses
 * again once it scrolls away. Visitors who asked for less motion, and any
 * browser that refuses the autoplay, keep the poster and never pay for the file.
 */
export default function Loop({ name, poster, alt = '', ratio, className = '', objectPosition }) {
  const wrap = useRef(null);
  const video = useRef(null);
  const [armed, setArmed] = useState(false);

  const posterSrc = `${import.meta.env.BASE_URL}art/${poster || name}.webp`;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = wrap.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setArmed(true);
        const v = video.current;
        if (!v) return;
        if (entry.isIntersecting) {
          const p = v.play();
          if (p) p.catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: '25% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className={`loop ${className}`} style={{ aspectRatio: ratio }}>
      <img className="loop__poster" src={posterSrc} alt={alt} loading="lazy" decoding="async" style={{ objectPosition }} />
      {armed && (
        <video
          ref={video}
          className="loop__video"
          src={`${import.meta.env.BASE_URL}video/${name}.mp4`}
          poster={posterSrc}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          style={{ objectPosition }}
          onPlaying={(e) => e.currentTarget.classList.add('is-live')}
        />
      )}
    </div>
  );
}
