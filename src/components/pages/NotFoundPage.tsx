import { useScrollTop } from './../../hooks/useScrollTop';
import spiralImg from './../../assets/imgs/pages/notFound/spiral.webp';
import sign404 from './../../assets/imgs/pages/notFound/404.webp';
import { ArrowLink } from '../ui/ArrowLink';
import { Spiral } from '../ui/Spiral';

export const NotFoundPage: React.FC = () => {
  useScrollTop();

  return <main>
    <section className='relative pt-28 pb-20 sm:pt-32 sm:pb-24 md:pb-28 lg:py-36 mw:px-5'>
      <div className='absolute -left-5 top-0 w-[calc(100%_+_40px)] h-full bg-shape -z-20 mw:w-full mw:left-0' />
      <h1>oops..!<br />page not found.</h1>
      <p className='smallh4 mt-5 sm:mt-7 md:mt-10'>The requested URL was not found.</p>
      <ArrowLink className='flex-row-reverse w-fit justify-end mt-10 [&>img]:rotate-180 sm:mt-12 md:mt-14' to='/'>Back to home</ArrowLink>
      <img className='absolute right-[3%] top-1/2 -translate-y-1/2 h-[90%] -z-10' src={sign404} alt='404 error' />
      <Spiral className='max-w-[170px] h-full left-[5%] top-0' src={spiralImg} />
    </section>
  </main>
};