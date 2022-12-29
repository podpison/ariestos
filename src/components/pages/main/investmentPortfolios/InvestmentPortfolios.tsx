import { Separator } from "../../../ui/Separator"
import { LatestJobs } from "./latestJobs/LatestJobs";
import { Portfolio } from "./portfolio/Portfolio";
import { PortfolioLogos } from "./PortfolioLogos";
import { useStaticItems } from './../../../../hooks/useStaticItems';
import './investmentPortfolios.scss';

export const InvestmentPortfolios: React.FC = () => {
  useStaticItems('investmentPortfolios')

  return <section className="mt100to200">
    <Separator className="w-full h-[1px]" />
    <h2 className='pt-5 sm:pt-6 md:pt-7'>Our investment portfolios.</h2>
    <PortfolioLogos />
    <Portfolio />
    <LatestJobs />
  </section>
};