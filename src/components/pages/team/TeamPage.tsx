import { selectInvestmetPortfolioItems } from "../../../redux/selectors";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const TeamPage: React.FC = () => {
  let portfolios = useSelector(selectInvestmetPortfolioItems);
  let { name } = useParams();

  let currentPortfolio = portfolios.find(p => p.name === name);

  return <main>

  </main>
};