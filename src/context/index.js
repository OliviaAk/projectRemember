import { useContext } from 'react';
import { viewportContext } from '../App';

export const useViewport = () => {
  const { isMobile, isTablet, isSmallMobile } = useContext(viewportContext);
  return { isMobile, isTablet, isSmallMobile };
};
