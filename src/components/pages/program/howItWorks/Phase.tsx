import { Separator } from "../../../ui/Separator";

type Props = {
  heading: string
  description: string
}

export const Phase: React.FC<Props> = ({ description, heading }) => {
  return <div className="max-w-[335px] sm:relative">
    <h4 className="text-[20px] text-secondary-title md:text-[22px]">{heading}</h4>
    <Separator className="w-full h-px left-0" containerClassName="mt-5" />
    <h3 className="text-[36px] md:text-[40px] pt-5">{description}</h3>
  </div>
};