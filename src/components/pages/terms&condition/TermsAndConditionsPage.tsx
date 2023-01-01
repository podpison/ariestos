import { selectTermsAndConditionItems } from "../../../redux/selectors";
import { HeroBase } from "../../ui/heroBase/HeroBase";
import heroImg from './../../../assets/imgs/pages/terms&conditions/hero.webp';
import { useSelector } from 'react-redux';
import { useStaticItems } from '../../../hooks/useStaticItems';
import { Categories } from "./Categories";
import { useScrollTop } from '../../../hooks/useScrollTop';
import { CategoryContent } from "./CategoryContent";

export const TermsAndConditionsPage: React.FC = () => {
  useScrollTop();
  useStaticItems('termsAndConditionItems');
  let items = useSelector(selectTermsAndConditionItems);

  return <main>
    <HeroBase sign="Privacy Statement." signClassName="w-24" src={heroImg} />
    <section className="mt100to200 grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-x-10 lg:gap-x-[70px]">
      <Categories items={items} />
      <CategoryContent items={items} />
    </section>
  </main>
};