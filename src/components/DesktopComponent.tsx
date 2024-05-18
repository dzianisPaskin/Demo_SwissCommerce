import { ReactNode } from 'react';

import Header from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import MarginWidthWrapper from './MarginWidthWrapper';
import PageWrapper from './PageWrapper';
import SideNav from './SideNav';

const DesktopComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1">
        <MarginWidthWrapper>
          <Header />
          <HeaderMobile />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
};

export default DesktopComponent;
