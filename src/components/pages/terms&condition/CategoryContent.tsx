import { TermsAndConditionItemType } from "../../../redux/reducers/static";
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
    <h2 className='pb-14 md:pb-7'>{currentItem?.section}</h2>
    <Separator className='w-full h-px' />
    <Texts className="mt-5 md:mt-14 lg:mt-20" items={currentItem?.content} />
  </div>
};