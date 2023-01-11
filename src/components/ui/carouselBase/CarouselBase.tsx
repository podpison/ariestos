import cn from 'classnames';
import { Item } from './Item';
import { JobType } from '../../../redux/reducers/static';
import { Categories } from './categories/Categories';
import { Pagination } from '../Pagination';
import { useState } from 'react';
import { Skeleton } from '../Skeleton';

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
  const [itemsPortion, setItemsPortion] = useState(items);

  let Items = itemsPortion.map((j, index) => <Item {...j} isLast={itemsPortion.length - 1 === index} key={index} />);

  return <section className={cn('', mt && "mt-24 sm:mt-32 md:mt-40 lg:mt-[200px]")}>
    <h1 className='smallh1'>{heading}</h1>
    <div className="grid grid-cols-1 mt-14 sm:mt-20 md:mt-28 md:grid-cols-[1fr_max-content] md:gap-x-[11%] lg:mt-36">
      <Categories items={items} categoriesHeading={categoriesHeading} />
      <div className='max-md:mt-12 md:row-[1]'>
        <Skeleton items={Items} count={1} />
        <Pagination
          items={items}
          setItems={setItemsPortion}
          itemsPerPortion={itemsPerPortion}
          currentCategorySearch='carouselCategory'
          currentPortionSearch='carouselPortion'
          arrowLeftSign={arrowLeftSign}
          arrowRightSign={arrowRightSign}
        />
      </div>
    </div>
  </section>
};