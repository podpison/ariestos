import { useParams } from "react-router-dom";
import { selectJobItems } from './../../../redux/selectors';
import { useSelector } from 'react-redux';
import { Hero } from "./Hero";
import { Content } from "./Content";

export const JobPage: React.FC = () => {
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