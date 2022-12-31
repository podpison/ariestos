import hugeSpiralWithBluryCircles from '../../../assets/imgs/pages/main/hero/hugeSpiralWithBluryCircles.webp';
import spiralImg from '../../../assets/imgs/pages/main/hero/spiral.webp';
import { Spiral } from '../../ui/Spiral';

export const Hero: React.FC = () => {
  return <section className='relative'>
    <h1 className='max-w-[10em] sm:mx-auto sm:text-center'>
      We Are Here For Your
        <span className='linear-text'> Artificial Intelligence </span>
      Startup.
    </h1>
    <Spiral className='-top-[80px] sm:-top-[155px] md:-top-[170px] lg:-top-[200px]' src={hugeSpiralWithBluryCircles} alt='huge spiral' />
    <Spiral className='w-[70%] max-w-[377px] right-0 top-[70%] sm:top-[50px] lg:top-[130px] -z-10' src={spiralImg} />
  </section>
};