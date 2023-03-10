import { LatestJobs } from "../ui/LatestJobs";
import { useScrollTop } from './../../hooks/useScrollTop';

export const JobsPage: React.FC = () => {
  useScrollTop();

  return <main>
    <LatestJobs itemsPerPortion={4} mt={false} />
  </main>
};