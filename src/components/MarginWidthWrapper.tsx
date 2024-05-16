'use client';

import { ReactNode, useEffect, useState } from 'react';

export default function MarginWidthWrapper({
  isMobile: mobile,
  children,
}: {
  isMobile: boolean;
  children: ReactNode;
}) {
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
      className={`flex flex-col ${
        isMobile ? '' : 'ml-60'
      } sm:border-r sm:border-zinc-700 min-h-screen`}
    >
      {children}
    </div>
  );
}
