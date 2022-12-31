import { TermsAndConditionItemType } from "../../../redux/reducers/static";

type Props = {
  items: TermsAndConditionItemType[]
}

export const Categories: React.FC<Props> = ({ items }) => {
  let Items = items.map((i, index) => <p key={index}>{i.section}</p>)
  
  return <div>
    {Items}
  </div>
};