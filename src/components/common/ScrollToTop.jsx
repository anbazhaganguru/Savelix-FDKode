import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { recordNavigation } from '../../utils/navigation';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { ScrollTrigger } from '../../lib/gsap';

/**
 * ScrollToTop & Navigation Tracker
 *
 * Automatically scrolls window to top on route change,
 * resets scroll offset immediately,
 * and refreshes GSAP ScrollTrigger measurements.
 */
export default function ScrollToTop() {
  const { pathname, key } = useLocation();
  const isInitialMount = useRef(true);
  const smoothScroll = useSmoothScroll();

  useEffect(() => {
    // Immediate scroll to top
    if (smoothScroll?.scrollTo) {
      smoothScroll.scrollTo(0, { immediate: true });
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    // Refresh ScrollTrigger calculations after DOM layout settles
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      recordNavigation();
    }

    return () => clearTimeout(timer);
  }, [pathname, key, smoothScroll]);

  return null;
}

