import cn from 'classnames';
import { useSearchParam } from '../../../../hooks/useSearchParam';
import { ArrowLink } from '../../ArrowLink';
import { useSearchParamReplacer } from './../../../../hooks/useSearchParamReplacer';

type Props = {
  isFirst: boolean
  name: string
}

export const Item: React.FC<Props> = ({ isFirst, name }) => {
  let [ currentCategory, carouselPortion ] = useSearchParam(['carouselCategory', 'carouselPortion'])
  const searchParamReplacer = useSearchParamReplacer();

  let isActive = (currentCategory === name) || (isFirst && !currentCategory)
  let searchData = carouselPortion ? [`?carouselCategory=${name}`, 'carouselPortion=1'] : [`?carouselCategory=${name}`];

  return <ArrowLink
    className={cn(`justify-between text-[20px] transition-colors hover:text-primary sm:text-[22px] ginora ${isActive && 'text-primary'}`)}
    to={searchParamReplacer(searchData)}
    primary={false}
  >
    {name}
  </ArrowLink>
};