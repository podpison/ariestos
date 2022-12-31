import { Link } from "react-router-dom";
import arrowRightImg from './../../assets/imgs/arrowRight.svg';
import cn from 'classnames';
import { HashLink } from 'react-router-hash-link';

type Props = {
  to?: string
  children: React.ReactNode
  className?: string
  primary?: boolean
  hashLink?: boolean
}

export const ArrowLink: React.FC<Props> = ({ to, children, className, primary = true, hashLink = false }) => {

  if (hashLink) {
    return <HashLink
      to={to}
      className={
        cn(
          "flex items-center gap-x-3 uppercase transition-all",
          className,
          primary && 'text-primary'
        )
      }
    >
      {children}
      <img src={arrowRightImg} alt='arrow right' />
    </HashLink>
  }

  if (!to) { // why? I don't want to create each time an independent element again with the same styles just because it's not a link
    return <p
      className={
        cn(
          "flex items-center gap-x-3 uppercase transition-all",
          className,
          primary && 'text-primary'
        )
      }
    >
      {children}
      <img src={arrowRightImg} alt='arrow right' />
    </p>
  }

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