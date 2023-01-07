import { Hero } from './Hero';
import { Program } from './Program';
import { Startups } from './startups/Startups';
import { useScrollTop } from '../../../hooks/useScrollTop';
import { InvestmentPortfolios } from './../../ui/investmentPortfolios/InvestmentPortfolios';
import { LatestJobs } from './../../ui/latestJobs/LatestJobs';

export const MainPage: React.FC = () => {
  useScrollTop();
  
  return <main>
    <Hero />
    <Program />
    <Startups />
    <InvestmentPortfolios />
    <LatestJobs />
  </main>
};