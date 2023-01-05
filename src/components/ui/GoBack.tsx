import { ArrowLink } from "./ArrowLink";

type Props = {
  to: string
}

export const GoBack: React.FC<Props> = ({ to }) => {
  return <ArrowLink className='flex-row-reverse justify-end w-fit mb-8 [&>img]:rotate-180' to={to}>Go back</ArrowLink>
};