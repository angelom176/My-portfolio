'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const links = document.querySelectorAll('a[href^="#"]');

    function handleAnchorClick(event) {
      event.preventDefault();

      const href = event.currentTarget.getAttribute('href');

      if (!href || href === '#') return;

      lenis.scrollTo(href, {
        duration: 1.2,
        offset: -80,
      });

      window.history.pushState(null, '', href);
    }

    links.forEach((link) => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleAnchorClick);
      });

      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}