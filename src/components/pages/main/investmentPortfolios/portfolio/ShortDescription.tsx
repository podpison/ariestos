import { InvestmentPortfolioType } from '../../../../../redux/reducers/static';
import { ArrowLink } from './../../../../ui/ArrowLink';
import spiralImg from './../../../../../assets/imgs/pages/main/investmentPortfolio/spiral.webp';
import { Spiral } from '../../../../ui/Spiral';

type Props = {
  name: InvestmentPortfolioType['name']
  description: InvestmentPortfolioType['description']
}

export const ShortDescription: React.FC<Props> = ({ description, name }) => {
  return <div className="relative flex flex-col max-md:mt-14 md:bg-shape md:px-5 md:py-14 lg:py-24 lg:px-16">
    <Spiral className='hidden left-0 -top-[4.75em] h-[150px] z-10 object-contain md:block' src={spiralImg} />
    <div className='hidden bg-shape absolute top-0 left-0 w-screen h-full -z-10 md:block' />
    <h2>{description.heading}</h2>
    <p className='mt-7 sm:mt-8 md:mt-9 lg:mt-10'>{description.description}</p>
    <ArrowLink className='mt-7' to={`/team/${name}`}>View team</ArrowLink>
  </div>
};