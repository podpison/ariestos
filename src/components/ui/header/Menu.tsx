import closeIcon from './../../../assets/imgs/ui/header/close.svg';
import { NavLink } from './NavLink';
import logo from '../../../assets/imgs/ui/header/logo.svg';
import spiralAndbluryCircle from '../../../assets/imgs/ui/header/spiralAndbluryCircle.webp';
import cn from 'classnames';
import { Separator } from '../Separator';
import { Spiral } from '../Spiral';

type Props = {
  open: boolean
  onClose: () => void
}

const links = ['program', 'funding', 'jobs', 'team', 'blog', 'contact'];
const socialNetworks = [
  {
    name: 'linkedin',
    href: 'linkedin'
  },
  {
    name: 'reddit',
    href: 'reddit'
  },
  {
    name: 'facebook',
    href: 'facebook'
  },
  {
    name: 'twitter',
    href: 'twitter'
  },
];

export const Menu: React.FC<Props> = ({ open, onClose }) => {
  const Links = links.map((l, index) => {
    return <h2 className='capitalize text-sub-title' key={index}>
      <NavLink to={l}>{l} </NavLink>
    </h2>
  })
  const SocialNetworks = socialNetworks.map((sn, index) => <a className='uppercase text-secondary-title transition-colors hover:text-primary' href={sn.href} key={index}>{sn.name}</a>)

  return <div className={cn("absolute top-0 left-0 w-full bg-shape z-30 transition-all max-h-screen overflow-y-auto overflow-x-hidden md:flex-row", !open ? 'opacity-0 invisible' : 'opacity-100 visible')}>
    <img className='absolute cursor-pointer top-3 right-3 z-20 w-[50px] h-[50px] sm:top-5 sm:right-5 sm:w-[60px] sm:h-[60px] lg:top-10 lg:right-10' onClick={onClose} src={closeIcon} alt='close' />
    <div className='relative grid grid-cols-1 gap-y-5 p-6 md:grid-cols-[40%_1px_1fr] sm:p-12 md:p-18 lg:p-24'>
      <nav className='flex flex-col items-center gap-y-4 md:items-start'>
        {Links}
      </nav>
      <Separator className='h-[1px] w-full left-0 md:top-0 md:left-auto md:h-full md:w-[1px]' />
      <div className='relative flex flex-col items-center'>
        <div className='flex flex-col gap-y-5 sm:gap-y-8 md:gap-y-10 md:w-[350px] lg:gap-y-14'>
          <NavLink className='w-80 mx-auto' to='/'>
            <img className='w-full' src={logo} alt='logo' />
          </NavLink>
          <p className='text-center'>Aries is a AI Reasearch center funding a lot of researches and claiming, showing how AI will change the world. They are showcasing researches and writting regularly about the consequnces happening on AI.</p>
        </div>
        <div className='flex flex-wrap mt-5 gap-x-3 sm:gap-x-5 md:gap-x-7 md:mt-auto lg:mb-[.6rem]'>
          {SocialNetworks}
        </div>
      </div>
      <Spiral className='bottom-0 -right-2' src={spiralAndbluryCircle} alt='spiral and blury circle' />
    </div>
  </div>
};