import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectJobItems } from './../redux/selectors';

export const useCurrentJob = () => {
  let { id } = useParams();
  let jobs = useSelector(selectJobItems);

  return jobs.find(j => j.id === Number(id));
};