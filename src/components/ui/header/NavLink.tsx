import { NavLink as RRDNavLink } from "react-router-dom";
import cn from 'classnames';

type Props = {
  to: string
  className?: string
  children?: React.ReactNode
}

export const NavLink: React.FC<Props> = ({ to, className, children }) => {
  return <RRDNavLink
    className={({ isActive }) => cn('ginora transition-colors hover:text-primary', isActive ? className?.split(' ').filter(r => !r.includes('text')).join(' ') : className, isActive && 'text-primary')}
    to={to}
  >
    {children ? children : to}
  </RRDNavLink>
};