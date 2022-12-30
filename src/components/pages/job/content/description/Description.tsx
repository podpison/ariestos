import { JobType } from "../../../../../redux/reducers/static";
import { Item } from "./Item";

type Props = {

} & JobType['description']

export const Description: React.FC<Props> = ({ jobDescription, overview, responsibilities, skills }) => {
  return <section className="flex flex-col gap-y-14 mt-24 max-w-[785px] sm:mt-24 md:mt-[120]">
    <Item name='Overview' items={overview} />
    <Item name='Job description' items={jobDescription} />
    <Item name='Responsibilities' items={responsibilities} />
    <Item className='gap-y-1' name='Skills' items={skills} />
  </section>
};