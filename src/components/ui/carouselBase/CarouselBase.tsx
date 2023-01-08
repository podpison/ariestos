import { useSearchParam } from '../../../hooks/useSearchParam';
import { useSearchParamReplacer } from './../../../hooks/useSearchParamReplacer';
import { ArrowLink } from './../ArrowLink';
import cn from 'classnames';
import { Item } from './Item';
import { JobType } from '../../../redux/reducers/static';
import { useParams } from 'react-router-dom';
import { Categories } from './categories/Categories';

type Props = {
  heading: string
  items: JobType[]
  arrowLeftSign: string
  arrowRightSign: string
  categoriesHeading: string
  itemsPerPortion?: number
  mt?: boolean
}

export const CarouselBase: React.FC<Props> = ({ heading, items, arrowLeftSign, arrowRightSign, categoriesHeading, mt = true, itemsPerPortion = 3 }) => {
  let [currentCategory, currentPortion] = useSearchParam(['carouselCategory', 'carouselPortion']);
  const searchParamReplacer = useSearchParamReplacer();
  let { id } = useParams();

  let currentItem = items.find(i => i.id === Number(id));
  let categoryItems = items.filter(i => (i.category === (currentCategory || items[0].category)) && i.id !== currentItem?.id);
  let numberCurrentPortion = Number(currentPortion) || 1;
  let itemsPortion = categoryItems.slice((numberCurrentPortion - 1) * itemsPerPortion, numberCurrentPortion * itemsPerPortion)
  let isMaxPortion = numberCurrentPortion === Math.ceil(categoryItems.length / itemsPerPortion);

  let Items = itemsPortion.map((j, index) => <Item {...j} isLast={itemsPortion.length - 1 === index} key={index} />);

  return <section className={cn('', mt && "mt-24 sm:mt-32 md:mt-40 lg:mt-[200px]")}>
    <h1 className='smallh1'>{heading}</h1>
    <div className="grid grid-cols-1 mt-14 sm:mt-20 md:mt-28 md:grid-cols-[1fr_max-content] md:gap-x-[11%] lg:mt-36">
      <Categories items={items} categoriesHeading={categoriesHeading} />
      <div className='max-md:mt-12  md:row-[1]'>
        <div>{Items}</div>
        <div className='flex items-center justify-between mt-7 sm:mt-8 md:mt-9 lg:mt-10'>
          <div>
            {!isMaxPortion && <ArrowLink to={searchParamReplacer(`?carouselPortion=${(numberCurrentPortion || 0) + 1}`)}>{arrowRightSign}</ArrowLink>}
            {(numberCurrentPortion || 1) !== 1 && <ArrowLink className='flex-row-reverse [&>img]:rotate-180' to={searchParamReplacer(`?carouselPortion=${(numberCurrentPortion || 1) - 1}`)}>{arrowLeftSign}</ArrowLink>}
          </div>
          {!(isMaxPortion && numberCurrentPortion == 1) && <p>Page: {numberCurrentPortion}</p>}
        </div>
      </div>
    </div>
  </section>
};