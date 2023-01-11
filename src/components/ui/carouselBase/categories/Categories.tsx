import { JobType } from "../../../../redux/reducers/static";
import { Skeleton } from "../../Skeleton";
import { Item } from "./Item";

type Props = {
  items: JobType[]
  categoriesHeading: string
}

export const Categories: React.FC<Props> = ({ items, categoriesHeading }) => {
  let uniqueCategories = items.filter((value, index, self) => index === self.findIndex((i) => i.category === value.category)).map(i => i.category);
  let ItemCategories = uniqueCategories.map((c, index) => <Item name={c} isFirst={index === 0} key={index} />);

  if (!items.length) {
    return <Skeleton count={5} items={[]} isContainer className='h-[30px] w-[150px] ml-0 mt-5' />
  }

  return <div className="max-md:px-6 md:col-[2] md:mt-4">
    <h3 className="smallh3">{categoriesHeading}</h3>
    <div className='flex flex-col gap-y-5 mt-[30px]'>{ItemCategories}</div>
  </div>
};