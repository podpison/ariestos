import { StartupType } from '../../../redux/reducers/static';
import { useSearchParam } from './../../../hooks/useSearchParam';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  startups: StartupType[]
  category: string | undefined
}

export const Categories: React.FC<Props> = ({ startups, category }) => {
  let uniqueCategories = startups.filter((value, index, self) => index === self.findIndex((i) => i.category === value.category)).map(i => i.category);

  let Categories = uniqueCategories.map((c, index) => {
    return <Link
      to={`?category=${c}`}
      key={index}
    >
      <h5 className={cn('primary-hover', (c === category || (!category && index === 0)) ? 'text-primary' : 'text-secondary-title')}>
        {c}
      </h5>
    </Link>
  });

  return <div className='flex flex-wrap gap-[30px] mt-[60px] sm:mt-20 md:mt-28 lg:mt-36'>
    {Categories}
  </div>
};