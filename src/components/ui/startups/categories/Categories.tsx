import { StartupType } from '../../../../redux/reducers/static';
import { Skeleton } from '../../Skeleton';
import { Item } from './Item';

type Props = {
  startups: StartupType[]
  category: string | undefined
  currentStartup: StartupType | undefined
}

export const Categories: React.FC<Props> = ({ startups, category, currentStartup }) => {
  let uniqueCategories = startups.filter((value, index, self) => index === self.findIndex((i) => i.category === value.category)).map(i => i.category);

  let Categories = uniqueCategories.map((c, index) => <Item currentCategory={category} currentStartup={currentStartup} itemCategory={c} key={index} />);
  
  return <div className='flex flex-wrap gap-[30px] mt-[60px] sm:mt-20 md:mt-28 lg:mt-36'>
    <Skeleton count={5} items={Categories} className='h-[50px] w-[150px]' />
  </div>
};