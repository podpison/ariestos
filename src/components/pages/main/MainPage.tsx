import { Hero } from './Hero';
import { Program } from './Program';
import { Startups } from './startups/Startups';
import { InvestmentPortfolios } from './investmentPortfolios/InvestmentPortfolios';
import { useScrollTop } from '../../../hooks/useScrollTop';

export const MainPage: React.FC = () => {
  useScrollTop();
  
  return <main>
    <Hero />
    <Program />
    <Startups />
    <InvestmentPortfolios />
  </main>
};