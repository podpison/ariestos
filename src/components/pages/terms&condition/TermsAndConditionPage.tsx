import { selectTermsAndConditionItems } from "../../../redux/selectors";
import { HeroBase } from "../../ui/heroBase/HeroBase";
import heroImg from './../../../assets/imgs/pages/terms&conditions/hero.webp';
import { useSelector } from 'react-redux';
import { useStaticItems } from './../../../hooks/useStaticItems';
import { Categories } from "./Categories";

export const TermsAndConditionPage: React.FC = () => {
  // useStaticItems('termsAndConditionItems');
  let items = useSelector(selectTermsAndConditionItems);

  return <main>
    <HeroBase sign="Privacy Statement." signClassName="w-24" src={heroImg} />
    <Categories items={items} />
  </main>
};