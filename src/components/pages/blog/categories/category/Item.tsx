import { BlogItemType } from "../../../../../redux/reducers/static";

type Props = {

} & BlogItemType

export const Item: React.FC<Props> = ({ preview, date, name }) => {
  let dateToUse = new Date(date);
  let dateToShow = `${dateToUse.getDay()} ${dateToUse.getMonth()} ${dateToUse.getFullYear()}`;

  return <div>
    <img src={preview} alt='preview' />
    <h4 className="mt-7">{name}</h4>
    <h6 className='mt-6'>{dateToShow}</h6>
  </div>
};