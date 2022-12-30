import { JobType } from '../../../../redux/reducers/static';
import save from './../../../../assets/imgs/pages/job/save.svg';
import share from './../../../../assets/imgs/pages/job/share.svg';
import { Separator } from '../../../ui/Separator';
import { Skills } from './skills/Skills';
import { Description } from './description/Description';
import { ArrowLink } from '../../../ui/ArrowLink';
import { Spiral } from '../../../ui/Spiral';
import spiralImg from './../../../../assets/imgs/pages/job/content/spiral.webp';
import { LatestJobs } from '../../../ui/latestJobs/LatestJobs';
import { ContactUs } from '../../../ui/contactUs/ContactUs';

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
    <div className='mt-5'>
      <h2>{name}</h2>
      <div className='flex flex-col gap-y-[30px] mt-5 sm:mt-6 md:mt-[30px]'>
        <p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]'>{location}</p>
        <Separator className='w-full h-px left-0' />
        <p>{daysSign} - {applicationSign}</p>
      </div>
      <div className='relative mt-14 sm:mt-20 md:mt-24 lg:mt-[120px]'>
        <div className='md:mx-4 lg:mx-16'>
          <Skills {...skills} />
          <Description {...description} />
          <ArrowLink className='mt-14' to='/'>Apply to job</ArrowLink>
        </div>
        <Spiral className='w-[165px] h-[600px] -right-5 bottom-[10%] mw:right-0' src={spiralImg} />
      </div>
      <LatestJobs itemsPerPortion={4} />
      <ContactUs />
    </div>
  </section>
};