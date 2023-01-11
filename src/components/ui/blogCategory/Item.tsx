import { Link } from "react-router-dom";
import { BlogItemType } from "../../../redux/reducers/static";

type Props = {
  categoryId: number
} & BlogItemType

export const Item: React.FC<Props> = ({ categoryId, id, preview, date, name }) => {
  let dateToUse = new Date(date);
  let dateToShow = `${dateToUse.getDay()}.${dateToUse.getMonth()}.${dateToUse.getFullYear()}`;

  return <Link className="grid grid-cols-1 grid-rows-[max-content_max-content_max-content] h-full" to={`/blog/${categoryId}/${id}`}>
    <img className="w-full h-[200px] object-cover sm:h-[300px]" src={preview} alt='preview' />
    <h6 className='mt-3 line-clamp-1'>{dateToShow}</h6>
    <h4 className="text-secondary-title mt-4 line-clamp-4">{name}</h4>
  </Link>
};