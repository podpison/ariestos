import { JobType } from './../../../redux/reducers/static';
import save from './../../../assets/imgs/pages/job/save.svg';
import share from './../../../assets/imgs/pages/job/share.svg';
import { Separator } from '../../ui/Separator';

type Props = {

} & JobType

export const Content: React.FC<Props> = ({ category, portfolio, description, id, keyWords, location, name, publishDate, skills, applicationsCount }) => {
  //@ts-ignore
  let diffInMs = new Date() - new Date(publishDate)
  let diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  let daysSign = diffInDays === 0 ? 'today' : diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
  let applicationSign = applicationsCount === 1 ? '1 application' : `${applicationsCount} applications`;

  return <section className='mt100to200'>
    <div className='flex justify-between'>
      <h6 className='h6rules'>{portfolio}</h6>
      <div className='flex gap-x-5'>
        <h6 className='h6rules flex gap-x-1.5 items-center'>
          <span>
            <img src={save} alt='save' />
          </span>
          Save
        </h6>
        <h6 className='h6rules flex gap-x-1.5 items-center'>
          <span>
            <img src={share} alt='share' />
          </span>
          Share
        </h6>
      </div>
    </div>
    <div className='max-md:mt-5'>
      <h2>{name}</h2>
      <div className='flex flex-col gap-y-[30px]'>
        <p className='text-[14px] md:text-[15px] md:text-[16px] lg:text-[18px]'>{location}</p>
        <Separator className='w-full h-px left-0' />
        <p>{daysSign} - {applicationSign}</p>
      </div>
    </div>
  </section>
};