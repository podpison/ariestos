import { ArrowLink } from './ArrowLink';
import { useSearchParamReplacer } from './../../hooks/useSearchParamReplacer';
import { usePagination } from '../../hooks/usePagination';

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

export const Pagination: React.FC<Props> = ({ items, setItems, itemsPerPortion = 3, arrowRightSign = 'Next', arrowLeftSign = 'Previous', currentCategorySearch, currentPortionSearch }) => {
  const searchParamReplacer = useSearchParamReplacer();
  let { currentPortion, isMaxPortion } = usePagination(items, setItems, currentCategorySearch, currentPortionSearch, itemsPerPortion);

  return <div className='flex items-center justify-between mt-7 sm:mt-8 md:mt-9 lg:mt-10'>
    <div className='flex gap-x-5'>
      {(currentPortion || 1) !== 1 && <ArrowLink className='flex-row-reverse [&>img]:rotate-180' to={searchParamReplacer(`?${currentPortionSearch}=${(currentPortion || 1) - 1}`)}>{arrowLeftSign}</ArrowLink>}
      {!isMaxPortion && <ArrowLink to={searchParamReplacer(`?${currentPortionSearch}=${(currentPortion || 0) + 1}`)}>{arrowRightSign}</ArrowLink>}
    </div>
    {!(isMaxPortion && currentPortion === 1) && <p>Page: {currentPortion}</p>}
  </div>
};