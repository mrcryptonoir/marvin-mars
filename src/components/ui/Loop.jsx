import { useEffect, useRef, useState } from 'react';
import { clipsWanted } from '../../lib/motion';

/**
 * A looping background clip that behaves itself: it holds the still frame until
 * the element is close to the viewport, only then fetches the video, and drops
 * the source again once it scrolls well away. Visitors who asked for less
 * motion, and any browser that refuses the autoplay, keep the poster and never
 * pay for the file.
 *
 * Two margins. The near one arms, plays and pauses. The far one releases the
 * source so the decoder goes with it; the file stays in HTTP cache, so coming
 * back costs a decode and no download. Without the far margin every clip the
 * visitor ever scrolled past keeps a decoder resident, which on this page meant
 * 27 of them alive at the bottom of the scroll.
 */
/* Arm well before the clip is on screen so the decode has landed by the time it
   is, and release far later than that so a scroll that reverses does not thrash
   mount and decode. Narrow margins cost more in dropped frames than they save
   in memory. */
const NEAR = '75% 0px';
const FAR = '350% 0px';

export default function Loop({ name, poster, alt = '', ratio, className = '', objectPosition }) {
  const wrap = useRef(null);
  const video = useRef(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  const posterSrc = `${import.meta.env.BASE_URL}art/${poster || name}.webp`;
  const clipSrc = `${import.meta.env.BASE_URL}video/${name}.mp4`;

  useEffect(() => {
    if (!clipsWanted()) return;
    const el = wrap.current;
    if (!el) return;

    // An observer's first callback fires for every element it watches, whether
    // or not it intersects. Arming on that callback unconditionally is why the
    // page used to fetch every clip on it before the visitor scrolled at all.
    const near = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setVisible(false);
          return;
        }
        setArmed(true);
        setVisible(true);
      },
      { rootMargin: NEAR }
    );

    const far = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) return;
        setArmed(false);
        setVisible(false);
      },
      { rootMargin: FAR }
    );

    near.observe(el);
    far.observe(el);
    return () => {
      near.disconnect();
      far.disconnect();
    };
  }, []);

  /* The video mounts a render after arming, so play and pause live here. */
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (visible) {
      const p = v.play();
      if (p) p.catch(() => {});
    } else {
      v.pause();
    }
  }, [visible, armed]);

  return (
    <div ref={wrap} className={`loop ${className}`} style={{ aspectRatio: ratio }}>
      <img className="loop__poster" src={posterSrc} alt={alt} loading="lazy" decoding="async" style={{ objectPosition }} />
      {armed && (
        <video
          ref={video}
          className="loop__video"
          src={clipSrc}
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
