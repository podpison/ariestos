import { StartupType } from "../../../../redux/reducers/static";
import { Item } from "./Item";
import { useSearchParam } from './../../../../hooks/useSearchParam';
import { ArrowLink } from './../../ArrowLink';
import { useSearchParamReplacer } from './../../../../hooks/useSearchParamReplacer';
import cn from 'classnames';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from './../../Skeleton';

type Props = {
  startups: StartupType[]
  category: string | undefined
  currentStartup: StartupType | undefined
}

const itemsPerPortion = 3

const disableArrowClasses = 'pointer-events-none opacity-60';

export const Items: React.FC<Props> = ({ startups, category, currentStartup }) => {
  let [startupPortion] = useSearchParam(['startupPortion']);
  let currentPortion = startupPortion;

  const searchParamReplacer = useSearchParamReplacer();
  const [items, setItems] = useState(startups);
  const navigate = useNavigate();

  let categoryItems = items.filter(s => s.category === (category || currentStartup?.category));

  let numberCurrentPortion = Number(currentPortion) || 1;
  let itemsPortion = categoryItems.slice((numberCurrentPortion - 1) * itemsPerPortion, numberCurrentPortion * itemsPerPortion)
  let CategoryItems = itemsPortion.map((c, index) => <Item {...c} key={index} />)
  let maxPortion = Math.ceil(categoryItems.length / itemsPerPortion);
  let isMaxPortion = numberCurrentPortion === maxPortion;

  useEffect(() => {
    if (items.length === 0) return;

    if (category && items.length === 0) {
      let replacedSearch = searchParamReplacer([`startupCategory=${startups[0].category}`, `startupPortion=1`]);
      console.log(replacedSearch)
      navigate(replacedSearch);
    } else if (numberCurrentPortion > maxPortion || (currentPortion !== undefined && isNaN(Number(currentPortion)))) {
      let replacedSearch = searchParamReplacer(`startupPortion=1`);
      navigate(replacedSearch);
    } else {
      setItems(itemsPortion);
    }
  }, [currentPortion, category, startups]);

  return <div>
    <div className="grid grid-cols-1 gap-10 mt-14 sm:gap-12 md:gap-x-16 md:grid-cols-2 lg:gap-x-[90px] lg:grid-cols-3">
      <Skeleton count={3} items={CategoryItems} className='h-[400px]' />
    </div>
    <div className='flex items-center justify-end gap-[30px] mt-7 sm:mt-8 md:mt-9 lg:mt-10'>
      <ArrowLink
        className={cn('flex-row-reverse [&>img]:rotate-180 [&>img]:scale-x-150', ((numberCurrentPortion || 1) === 1) && disableArrowClasses)}
        to={searchParamReplacer(`?startupPortion=${(numberCurrentPortion || 1) - 1}`)}
      >
        <></>
      </ArrowLink>
      <ArrowLink
        className={cn('[&>img]:scale-x-150', isMaxPortion && disableArrowClasses)}
        to={searchParamReplacer(`?startupPortion=${(numberCurrentPortion || 0) + 1}`)}
      >
        <></>
      </ArrowLink>
    </div>
  </div>
};