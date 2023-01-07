import { Link } from "react-router-dom";
import { InvestmentPortfolioTeamItemType } from "../../../../redux/reducers/static";

type Props = {

} & InvestmentPortfolioTeamItemType

export const Item: React.FC<Props> = ({ name, role, src }) => {
  return <Link className='group flex flex-col cursor-pointer transition-colors hover:bg-shape p-2 sm:p-4 md:p-6 lg:p-8' to={`${name}`}>
    <img className='mx-auto w-full max-w-[270px]' src={src} alt='employee' />
    <h4 className='smallh4 mt-5 text-center flex-1 transition-colors group-hover:text-primary sm:mt-6 md:mt-7'>{name}</h4>
    <p className='mt-2 text-center sm:mt-3 md:mt-4'>{role}</p>
  </Link>
};