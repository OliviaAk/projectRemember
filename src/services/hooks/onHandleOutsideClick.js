import { useEffect } from 'react';

const useOutsideClickHandler = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      event.stopPropagation();
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useOutsideClickHandler;
