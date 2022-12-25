import separatorImg from './../../assets/imgs/ui/separator/separator.webp';
import cn from 'classnames';

type Props = {
  className: string
}

export const Separator: React.FC<Props> = ({ className }) => {
  return <div>
    <img className={cn('absolute', className)} src={separatorImg} alt='separator' />
  </div>
};