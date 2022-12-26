import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectInvestmetPortfolioItems } from '../../../../redux/selectors';

export const PortfolioLogos: React.FC = () => {
  let items = useSelector(selectInvestmetPortfolioItems);

  let Logos = items.map((i, index) => (
    <Link className="flex items-center gap-2 mx-auto" to={`?portfolio=${i.name}`} key={index}>
      <img className="w-[25px] sm:w-[30px] md:w-[36px]" src={i.icon} alt={`${i.name}\`s icon`} />
      <h4 className="text-secondary-title" key={index}>{i.name}</h4>
    </Link>
  ))

  return <div className="grid grid-cols-2 gap-y-10 mt-14 pb-24 sm:grid-cols-3 sm:pb-36 md:grid-cols-4 md:pb-52 lg:pb-[250px]">
    {Logos}
  </div>
};