import { TermsAndConditionItemType } from "../../../redux/reducers/static";
import { ArrowLink } from './../../ui/ArrowLink';

type Props = {
  items: TermsAndConditionItemType[]
}

export const Categories: React.FC<Props> = ({ items }) => {
  let Items = items.map((i, index) => {
    return <ArrowLink className='justify-between' to={`?category=${i.section}`} primary={false} navHashLink key={index}>{i.section}</ArrowLink>
  })
  
  return <div className="flex flex-col gap-y-5 sm:gap-8 md:gap-y-10 md:bg-shape md:py-12 md:px-5 lg:py-20 lg:px-14 lg:gap-14">
    {Items}
  </div>
};