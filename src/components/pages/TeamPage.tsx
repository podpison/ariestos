import { useScrollTop } from './../../hooks/useScrollTop';
import { InvestmentPortfolios } from './../ui/investmentPortfolios/InvestmentPortfolios';

export const TeamPage: React.FC = () => {
  useScrollTop();

  return <main>
    <InvestmentPortfolios mt={false} />
  </main>
};