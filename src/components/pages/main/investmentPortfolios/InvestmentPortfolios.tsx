import { Separator } from "../../../ui/Separator"
import { LatestJobs } from "./latestJobs/LatestJobs";
import { Portfolio } from "./portfolio/Portfolio";
import { PortfolioLogos } from "./PortfolioLogos";
import { useStaticItems } from './../../../../hooks/useStaticItems';

export const InvestmentPortfolios: React.FC = () => {
  useStaticItems('investmentPortfolios')

  return <section className="mt-24 sm:mt-32 md:mt-40 lg:mt-[200px]">
    <Separator className="w-full h-[1px]" />
    <h2 className='pt-5 sm:pt-6 md:pt-7'>Our investment portfolios.</h2>
    <PortfolioLogos />
    <Portfolio />
    <LatestJobs />
  </section>
};