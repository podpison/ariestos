import { StartupType } from "../../../../redux/reducers/static";
import { ArrowLink } from "../../../ui/ArrowLink";
import cn from 'classnames';

type Props = {

} & StartupType

export const Item: React.FC<Props> = ({ description, heading, mainImg, name, smallImg, rtl }) => {
  return <div className="grid grid-col-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-[90px]">
    <div className={cn("relative", rtl && 'md:col-[2]')}>
      <img className={cn("w-[90%]", rtl && 'md:ml-auto')} src={mainImg} alt='product theme' />
      <img className={cn("absolute h-full w-1/2 object-cover right-0 -bottom-7 z-10 md:h-4/5 md:top-1/2 md:bottom-auto md:-translate-y-1/2", rtl ? 'md:left-0' : 'md:-right-[2%]')} src={smallImg} alt='product' />
    </div>
    <div className={cn(rtl && 'md:col-[1] md:row-[1]')}>
      <p>{name}</p>
      <article className="flex flex-col gap-y-5 mt-2.5">
        <h3>{heading}</h3>
        <p>{description}</p>
      </article>
      <ArrowLink className='mt-10' to={`/funding/${name}`}>View project</ArrowLink>
    </div>
  </div>
};