import { act, renderHook } from '@testing-library/react';

import { useEventListener } from './useEventListener';

describe('useEventListener', () => {
  let mockAddEventListener: jest.SpyInstance;
  let mockRemoveEventListener: jest.SpyInstance;

  beforeEach(() => {
    mockAddEventListener = jest.spyOn(window, 'addEventListener');
    mockRemoveEventListener = jest.spyOn(window, 'removeEventListener');
  });

  afterEach(() => {
    mockAddEventListener.mockRestore();
    mockRemoveEventListener.mockRestore();
  });

  it('attaches a listener to the provided element', () => {
    const eventType = 'change';
    const handler = jest.fn();
    const element = window;

    renderHook(() => useEventListener(eventType, handler, element));

    expect(mockAddEventListener).toHaveBeenCalledWith(
      eventType,
      expect.any(Function),
    );
  });

  it('removes the listener on unmount', () => {
    const eventType = 'change';
    const handler = jest.fn();
    const element = window;

    const { unmount } = renderHook(() =>
      useEventListener(eventType, handler, element),
    );

    unmount();

    expect(mockRemoveEventListener).toHaveBeenCalledWith(
      eventType,
      expect.any(Function),
    );
  });

  it('calls the handler function when the event occurs', () => {
    const eventType = 'change';
    const handler = jest.fn();
    const element = window;

    renderHook(() => useEventListener(eventType, handler, element));

    act(() => {
      window.dispatchEvent(new Event(eventType));
    });

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('handles null element', () => {
    const eventType = 'change';
    const handler = jest.fn();

    renderHook(() => useEventListener(eventType, handler, null));

    expect(mockAddEventListener).not.toHaveBeenCalled();
  });
});
