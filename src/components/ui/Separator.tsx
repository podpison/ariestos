import separatorImg from './../../assets/imgs/ui/separator/separator.webp';
import cn from 'classnames';

type Props = {
  className: string
  containerClassName?: string
}

export const Separator: React.FC<Props> = ({ className, containerClassName }) => {
  return <div className={cn(containerClassName)}>
    <img className={cn('absolute', className)} src={separatorImg} alt='separator' />
  </div>
};