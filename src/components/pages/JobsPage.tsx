import { LatestJobs } from "../ui/latestJobs/LatestJobs";
import { useScrollTop } from './../../hooks/useScrollTop';

export const JobsPage: React.FC = () => {
  useScrollTop();

  return <LatestJobs itemsPerPortion={4} />
};