import { BlogCategoryType } from "../../../../../redux/reducers/static";
import { Separator } from "../../../../ui/Separator";
import { Item } from "./Item";

type Props = {

} & BlogCategoryType

export const Category: React.FC<Props> = ({ category, items }) => {
  let Items = items.map(i => <Item {...i} key={i.id} />)

  return <div>
    <Separator className="w-full h-px" />
    <h4>{category}</h4>
    <div className="grid grid-cols-1 md:gap-x-10 lg:gap-x-[60px] md:grid-cols-3">
      {Items}
    </div>
  </div>
};