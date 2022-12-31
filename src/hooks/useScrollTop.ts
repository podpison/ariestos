import { useEffect } from 'react';

export const useScrollTop = () => {
  useEffect(() => {
    document.querySelector('body')?.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, []);
}