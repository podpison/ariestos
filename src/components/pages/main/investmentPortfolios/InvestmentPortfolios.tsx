import { Separator } from "../../../ui/Separator"
import { Portfolio } from "./portfolio/Portfolio";
import { PortfolioLogos } from "./PortfolioLogos";
import './investmentPortfolios.scss';
import { LatestJobs } from "../../../ui/latestJobs/LatestJobs";

export const InvestmentPortfolios: React.FC = () => {
  return <section className="mt100to200">
    <Separator className="w-full h-[1px]" />
    <h2 className='pt-5 sm:pt-6 md:pt-7'>Our investment portfolios.</h2>
    <PortfolioLogos />
    <Portfolio />
    <LatestJobs />
  </section>
};