import { InvestmentPortfolioType } from '../../../../../redux/reducers/static';
import cn from 'classnames';

type Props = {
  role: keyof InvestmentPortfolioType['team']
  className?: string
} & InvestmentPortfolioType['team']['leader']

export const TeamRepresentative: React.FC<Props> = ({ role, name, src, className }) => {
  let formattedRole = ''

  switch (role) {
    case 'co':
      formattedRole = 'Co - leader'
      break;
    case 'leader':
      formattedRole = 'Leader'
      break;
    case 'marketing':
      formattedRole = 'Lead marketing'
      break;
    case 'technician':
      formattedRole = 'Lead technician'
      break;
  }

  return <div className={cn('flex flex-col items-center even:mt-7 md:even:-mt-10 lg:even:-mt-20', className)}>
    <img src={src} alt={formattedRole} />
    <h4 className='smallh4 mt-5 text-center'>{name}</h4>
    <p className='mt-2.5'>{formattedRole}</p>
  </div>
};