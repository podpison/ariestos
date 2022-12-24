import { NavLink as RRDNavLink } from "react-router-dom";
import cn from 'classnames';

type Props = {
  to: string
  className?: string
  children?: React.ReactNode
}

export const NavLink: React.FC<Props> = ({ to, className, children }) => {
  return <RRDNavLink className={cn('ginora', className)} to={to}>
    {children ? children : to}
  </RRDNavLink>
};