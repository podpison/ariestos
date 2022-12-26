import { useStaticItems } from '../../../../hooks/useStaticItems';
import { useSelector } from 'react-redux'
import { selectCustomerItems } from '../../../../redux/selectors';
import { Investments } from "./Investments";
import { Item } from './Item';
import spiralImg from './../../../../assets/imgs/pages/main/startups/spiral.webp';
import { Spiral } from '../../../ui/Spiral';

export const Startups: React.FC = () => {
  useStaticItems('startups');
  let items = useSelector(selectCustomerItems)
  let Items = [items[1], items[0]].map((i, index) => <Item {...i} key={index} />)

  return <section>
    <Investments />
    <div className='relative flex flex-col gap-y-20 mt-14 sm:gap-y-18 sm:mt-16 md:gap-y-16 md:mt-18 lg:gap-y-14 lg:mt-[90px]'>
      <Spiral className='w-[120px] top-[86%] -translate-y-1/2 -z-10 -left-5 sm:top-[90%] md:top-[65%] mw:left-0' src={spiralImg} />
      {Items}
    </div>
  </section>
};