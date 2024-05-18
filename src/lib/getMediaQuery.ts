'use server';

import { detectDevice } from './detectDevice';

export const getMediaQuery = async () => {
  const { isMobile, deviceType } = await detectDevice();

  if (isMobile && deviceType === 'mobile') {
    return '(min-width: 320px) and (max-width: 768px)';
  } else if (isMobile && deviceType === 'tablet') {
    return '(min-width: 769px) and (max-width: 1200px)';
  } else if (!isMobile && deviceType === 'browser') {
    return '(min-width: 1201px)';
  }

  // Default case if device type is not recognized
  return '';
};
