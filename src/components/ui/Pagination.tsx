import cn from 'classnames';
import { ArrowLink } from './ArrowLink';
import { useSearchParamReplacer } from './../../hooks/useSearchParamReplacer';
import { useSearchParam } from '../../hooks/useSearchParam';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

type Props = {
  items: any[]
  setItems: React.Dispatch<React.SetStateAction<any[]>>
  itemsPerPortion: number
  currentCategorySearch: string
  currentPortionSearch: string
  arrowRightSign?: string
  arrowLeftSign?: string
  className?: string
}

export const Pagination: React.FC<Props> = ({ items, setItems, itemsPerPortion = 3, arrowRightSign = 'Next', arrowLeftSign = 'Previous', currentCategorySearch, currentPortionSearch, className }) => {
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
      console.log(replacedSearch)
      navigate(replacedSearch);
    } else {
      setItems(itemsPortion);
    }
  }, [currentPortion, currentCategory, items, search]);

  return <div className='flex items-center justify-between mt-7 sm:mt-8 md:mt-9 lg:mt-10'>
    <div className='flex gap-x-5'>
      {(numberCurrentPortion || 1) !== 1 && <ArrowLink className='flex-row-reverse [&>img]:rotate-180' to={searchParamReplacer(`?${currentPortionSearch}=${(numberCurrentPortion || 1) - 1}`)}>{arrowLeftSign}</ArrowLink>}
      {!isMaxPortion && <ArrowLink to={searchParamReplacer(`?${currentPortionSearch}=${(numberCurrentPortion || 0) + 1}`)}>{arrowRightSign}</ArrowLink>}
    </div>
    {!(isMaxPortion && numberCurrentPortion == 1) && <p>Page: {numberCurrentPortion}</p>}
  </div>
};