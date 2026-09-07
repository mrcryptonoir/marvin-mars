import { useEffect, useRef, useState } from 'react';

/**
 * One shared scroll sweep instead of an observer per element.
 *
 * IntersectionObserver drops entries when the page is scrolled fast enough that
 * an element crosses the viewport between two delivery ticks — an anchor jump,
 * a flung trackpad, a restored scroll position. Anything it missed stayed at
 * opacity 0 forever, which hides real content. A geometry check on every scroll
 * frame cannot miss: an element that has passed the trigger line is revealed
 * whether we saw it cross or not.
 */
const pending = new Set();
let frame = null;
let listening = false;

function sweep() {
  frame = null;
  const line = window.innerHeight * 0.92;
  for (const item of pending) {
    if (item.el.getBoundingClientRect().top < line) {
      item.show();
      pending.delete(item);
    }
  }
  if (!pending.size) stopListening();
}

function schedule() {
  if (frame === null) frame = requestAnimationFrame(sweep);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener('scroll', schedule);
  window.removeEventListener('resize', schedule);
}

export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const item = { el, show: () => setSeen(true) };
    pending.add(item);
    startListening();
    schedule();

    return () => {
      pending.delete(item);
      if (!pending.size) stopListening();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
