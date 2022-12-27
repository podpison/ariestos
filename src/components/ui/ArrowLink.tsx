import { Link } from "react-router-dom";
import arrowRightImg from './../../assets/imgs/arrowRight.svg';
import cn from 'classnames';

type Props = {
  to: string
  children: React.ReactNode
  className?: string
  primary?: boolean
}

export const ArrowLink: React.FC<Props> = ({ to, children, className, primary = true }) => {
  return <Link
    className={
      cn(
        "flex items-center gap-x-3 uppercase transition-all",
        className,
        primary && 'text-primary'
      )
    }
    to={to}
  >
    {children}
    <img src={arrowRightImg} alt='arrow right' />
  </Link>
};