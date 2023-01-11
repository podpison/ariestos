import { useState } from "react";
import { BlogCategoryType } from "../../../redux/reducers/static";
import { Separator } from "../Separator";
import { Item } from "./Item";
import { Pagination } from './../Pagination';
import cn from 'classnames';

type Props = {
  className?: string
} & BlogCategoryType

const itemsPerPortion = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

export const BlogCategory: React.FC<Props> = ({ className, id, category, items }) => {
  const [itemsPortion, setItemsPortion] = useState(items);

  let Items = itemsPortion.map(i => <Item {...i} categoryId={id} key={i.id} />)

  return <div className={cn('', className)}>
    <Separator className="w-full h-px left-0" />
    <h4 className="text-secondary-title pt-7 sm:pt-10 md:pt-12 lg:pt-14">{category}</h4>
    <div className="grid grid-cols-1 mt-10 gap-y-16 sm:mt-14 md:gap-x-10 md:mt-20 md:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-x-[60px]">
      {Items}
    </div>
    <Pagination
      items={items}
      setItems={setItemsPortion}
      itemsPerPortion={itemsPerPortion}
      currentCategorySearch={`${id}Category`}
      currentPortionSearch={`${id}Portion`}
    />
  </div>
};