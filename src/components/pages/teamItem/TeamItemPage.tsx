import { selectInvestmetPortfolioItems } from "../../../redux/selectors";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from "../NotFoundPage";
import { HeroBase } from '../../ui/heroBase/HeroBase';
import heroImg from './../../../assets/imgs/pages/team/hero.webp';
import { Description } from "./Description";
import { Employees } from "./employees/Employees";
import { ContactUs } from "../../ui/contactUs/ContactUs";
import { useScrollTop } from '../../../hooks/useScrollTop';

export const TeamItemPage: React.FC = () => {
  useScrollTop();
  let portfolios = useSelector(selectInvestmetPortfolioItems);
  let { name } = useParams();

  let currentPortfolio = portfolios.find(p => p.name === name);

  if (!currentPortfolio) {
    return <NotFoundPage />
  }

  return <main>
    <HeroBase signClassName='max-w-[10em]' sign={currentPortfolio.description.heading} src={heroImg} />
    <Description name={currentPortfolio.name} description={currentPortfolio.description.description} />
    <Employees items={currentPortfolio.team} />
    <ContactUs />
  </main>
};