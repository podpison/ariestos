import { useParams } from 'react-router-dom';
import { HeroBase } from '../../ui/heroBase/HeroBase';
import heroImg from './../../../assets/imgs/pages/teamRepresentative/hero.webp';
import { useSelector } from 'react-redux';
import { selectInvestmetPortfolioItems } from '../../../redux/selectors';
import { NotFoundPage } from './../NotFoundPage';
import { Info } from './Info';
import { ContactUs } from '../../ui/contactUs/ContactUs';
import { useScrollTop } from './../../../hooks/useScrollTop';

export const TeamRepresentativePage: React.FC = () => {
  useScrollTop();
  let portfolios = useSelector(selectInvestmetPortfolioItems);
  const { name, representativeName } = useParams();

  let currentPortfolio = portfolios.find(p => p.name === name);
  let currentRepresentative = currentPortfolio?.team.find(p => p.name === representativeName);

  if (!currentRepresentative || !currentPortfolio || !name) {
    return <NotFoundPage />
  }

  return <main>
    <HeroBase signClassName='max-w-[10em]' sign={currentPortfolio?.description.heading} src={heroImg} />
    <Info teamName={name} {...currentPortfolio} {...currentRepresentative} />
    <ContactUs />
  </main>
};