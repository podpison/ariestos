import { Content } from "./content/Content";
import { useScrollTop } from "../../../hooks/useScrollTop";
import { useCurrentJob } from "../../../hooks/useCurrentJob";
import { NotFoundPage } from './../NotFoundPage';
import { useSelector } from 'react-redux';
import { selectJobItems } from './../../../redux/selectors';
import { HeroBase } from "../../ui/heroBase/HeroBase";
import heroImg from './../../../assets/imgs/pages/job/hero.webp';

export const JobPage: React.FC = () => {
  useScrollTop();
  let currentJob = useCurrentJob();
  let jobs = useSelector(selectJobItems);

  if (!currentJob) {
    if (jobs.length !== 0) {
      return <NotFoundPage />
    } else {
      return <main>Loading</main>
    }
  }
  if (!currentJob) {
    return <></>
  }

  return <main>
    <HeroBase sign="backing founders that build big." src={heroImg} signClassName="max-w-[9em]" />
    <Content {...currentJob} />
  </main>
};