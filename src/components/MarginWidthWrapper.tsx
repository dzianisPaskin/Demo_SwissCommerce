'use client';

import { ReactNode } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

export const MarginWidthWrapper = ({ children }: { children: ReactNode }) => {
  const mdScreen = useMediaQuery('md');

  return (
    <div
      className={`flex flex-col ${
        mdScreen ? 'ml-0' : 'ml-60'
      }  sm:border-r sm:border-zinc-700 min-h-screen`}
    >
      {children}
    </div>
  );
};
