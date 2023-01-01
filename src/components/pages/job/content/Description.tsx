import { JobType } from "../../../../redux/reducers/static";
import { Texts } from "../../../ui/texts/Texts";

type Props = {

} & JobType['description']

export const Description: React.FC<Props> = ({ jobDescription, overview, responsibilities, skills }) => {
  let items = [
    {
      name: 'Overview',
      items: overview
    },
    {
      name: 'Job description',
      items: jobDescription
    },
    {
      name: 'Responsibilities',
      items: responsibilities
    },
    {
      name: 'Skills',
      items: skills
    },
  ]
  
  return <Texts className="mt-24 max-w-[785px] sm:mt-24 md:mt-[120]" itemsClassName="last:gap-y-1" items={items} />
};