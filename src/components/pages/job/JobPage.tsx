import { useParams } from "react-router-dom";
import { selectJobItems } from './../../../redux/selectors';
import { useSelector } from 'react-redux';
import { Hero } from "./Hero";
import { Content } from "./content/Content";
import { useScrollTop } from "../../../hooks/useScrollTop";

export const JobPage: React.FC = () => {
  useScrollTop();
  let { id } = useParams();
  let jobs = useSelector(selectJobItems);

  let currentJob = jobs.find(j => j.id === Number(id));

  // if (!currentJob && jobs.length !== 0) {
  //   return <NotFound />
  // }
  if (!currentJob) {
    return <></>
  }

  return <main>
    <Hero />
    <Content {...currentJob} />
  </main>
};