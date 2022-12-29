import { useLocation } from 'react-router-dom';

export const useSearchParam = (names: string | string[]) => {
  const { search } = useLocation();

  let items = typeof names === 'string' ? [names] : names;
  let currentValues = items.map(n => search.split('?').slice(1).filter(p => p.includes(n)).join('').split('=')[1]?.replaceAll('%20', ' '));

  return currentValues
}