import { JobType } from "../../../../redux/reducers/static";
import { Item } from "./Item";

type Props = {
  jobs: JobType[]
}

export const Categories: React.FC<Props> = ({ jobs }) => {
  let uniqueCategories = jobs.filter((value, index, self) => index === self.findIndex((i) => i.category === value.category)).map(i => i.category);
  let JobCategories = uniqueCategories.map((c, index) => <Item name={c} key={index} />);

  return <div className="max-md:px-6 md:col-[2] md:mt-4">
    <h3 className="smallh3">Job categories</h3>
    <div className='flex flex-col gap-y-5 mt-[30px]'>{JobCategories}</div>
  </div>
};