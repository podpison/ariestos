import { JobType } from "../../../redux/reducers/static";
import { ArrowLink } from "../ArrowLink";
import { Separator } from "../Separator";

type Props = {
  isLast: boolean
} & JobType

export const Job: React.FC<Props> = ({ id, name, portfolio, keyWords, isLast }) => {
  let formattedKeyWords = keyWords.join(' - ');

  return <ArrowLink className="relative py-7 justify-between group last:pb-0 sm:py-8 md:first:pt-0 md:py-9 lg:py-10" to={`/jobs/${id}`}>
    <span>
      <h6 className="text-sub-title">{portfolio}</h6>
      <h3 className="mt-2.5 transition-colors group-hover:text-primary">{name}</h3>
      <p className="h6rules text-sub-title mt-5">{formattedKeyWords}</p>
      {!isLast && <Separator className="left-0 bottom-0 w-full h-px" />}
    </span>
  </ArrowLink>
};