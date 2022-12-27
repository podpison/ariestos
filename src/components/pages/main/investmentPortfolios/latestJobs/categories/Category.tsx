import { ArrowLink } from './../../../../../ui/ArrowLink';
import cn from 'classnames';
import { useSearchParam } from '../../../../../../hooks/useSearchParam';

type Props = {
  name: string
}

export const Category: React.FC<Props> = ({ name }) => {
  let [ currentCategory ] = useSearchParam('jobCategory')

  return <ArrowLink
    className={cn(`justify-between text-[20px] sm:text-[22px] ginora ${currentCategory === name && 'text-primary'}`)}
    to={`?jobCategory=${name}`}
    primary={false}
  >
    {name}
  </ArrowLink>
};