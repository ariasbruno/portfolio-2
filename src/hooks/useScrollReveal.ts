import { useEffect, useRef } from 'react';

type RevealType = 'fade-up' | 'fade-up-lg' | 'fade-left' | 'fade-right' | 'fade-in' | 'fade-scale';

interface UseScrollRevealOptions {
  type?: RevealType;
  delay?: number;        // ms
  threshold?: number;    // 0–1
  stagger?: boolean;     // use data-reveal-stagger instead
  once?: boolean;        // only trigger once (default true)
}

/**
 * Returns a ref to attach to the element that should animate when visible.
 * The element must also have the appropriate CSS class applied (see index.css).
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>({
  type = 'fade-up',
  delay = 0,
  threshold = 0.15,
  stagger = false,
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (stagger) {
      el.setAttribute('data-reveal-stagger', '');
    } else {
      el.setAttribute('data-reveal', type);
    }

    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [type, delay, threshold, stagger, once]);

  return ref;
}
