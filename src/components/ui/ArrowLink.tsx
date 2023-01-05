import { Link, useLocation } from "react-router-dom";
import arrowRightImg from './../../assets/imgs/arrowRight.svg';
import cn from 'classnames';
import { HashLink } from 'react-router-hash-link';

type Props = {
  to?: string
  children: React.ReactNode
  className?: string
  primary?: boolean
  link?: boolean
  hashLink?: boolean
  navHashLink?: boolean
  isActiveForced?: boolean
}

export const ArrowLink: React.FC<Props> = ({ to, children, className, primary = true, link = false, hashLink = false, navHashLink = false , isActiveForced}) => {
  const { search } = useLocation();
  let isExist = search.replaceAll('%20', ' ').includes(to || 'LOREMLOREMLOREM');

  if (link) {
    return <a
      href={to || ''}
      target="_blank"
      rel="noopener noreferrer"
      className={
        cn(
          "flex items-center gap-x-3 uppercase transition-all w-fit",
          className,
          primary && 'text-primary'
        )
      }
    >
      {children}
      <img src={arrowRightImg} alt='arrow right' />
    </a>
  }

  if (navHashLink) {
    return <HashLink
      to={to || ''}
      className={cn(
        "flex items-center gap-x-3 uppercase transition-all w-fit",
        className,
        (isExist || isActiveForced) && 'text-primary',
        primary && 'text-primary'
      )}
    >
      {children}
      <img src={arrowRightImg} alt='arrow right' />
    </HashLink>
  }

  if (hashLink) {
    return <HashLink
      to={to || ''}
      className={
        cn(
          "flex items-center gap-x-3 uppercase transition-all w-fit",
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
          "flex items-center gap-x-3 uppercase transition-all w-fit",
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
        "flex items-center gap-x-3 uppercase transition-all w-fit",
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