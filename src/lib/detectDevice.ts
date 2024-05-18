'use server';

import { headers } from 'next/headers';

import { deviceDetect, getSelectorsByUserAgent } from 'react-device-detect';

export const detectDevice = async () => {
  if (typeof process === 'undefined') {
    throw new Error(
      '[Server method] you are importing a server-only module outside of server',
    );
  }

  const { get } = headers();
  const ua = get('user-agent');

  const device = deviceDetect(ua || '');

  // returns mobile selectors from userAgent string. Especially useful for SSR
  const { isMobile, deviceType } = getSelectorsByUserAgent(ua || '');
  // possible return values:
  // desktop: { isMobile: false, deviceType: 'browser', device: {...} }
  // tablet: { isMobile: true, deviceType: 'tablet', device: {...} }
  // mobile: { isMobile: true, deviceType: 'mobile', device: {...} }
  // device: parses user agent string for current device and gives all available data for it
  return { isMobile, deviceType, device };
};
