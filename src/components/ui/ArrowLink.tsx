import { Link } from "react-router-dom";
import arrowRightImg from './../../assets/imgs/arrowRight.svg';
import cn from 'classnames';

type Props = {
  to: string
  children: React.ReactNode
  className?: string
}

export const ArrowLink: React.FC<Props> = ({ to, children, className }) => {
  return <Link className={cn("flex items-center gap-x-3 text-primary uppercase", className)} to={to}>
    {children}
    <img src={arrowRightImg} alt='arrow right' />
  </Link>
};