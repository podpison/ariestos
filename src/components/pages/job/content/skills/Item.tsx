import { Separator } from "../../../../ui/Separator"
import cn from 'classnames';

type Props = {
  name: string
  description: string
  separatorClassName: string
  className?: string
}

export const Item: React.FC<Props> = ({ description, name, separatorClassName, className }) => {
  return <div className={cn("relative flex justify-center py-5 odd:pr-[10%] even:pl-[10%]", className)}>
    <div>
      <Separator className={cn("separatorClassName w-px h-full left-0 top-0", separatorClassName)} />
      <h5>{name}</h5>
      <p className="h5rules uppercase mt-2.5">{description}</p>
    </div>
  </div>
};