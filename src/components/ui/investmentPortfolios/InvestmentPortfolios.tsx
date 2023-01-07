import { Portfolio } from "./portfolio/Portfolio";
import { PortfolioLogos } from "./PortfolioLogos";
import './investmentPortfolios.scss';
import cn from 'classnames';
import { Separator } from './../Separator';

type Props = {
  mt?: boolean
}

export const InvestmentPortfolios: React.FC<Props> = ({ mt }) => {
  return <section className={cn("", mt && "mt100to200")}>
    <Separator className="w-full h-[1px]" />
    <h2 className='pt-5 sm:pt-6 md:pt-7'>Our investment portfolios.</h2>
    <PortfolioLogos />
    <Portfolio />
  </section>
};