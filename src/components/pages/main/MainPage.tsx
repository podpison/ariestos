import { Hero } from './Hero';
import { Program } from './Program';
import { Startups } from './startups/Startups';
import { InvestmentPortfolios } from './investmentPortfolios/InvestmentPortfolios';

export const MainPage: React.FC = () => {
  return <main>
    <Hero />
    <Program />
    <Startups />
    <InvestmentPortfolios />
  </main>
};