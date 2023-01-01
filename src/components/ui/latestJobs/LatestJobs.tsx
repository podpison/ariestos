import { useSelector } from 'react-redux';
import { useSearchParam } from '../../../hooks/useSearchParam';
import { selectJobItems } from '../../../redux/selectors';
import { useSearchParamReplacer } from './../../../hooks/useSearchParamReplacer';
import { Categories } from './categories/Categories';
import { Job } from './Job';
import { ArrowLink } from './../ArrowLink';
import { useCurrentJob } from '../../../hooks/useCurrentJob';
import cn from 'classnames';

type Props = {
  itemsPerPortion?: number
  mt?: boolean
}

export const LatestJobs: React.FC<Props> = ({ mt = true, itemsPerPortion = 3 }) => {
  let jobs = useSelector(selectJobItems);
  let [currentCategory, currentPortion] = useSearchParam(['jobCategory', 'jobPortion']);
  const searchParamReplacer = useSearchParamReplacer();
  let currentJob = useCurrentJob();

  let categoryJobs = jobs.filter(i => (i.category === (currentCategory || jobs[0].category)) && i.id !== currentJob?.id);
  let numberCurrentPortion = Number(currentPortion) || 1;
  let jobsPortion = categoryJobs.slice((numberCurrentPortion - 1) * itemsPerPortion, numberCurrentPortion * itemsPerPortion)
  let isMaxPortion = numberCurrentPortion === Math.ceil(categoryJobs.length / itemsPerPortion);

  let Jobs = jobsPortion.map((j, index) => <Job {...j} isLast={jobsPortion.length - 1 === index} key={index} />);

  return <section className={cn('', mt && "mt-24 sm:mt-32 md:mt-40 lg:mt-[200px]")}>
    <h1 className='smallh1'>Latest portfolio jobs.</h1>
    <div className="grid grid-cols-1 mt-14 sm:mt-20 md:mt-28 md:grid-cols-[1fr_max-content] md:gap-x-[11%] lg:mt-36">
      <Categories jobs={jobs} />
      <div className='max-md:mt-12  md:row-[1]'>
        <div>{Jobs}</div>
        <div className='flex items-center justify-between mt-7 sm:mt-8 md:mt-9 lg:mt-10'>
          <div>
            {!isMaxPortion && <ArrowLink to={searchParamReplacer(`?jobPortion=${(numberCurrentPortion || 0) + 1}`)}>Next jobs</ArrowLink>}
            {(numberCurrentPortion || 1) !== 1 && <ArrowLink className='flex-row-reverse [&>img]:rotate-180' to={searchParamReplacer(`?jobPortion=${(numberCurrentPortion || 1) - 1}`)}>Previous jobs</ArrowLink>}
          </div>
          {!(isMaxPortion && numberCurrentPortion == 1) && <p>Page: {numberCurrentPortion}</p>}
        </div>
      </div>
    </div>
  </section>
};