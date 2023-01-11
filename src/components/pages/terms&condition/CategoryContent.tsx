import { TermsAndConditionItemType } from "../../../redux/reducers/static";
import { Skeleton } from "../../ui/Skeleton";
import { Texts } from "../../ui/texts/Texts";
import { useSearchParam } from './../../../hooks/useSearchParam';
import { Separator } from './../../ui/Separator';

type Props = {
  items: TermsAndConditionItemType[]
}

export const CategoryContent: React.FC<Props> = ({ items }) => {
  let [currentCategory] = useSearchParam('category');

  let currentItem = items.find(c => c.section === currentCategory) || items[0];

  return <div className='relative max-md:mt-[100px] md:my-10 lg:my-[70px]'>
    {!currentItem ? <Skeleton items={[]} count={1} className='h-[100px] mb-5' /> : <h2 className='pb-14 md:pb-7'>{currentItem?.section}</h2>}
    <Separator className='w-full h-px' />
    {!currentItem ? <Skeleton items={[]} count={3} className='h-[300px] mt-5 first:mt-10' isContainer /> : <Texts className="mt-5 md:mt-14 lg:mt-20" items={currentItem?.content} />}
  </div>
};