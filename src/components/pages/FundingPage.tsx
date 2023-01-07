import { useScrollTop } from './../../hooks/useScrollTop';
import { Startups } from './../ui/startups/Startups';

export const FundingPage: React.FC = () => {
  useScrollTop();

  return <main>
    <Startups mt={false} />
  </main>
};