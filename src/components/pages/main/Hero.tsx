import hugeSpiralWithBluryCircles from '../../../assets/imgs/pages/main/hero/hugeSpiralWithBluryCircles.webp';
import spiral from '../../../assets/imgs/pages/main/hero/spiral.webp';

export const Hero: React.FC = () => {
  return <section className='relative mt-24 sm:mt-30 md:mt-36 lg:mt-[170px]'>
    <h1 className='text-primary-title max-w-[10em] sm:mx-auto sm:text-center'>
      We Are Here For Your
        <span className='linear-text'> Artificial Intelligence </span>
      Startup.
    </h1>
    <img className='hidden absolute -z-10 -top-[84%] md:block' src={hugeSpiralWithBluryCircles} alt='huge spiral' />
    <img className='absolute -right-[10%] top-[35%] -z-10' src={spiral} alt='spiral' />
  </section>
};