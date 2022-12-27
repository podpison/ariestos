import { useSearchParams } from 'react-router-dom';

export const useSearchParam = (names: string | string[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  let items = typeof names === 'string' ? [names] : names;
  let currentValues = items.map(n => searchParams.get(n));

  return currentValues
}