import { InvestmentPortfolioTeamItemType } from '../../../../../redux/reducers/static';
import cn from 'classnames';

type Props = {
  role: string
  className?: string
  representatives: InvestmentPortfolioTeamItemType[]
}

export const TeamRepresentative: React.FC<Props> = ({ role, representatives, className }) => {
  let currentRepresentative = representatives.find(r => r.role === role);

  return <div className={cn('flex flex-col items-center even:mt-7 md:even:-mt-10 lg:even:-mt-20', className)}>
    <img src={currentRepresentative?.src} alt={`${currentRepresentative?.name} - ${currentRepresentative?.role}`} />
    <h4 className='smallh4 mt-5 text-center'>{currentRepresentative?.name}</h4>
    <p className='mt-2.5'>{role}</p>
  </div>
};