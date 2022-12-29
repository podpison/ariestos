import { JobType } from "../../../../../redux/reducers/static";
import { Separator } from "../../../../ui/Separator";
import { ArrowLink } from '../../../../ui/ArrowLink';

type Props = {
  isLast: boolean
} & JobType

export const Job: React.FC<Props> = ({ id, name, portfolio, keyWords, isLast }) => {
  let formattedKeyWords = keyWords.join(' - ');

  return <ArrowLink className="relative py-7 justify-between group sm:py-8 md:first:pt-0 md:py-9 lg:py-10" to={`/job/${id}`}>
    <span>
      <h6>{portfolio}</h6>
      <h3 className="mt-2.5 transition-colors group-hover:text-primary">{name}</h3>
      <p className="h6rules mt-5">{formattedKeyWords}</p>
      {!isLast && <Separator className="left-0 bottom-0 w-full h-px" />}
    </span>
  </ArrowLink>
};