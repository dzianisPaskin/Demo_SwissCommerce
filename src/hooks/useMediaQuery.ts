import { useEffect, useState } from 'react';

import { mediaQueryMap } from '@/lib/constants/mediaQueryMap';

import { useEventListener } from './useEventListener';

export const useMediaQuery = (mediaQuery: keyof typeof mediaQueryMap) => {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(
    null,
  );

  // 1. Create a MediaQueryList based on the provided media query.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Don't run on the server if window is undefined on the server

      const query = mediaQueryMap[mediaQuery];

      if (!query) {
        console.error(`Invalid instruction: ${mediaQuery}`);
        return;
      }
      const list = window.matchMedia(query);
      setMediaQueryList(list);
      setIsMatch(list.matches);
    }
  }, [mediaQuery]);

  // 2. Listen for changes in the media query.
  useEventListener<MediaQueryListEvent>(
    'change',
    (event) => {
      setIsMatch(event.matches);
    },
    mediaQueryList,
  );

  return isMatch; // Return whether the media query matches the current state.
};
