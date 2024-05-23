import { mediaQueryMap } from '@/lib/constants/mediaQueryMap';
import { act, renderHook } from '@testing-library/react';

import { useMediaQuery } from './useMediaQuery';

describe('useMediaQuery', () => {
  const mediaQueryList = {
    matches: false,
    media: '',
    onchange: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
  const mockWindow = (isMatched: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => {
        mediaQueryList.media = mediaQueryMap[query];
        mediaQueryList.matches = isMatched;
        return mediaQueryList;
      }),
    });
  };

  it('should return true when the media query matches', async () => {
    mockWindow(true);

    const { result } = renderHook(() => useMediaQuery('sm'));

    await act(async () => {
      expect(result.current).toBe(true);
    });
  });

  it('should return false when the media query does not match', async () => {
    mockWindow(false);

    const { result } = renderHook(() => useMediaQuery('md'));

    await act(async () => {
      expect(result.current).toBe(false);
    });
  });

  it('should log an error when the media query is invalid', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});

    renderHook(() => useMediaQuery('invalidQuery'));

    expect(consoleSpy).toHaveBeenCalledWith(
      'Invalid instruction: invalidQuery',
    );

    consoleSpy.mockRestore();
  });
});
