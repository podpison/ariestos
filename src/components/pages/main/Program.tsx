import { ArrowLink } from '../../ui/ArrowLink';
import { BlurryDot } from '../../ui/BlurryDot';
import { Spiral } from '../../ui/Spiral';
import mainImg from './../../../assets/imgs/pages/main/program/main.webp';
import smallImg from './../../../assets/imgs/pages/main/program/small.webp';
import spiralImg from './../../../assets/imgs/pages/main/program/spiral.webp';

export const Program: React.FC = () => {
  return <section className='relative mt-44 sm:mt-50 md:mt-56 lg:mt-64'>
    <Spiral className='-bottom-[12%] -right-[20px] w-[100px] mw:right-0' src={spiralImg} />
    <div className='relative'>
      <div className='relative w-[90%] mx-auto max-w-[900px]'>
        <BlurryDot className='top-0 -left-4' size='91' />
        <img className='w-full' src={mainImg} alt='face' />
      </div>
      <img className='absolute h-[80%] right-0 top-2/4 -translate-y-2/4' src={smallImg} alt='man' />
    </div>
    <div className='relative flex flex-col gap-y-7 mt-10 z-10 sm:gap-y-10 md:-mt-[150px] md:gap-y-13 md:max-w-[560px] md:gap-y-16 lg:-mt-[175px]'>
      <h2>building faster, smarter,together.</h2>
      <p>ARIES is a part of PIXIRHY, a global venture capital firm providing multi stage investment to develop and scale our founders’ big ideas. SOSV invests in every HAX program startup with follow-on through pre-iPO.</p>
      <ArrowLink to='/program'>View programm</ArrowLink>
    </div>
  </section>
};