import { useSelector } from 'react-redux'
import { selectStartupItems } from '../../../../redux/selectors';
import { Investments } from "./Investments";
import { Item } from './Item';
import spiralImg from './../../../../assets/imgs/pages/main/startups/spiral.webp';
import { Spiral } from '../../../ui/Spiral';
import { Skeleton } from '../../../ui/Skeleton';

export const Startups: React.FC = () => {
  let items = useSelector(selectStartupItems)

  let rtlItem = items.find(i => i.rtl) || items[1];
  let Items = [items[0], rtlItem].map((i, index) => <Item {...i} key={index} />);

  if (items.length === 0) {
    Items = [];
  };
  
  return <section>
    <Investments />
    <div className='relative flex flex-col gap-y-20 mt-14 sm:gap-y-18 sm:mt-16 md:gap-y-16 md:mt-18 lg:gap-y-14 lg:mt-[90px]'>
      <Spiral className='w-[120px] top-[86%] -translate-y-1/2 -z-10 -left-5 sm:top-[90%] md:top-[65%] mw:left-0' src={spiralImg} />
      <Skeleton items={Items} count={2} className='h-[400px] w-full ml-0' />
    </div>
  </section>
};