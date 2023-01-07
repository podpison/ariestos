import cn from 'classnames';
import { ArrowLink } from './ArrowLink';
import { useSearchParamReplacer } from './../../hooks/useSearchParamReplacer';

type Props = {
  items: any[]
  currentCategory: string
  currentPortion: string
  className?: string
}

export const Pagination: React.FC<Props> = ({ items, currentCategory, currentPortion, className }) => {
  // let categoryJobs = items.filter(i => (i.category === (currentCategory || items[0].category)) && i.id !== currentJob?.id);
  // let numberCurrentPortion = Number(currentPortion) || 1;
  // let jobsPortion = categoryJobs.slice((numberCurrentPortion - 1) * itemsPerPortion, numberCurrentPortion * itemsPerPortion)
  // let isMaxPortion = numberCurrentPortion === Math.ceil(categoryJobs.length / itemsPerPortion);

  // return <div className={cn('flex items-center justify-between', className)}>
  //   <div>
  //     {!isMaxPortion && <ArrowLink to={searchParamReplacer(`?jobPortion=${(numberCurrentPortion || 0) + 1}`)}>Next jobs</ArrowLink>}
  //     {(numberCurrentPortion || 1) !== 1 && <ArrowLink className='flex-row-reverse [&>img]:rotate-180' to={useSearchParamReplacer(`?jobPortion=${(numberCurrentPortion || 1) - 1}`)}>Previous jobs</ArrowLink>}
  //   </div>
  //   {!(isMaxPortion && numberCurrentPortion == 1) && <p>Page: {numberCurrentPortion}</p>}
  // </div>
  return <></>
};