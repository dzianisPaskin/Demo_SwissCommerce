import { useEffect, useRef } from 'react';

export const useEventListener = <T extends Event>(
  eventType: string,
  handler: (event: T) => void,
  element: Window | EventTarget | null = typeof window !== 'undefined'
    ? window
    : null,
) => {
  const callbackRef = useRef(handler);

  useEffect(() => {
    callbackRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: T) => callbackRef.current(e);
    element.addEventListener(eventType, handler as EventListener);

    return () =>
      element.removeEventListener(eventType, handler as EventListener);
  }, [eventType, element]);
};
