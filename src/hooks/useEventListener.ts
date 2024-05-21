import { useEffect, useRef } from 'react';

export const useEventListener = (
  eventType: string,
  callback: (event: Event) => void,
  element: MediaQueryList | null,
) => {
  const callbackRef = useRef(callback);

  // Store the callback function in a ref to avoid unnecessary re-renders.
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Attach the event listener and handle cleanup.
  useEffect(() => {
    if (element == null) return;

    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => {
      if (element) element.removeEventListener(eventType, handler);
    };
  }, [eventType, element]);
};
