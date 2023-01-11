import { useSelector } from 'react-redux';
import { TeamRepresentative } from "./TeamRepresentative";
import { ShortDescription } from "./ShortDescription";
import { selectInvestmetPortfolioItems } from '../../../../redux/selectors';
import { Separator } from './../../Separator';
import { useSearchParam } from '../../../../hooks/useSearchParam';
import { Skeleton } from '../../Skeleton';

export const Portfolio: React.FC = () => {
  let items = useSelector(selectInvestmetPortfolioItems);

  let [portfolioSearchParam] = useSearchParam('portfolio');
  let currentPortfolio = items.find(i => i.name === portfolioSearchParam)

  if (!currentPortfolio) {
    if (items.length === 0) {
      return <Skeleton className='-mt-12 h-[500px]' count={1} items={[]} />
    }
    currentPortfolio = items[0];
  }

  let { description, name, team } = currentPortfolio;

  return <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 max-md:bg-shape max-md:w-screen max-md:py-14 max-md:-ml-5 max-md:px-5 md:items-center lg:gap-x-16">
    <div className="relative grid grid-cols-2 gap-5 sm:gap-6 md:pr-8 md:gap-7 lg:pr-16">
      <TeamRepresentative role='leader' representatives={team} />
      <TeamRepresentative role='co - leader' representatives={team} />
      <TeamRepresentative role='lead marketing' representatives={team} />
      <TeamRepresentative role='lead technisian' representatives={team} />
      <Separator className="hidden md:block w-px h-full top-0 right-0" />
    </div>
    <ShortDescription description={description} name={name} />
  </div>
};