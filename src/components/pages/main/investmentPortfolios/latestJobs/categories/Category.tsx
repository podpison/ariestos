import { ArrowLink } from './../../../../../ui/ArrowLink';
import cn from 'classnames';
import { useSearchParam } from '../../../../../../hooks/useSearchParam';
import { useSearchParamReplacer } from '../../../../../../hooks/useSearchParamReplacer';

type Props = {
  name: string
}

export const Category: React.FC<Props> = ({ name }) => {
  let [ currentCategory ] = useSearchParam('jobCategory')
  const searchParamReplacer = useSearchParamReplacer();

  return <ArrowLink
    className={cn(`justify-between text-[20px] transition-colors hover:text-primary sm:text-[22px] ginora ${currentCategory === name && 'text-primary'}`)}
    to={searchParamReplacer(`?jobCategory=${name}`)}
    primary={false}
  >
    {name}
  </ArrowLink>
};