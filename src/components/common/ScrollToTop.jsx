import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { recordNavigation } from '../../utils/navigation';

/**
 * ScrollToTop & Navigation Tracker
 *
 * Automatically scrolls window to top on route change,
 * and records internal client-side navigation transitions.
 */
export default function ScrollToTop() {
  const { pathname, key } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      recordNavigation();
    }
  }, [pathname, key]);

  return null;
}

