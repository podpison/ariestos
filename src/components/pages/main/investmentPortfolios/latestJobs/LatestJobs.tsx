import { useSelector } from 'react-redux';
import { selectJobItems } from '../../../../../redux/selectors';
import { Categories } from './categories/Categories';
import { useSearchParam } from './../../../../../hooks/useSearchParam';
import { Job } from './Job';
import { ArrowLink } from '../../../../ui/ArrowLink';
import { useSearchParamReplacer } from './../../../../../hooks/useSearchParamReplacer';

const itemsPerPortion = 3

export const LatestJobs: React.FC = () => {
  let jobs = useSelector(selectJobItems);
  let [ currentCategory, currentPortion ] = useSearchParam(['jobCategory', 'jobPortion']);
  const searchParamReplacer = useSearchParamReplacer();

  let categoryJobs = jobs.filter(i => i.category === (currentCategory || jobs[0].category));
  let numberCurrentPortion = Number(currentPortion) || 1;
  let jobsPortion = categoryJobs.slice((numberCurrentPortion - 1) * itemsPerPortion, numberCurrentPortion * itemsPerPortion)

  let Jobs = jobsPortion.map((j, index) => <Job {...j} isLast={categoryJobs.length - 1 === index} key={index} />);
  let isMaxPortion = numberCurrentPortion === Math.floor(categoryJobs.length / itemsPerPortion);;

  return <div className="mt-24 sm:mt-32 md:mt-40 lg:mt-[200px]">
    <h1 className='smallh1'>Latest portfolio jobs.</h1>
    <div className="grid grid-cols-1 mt-14 sm:mt-20 md:mt-28 md:grid-cols-[1fr_max-content] md:gap-x-[11%] lg:mt-36">
      <Categories jobs={jobs} />
      <div className='max-md:mt-12 md:row-[1]'>{Jobs}</div>
    </div>
    <div>
      {!isMaxPortion && <ArrowLink to={searchParamReplacer(`?jobPortion=${(numberCurrentPortion || 0) + 1}`)}>Next jobs</ArrowLink>}
      {(numberCurrentPortion || 0) !== 0 && <ArrowLink to={searchParamReplacer(`?jobPortion=${(numberCurrentPortion || 0) - 1}`)}>Previous jobs</ArrowLink>}
    </div>
  </div>
};