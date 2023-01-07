import { HeroBase } from "../../ui/heroBase/HeroBase";
import { Description } from "./Description";
import { ContactUs } from "../../ui/contactUs/ContactUs";
import { useScrollTop } from '../../../hooks/useScrollTop';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectStartupItems } from '../../../redux/selectors';
import { NotFoundPage } from '../NotFoundPage';
import { Startups } from "../../ui/startups/Startups";

export const FundingItemPage: React.FC = () => {
  useScrollTop();
  let startups = useSelector(selectStartupItems);
  let { name } = useParams();

  let currentStartup = startups.find(s => s.name === name);

  if (!currentStartup) {
    return <NotFoundPage />
  }

  return <main>
    <HeroBase signClassName="max-w-[10em]" sign="backing founders that build big." src={currentStartup.mainImg} />
    <Description {...currentStartup} {...currentStartup.content} />
    <Startups />
    <ContactUs />
  </main>
};