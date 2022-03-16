import { useEffect } from 'react';

export const useCallbackOnClickOutside = (id: string, callback: Function) => {
  useEffect(() => {
    const element = document.getElementById(id);

    const handleClickOutside = (event: MouseEvent) => {
      if (!element?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [callback, id]);
};
