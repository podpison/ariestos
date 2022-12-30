import menuIcon from '../../../assets/imgs/ui/header/menu.svg';
import logo from '../../../assets/imgs/ui/header/logo.svg';
import { NavLink } from './NavLink';
import { useState } from 'react';
import { Menu } from './Menu';

const links = ['program', 'funding', 'jobs']

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuStatus = () => setIsMenuOpen(prev => !prev);

  const Links = links.map((l, index) => <NavLink className='uppercase text-primary-title max-md:hidden' to={l} key={index} />)

  return <header className='h-[104px] md:h-[112px]'>
    <div
      className='container max-w-[1160px] z-40
        fixed top-0 flex justify-between items-center bg-secondary-dark py-9 px-5
        md:grid md:grid-cols-[max-content_max-content_1fr_max-content_max-content] md:gap-8
      '
    >
      {Links.slice(0, 2)}
      <NavLink className='max-w-[100px] sm:max-w-[110px] md:max-w-[140px] md:mx-auto' to='/'>
        <img className='w-full' src={logo} alt='logo' />
      </NavLink>
      {Links.slice(2)}
      <div className='flex items-center gap-2 cursor-pointer' onClick={handleMenuStatus}>
        <p className='ginora text-primary-title uppercase transition-colors hover:text-primary max-md:hidden'>Menu</p>
        <img className='w-5 md:w-3' src={menuIcon} alt='menu' />
      </div>
      <Menu open={isMenuOpen} onClose={handleMenuStatus} />
    </div>
  </header>
};