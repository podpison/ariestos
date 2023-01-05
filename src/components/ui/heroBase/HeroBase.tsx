import cn from 'classnames';

type Props = {
  src: string
  sign: string
  signClassName: string
}

export const HeroBase: React.FC<Props> = ({ sign, src, signClassName }) => {
  return <section className='relative w-[calc(100%_+_40px)] -ml-5 mw:w-full mw:ml-0'>
    <div className='absolute w-full h-full bg-black/60' />
    <img className='object-cover w-full max-h-[560px] min-h-[260px]' src={src} alt='hero' />
    <h2 className={cn('absolute bottom-[4%] left-[4%]', signClassName)}>{sign}</h2>
  </section>
};