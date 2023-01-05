import patternImg from '../../../assets/imgs/pages/funding/pattern.webp';
import { ArrowLink } from '../../ui/ArrowLink';
import { Texts } from '../../ui/texts/Texts';
import { Separator } from './../../ui/Separator';
import { TextType } from '../../../redux/reducers/static';
import { useRef, useState, useLayoutEffect } from 'react';
import { GoBack } from '../../ui/GoBack';

type Props = {
  name: string
  heading: string
  texts: (string | TextType)[]
  website: string
  smallImg: string
}

export const Description: React.FC<Props> = ({ heading, name, texts, website, smallImg }) => {
  let headingRef = useRef<HTMLDivElement>(null);
  const [descriptionImgHeight, setDescriptionImgHeight] = useState<number | string>(0);

  useLayoutEffect(() => {
    if (headingRef.current && window.innerWidth >= 768) {
      setDescriptionImgHeight(headingRef.current.offsetHeight);
    } else {
      setDescriptionImgHeight('auto');
    }
  }, [headingRef])

  return <section className='mt100to200'>
    <GoBack to='/funding' />
    <div className='relative md:grid md:grid-cols-[60%_40%]'>
      <img className='w-full object-cover max-md:max-h-[300px] md:col-[2] md:row-[1] md:my-auto md:h-full' style={{ height: descriptionImgHeight }} src={smallImg} alt='description' />
      <div className='max-md:mt-10 md:col-[2] md:row-[2]'>
        <Separator className='w-full h-px left-0 md:w-px md:h-full md:top-0 md:left-auto' containerClassName='max-md:pb-10' />
        <div className='relative flex justify-end md:justify-center md:items-center md:h-full'>
          <Separator className='w-px h-[calc(100%_+_80px)] -top-10' containerClassName='pr-14 md:hidden' />
          <img className='w-[60%] max-w-[290px] md:w-[70%]' src={patternImg} alt='pattern' />
        </div>
        <Separator className='w-full h-px left-0 md:top-0' containerClassName='max-md:pt-10' />
      </div>
      <div className='md:col-[1] md:row-[1]' ref={headingRef}>
        <h6 className='pt-[60px] md:pt-10'>{name}</h6>
        <h2 className='mt-2.5 md:mr-5'>{heading}</h2>
        <Separator className='w-full h-px' containerClassName='pt-5 md:pt-10' />
      </div>
      <div className='md:col-[1] md:row-[2] md:max-w-[500px]'>
        <Texts className='pt-10 sm:pt-12 md:pt-[60px] md:mr-5' items={texts} />
        <ArrowLink className='mt-[60px]' to={website} link>View website</ArrowLink>
      </div>
    </div>
  </section>
};