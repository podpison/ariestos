import cn from 'classnames';

type Props = {
  phaseNumber: number
  heading: string
  description: string
  smallImg: string
  bigImg: string
  ltr?: boolean //left to right
}

export const Phase: React.FC<Props> = ({ phaseNumber, bigImg, description, heading, smallImg, ltr }) => {

  return <div>
    <h4>Phase {phaseNumber + 1}</h4>
    <h2 className="mt-2.5">{heading}</h2>
    <p className="mt-5 max-w-[775px]">{description}</p>
    <div className={cn("relative mt-10 sm:mt-14 md:mt-18 md:grid md:z-10 lg:mt-[100px]", ltr ? 'md:grid-cols-[65%_15%_20%]' : 'md:grid-cols-[20%_15%_65%]')}>
      <img className={cn("z-10 max-md:absolute max-md:h-[90%] max-md:-bottom-10 md:mt-[40%]", ltr && 'md:col-[3] md:row-[1]')} src={smallImg} alt='phase' />
      <div className={cn("bg-shape w-[calc(100%_+_140px)] h-[90%] mt-[90%] -ml-16 max-md:hidden", ltr && 'md:col-[2] md:row-[1]')} />
      <img className={cn('' && ltr && 'md:col-[1] md:row-[1]')} src={bigImg} alt='phase' />
    </div>
  </div>
};