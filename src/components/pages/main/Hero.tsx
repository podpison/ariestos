import hugeSpiralWithBluryCircles from '../../../assets/imgs/pages/main/hero/hugeSpiralWithBluryCircles.webp';
import spiralImg from '../../../assets/imgs/pages/main/hero/spiral.webp';
import { Spiral } from '../../ui/Spiral';

export const Hero: React.FC = () => {
  return <section className='relative mt-24 sm:mt-30 md:mt-36 lg:mt-[170px]'>
    <h1 className='max-w-[10em] sm:mx-auto sm:text-center'>
      We Are Here For Your
        <span className='linear-text'> Artificial Intelligence </span>
      Startup.
    </h1>
    <Spiral className='bottom-[20%] sm:-bottom-[30%] mw:-bottom-[55%]' src={hugeSpiralWithBluryCircles} alt='huge spiral' />
    <Spiral className='w-[70%] max-w-[377px] -bottom-[71%] -right-[2px] -z-10' src={spiralImg} />
  </section>
};