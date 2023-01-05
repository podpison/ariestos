import { useSelector } from 'react-redux';
import { useSearchParam } from '../../../hooks/useSearchParam';
import { selectStartupItems } from './../../../redux/selectors';
import { Categories } from './Categories';
import { Items } from './Items';

export const Startups: React.FC = () => {
  let [category] = useSearchParam('category');
  let startups = useSelector(selectStartupItems);

  return <section className='mt100to200'>
    <div className='grid gap-5 items-center sm:gap-7 md:gap-10 lg:gap-12 md:grid-cols-[3fr_2fr]'>
      <h2>arise Funding solution for Tech Startups.</h2>
      <p className="mt-5">They are showing researches and writting regularly about the consequnces happening on AI. Our unique program is designed for startups, combining hands-on help from a deeply experienced product development team and a total investment package of $270,000.</p>
    </div>
    <Categories startups={startups} category={category} />
    <Items startups={startups} category={category} />
  </section>
};