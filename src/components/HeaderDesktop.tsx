'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/useScroll';
import { cn } from '@/lib/utils';

const Header = ({ isMobile: mobile }: { isMobile: boolean }) => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  const [isMobile, setIsMobile] = useState(mobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className={`flex flex-row space-x-3 items-center justify-center ${
              isMobile ? '' : 'hidden'
            }`}
          >
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl flex">Logo</span>
          </Link>
        </div>

        <div className={`${isMobile ? 'hidden' : 'block'}`}>
          <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
            <span className="font-semibold text-sm">HQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
