import cn from 'classnames';
import { useSearchParam } from '../../../../hooks/useSearchParam';
import { ArrowLink } from '../../ArrowLink';
import { useSearchParamReplacer } from './../../../../hooks/useSearchParamReplacer';

type Props = {
  name: string
}

export const Item: React.FC<Props> = ({ name }) => {
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