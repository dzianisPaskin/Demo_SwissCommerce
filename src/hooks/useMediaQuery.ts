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
    const query = mediaQueryMap[mediaQuery];

    if (!query) {
      console.error(`Invalid instruction: ${mediaQuery}`);
      return;
    }
    const list = window.matchMedia(query);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  // 2. Listen for changes in the media query.
  useEventListener(
    'change',
    (event: Event) => {
      if (event instanceof MediaQueryListEvent) {
        setIsMatch(event.matches); // Update match status when the query changes.
      }
    },
    mediaQueryList,
  );

  return isMatch; // Return whether the media query matches the current state.
};
