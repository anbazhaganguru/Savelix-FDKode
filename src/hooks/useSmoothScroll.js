import { useContext } from 'react';
import { SmoothScrollContext } from '../context/SmoothScrollContext';

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
