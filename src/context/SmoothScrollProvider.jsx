import React, { useCallback, useMemo } from 'react';
import { SmoothScrollContext } from './SmoothScrollContext';
import { ScrollTrigger } from '../lib/gsap';

/**
 * SmoothScrollProvider
 *
 * Implements high-performance native browser scrolling (Apple model):
 * - 100% direct, zero-latency physical connection to trackpads and mouse wheels
 * - Zero artificial drag, inertia delay, or scroll hijacking
 * - GSAP ScrollTrigger synchronized natively with threaded compositor scrolling
 * - Clean programmatic scrollTo and modal locking helpers
 */
export default function SmoothScrollProvider({ children }) {
  const getLenis = useCallback(() => null, []);

  const scrollTo = useCallback((target, options = {}) => {
    if (typeof window === 'undefined') return;
    const top = typeof target === 'number' ? target : 0;
    window.scrollTo({
      top,
      left: 0,
      behavior: options.immediate ? 'instant' : 'auto',
    });
    ScrollTrigger.update();
  }, []);

  const stop = useCallback(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const start = useCallback(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }, []);

  const contextValue = useMemo(() => ({
    getLenis,
    scrollTo,
    stop,
    start,
  }), [getLenis, scrollTo, stop, start]);

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
