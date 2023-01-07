import { InvestmentPortfolioType } from '../../../../redux/reducers/static';
import { Spiral } from '../../../ui/Spiral';
import { Item } from './Item';
import spiralImg from './../../../../assets/imgs/pages/team/spiral.webp';

type Props = {
  items: InvestmentPortfolioType['team']
}

export const Employees: React.FC<Props> = ({ items }) => {
  let Items = items.map((i, index) => <Item {...i} key={index} />)

  return <section className='mt-[100px] md:mt-[120px]'>
    <div className='relative grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 md:gap-x-7 md:gap-y-12 lg:gap-y-14'>
      {Items}
      <Spiral className='max-w-[126px] -left-5 bottom-[35%] md:bottom-[28%] mw:left-0' src={spiralImg} />
    </div>
  </section>
};