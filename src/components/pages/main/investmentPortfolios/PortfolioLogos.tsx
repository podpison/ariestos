import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSearchParamReplacer } from '../../../../hooks/useSearchParamReplacer';
import { selectInvestmetPortfolioItems } from '../../../../redux/selectors';
import cn from 'classnames';
import { useSearchParam } from './../../../../hooks/useSearchParam';

export const PortfolioLogos: React.FC = () => {
  const searchParamReplacer = useSearchParamReplacer();
  let items = useSelector(selectInvestmetPortfolioItems);
  let [portfolioSearch] = useSearchParam('portfolio');

  let Logos = items.map((i, index) => {
    return <Link className={cn("primaryHoverWithImg flex items-center gap-2 mx-auto", portfolioSearch === i.name && 'investment-portfolios__logo')} to={searchParamReplacer(`?portfolio=${i.name}`)} key={index}>
      <img className="w-[25px] transition-all sm:w-[30px] md:w-[36px]" src={i.icon} alt={`${i.name}\`s icon`} />
      <h4 className="text-secondary-title transition-colors" key={index}>{i.name}</h4>
    </Link>
  })

  return <div className="grid grid-cols-2 gap-y-10 mt-14 pb-24 sm:grid-cols-3 sm:pb-36 md:grid-cols-4 md:pb-52 lg:pb-[250px]">
    {Logos}
  </div>
};