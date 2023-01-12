import { useEffect } from 'react';
import { useSearchParam } from './useSearchParam';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSearchParamReplacer } from './useSearchParamReplacer';

export const usePagination = (items: any[], setItems: React.Dispatch<React.SetStateAction<any[]>>, currentCategorySearch: string, currentPortionSearch: string, itemsPerPortion: number) => {
  let [currentCategory, currentPortion] = useSearchParam([currentCategorySearch, currentPortionSearch]);
  const { search } = useLocation();
  const searchParamReplacer = useSearchParamReplacer();
  const navigate = useNavigate();
  let { id } = useParams();

  let currentItem = items.find(i => i.id === Number(id));
  let categoryItems = items.filter(i => (i.category === (currentCategory || items[0].category)) && i.id !== currentItem?.id);
  let numberCurrentPortion = Number(currentPortion) || 1;
  let itemsPortion = categoryItems.slice((numberCurrentPortion - 1) * itemsPerPortion, numberCurrentPortion * itemsPerPortion);
  let maxPortion = Math.ceil(categoryItems.length / itemsPerPortion) || 1;
  let isMaxPortion = numberCurrentPortion === maxPortion;
  
  useEffect(() => {
    if (items.length === 0) return;

    if (currentCategory && categoryItems.length === 0) {
      let replacedSearch = searchParamReplacer([`${currentCategorySearch}=${items[0].category}`, `${currentPortionSearch}=1`]);
      navigate(replacedSearch);
    } else if (numberCurrentPortion > maxPortion || (currentPortion !== undefined && isNaN(Number(currentPortion)))) {
      let replacedSearch = searchParamReplacer(`${currentPortionSearch}=1`);
      navigate(replacedSearch);
    } else {
      setItems(itemsPortion);
    }
  }, [currentPortion, currentCategory, items, search]);

  return {
    currentPortion: numberCurrentPortion,
    isMaxPortion
  }
};