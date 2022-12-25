import { useStaticItems } from '../../../../hooks/useStaticItems';
import { useSelector } from 'react-redux'
import { selectCustomerItems } from '../../../../redux/selectors';
import { Investments } from "./Investments";
import { Item } from './Item';
import spiral from './../../../../assets/imgs/pages/main/startups/spiral.webp';

export const Startups: React.FC = () => {
  useStaticItems('startups');
  let items = useSelector(selectCustomerItems)
  let Items = [items[1], items[0]].map((i, index) => <Item {...i} key={index} />)

  return <section>
    <Investments />
    <div className='relative flex flex-col gap-y-20 mt-14 sm:gap-y-18 sm:mt-16 md:gap-y-16 md:mt-18 lg:gap-y-14 lg:mt-[90px]'>
      <img className='absolute w-[120px]' src={spiral} alt='spiral' />
      {Items}
    </div>
  </section>
};