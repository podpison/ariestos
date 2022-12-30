import { JobType } from "../../../../../redux/reducers/static";
import { Item } from "./Item";

type Props = {

} & JobType['skills']

export const Skills: React.FC<Props> = ({ employeeType, experience, offerSalary, workLevel }) => {
  return <div className="grid grid-cols-2 gap-y-10 px-5 py-10 border border-solid border-secondary-title sm:grid-cols-4">
    <Item separatorClassName='hidden' name='Experience' description={experience} />
    <Item separatorClassName='' name='Work level' description={workLevel} />
    <Item className='sm:pl-[10%]' separatorClassName='max-sm:hidden' name='Employee type' description={employeeType} />
    <Item separatorClassName='' name='Offer salary' description={`$${offerSalary} / month`} />
  </div>
};