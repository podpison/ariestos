import { Link } from 'react-router-dom';
import cn from 'classnames';
import { StartupType } from '../../../../redux/reducers/static';

type Props = {
  itemCategory: string
  currentCategory: string | undefined
  currentStartup: StartupType | undefined
}

export const Item: React.FC<Props> = ({ itemCategory, currentCategory, currentStartup }) => {
  return <Link to={`?category=${itemCategory}`}>
    <h5 className={cn('primary-hover', (itemCategory === currentCategory || (!currentCategory && (currentStartup?.category === itemCategory))) ? 'text-primary' : 'text-secondary-title')}>
      {itemCategory}
    </h5>
  </Link>
};