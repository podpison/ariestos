import heroImg from './../../../assets/imgs/pages/job/hero.webp';

export const Hero: React.FC = () => {
  return <section className='relative'>
    <img className='min-h-[260px]' src={heroImg} alt='hero' />
    <h2 className='absolute bottom-[4%] left-[4%] max-w-[9em]'>backing founders that build big.</h2>
  </section>
};