import { Phase } from "./Phase";
import { Spiral } from './../../../ui/Spiral';
import phase1SmallImg from './../../../../assets/imgs/pages/program/phase1/small.webp';
import phase1BigImg from './../../../../assets/imgs/pages/program/phase1/big.webp';
import phase2SmallImg from './../../../../assets/imgs/pages/program/phase2/small.webp';
import phase2BigImg from './../../../../assets/imgs/pages/program/phase2/big.webp';
import phase3SmallImg from './../../../../assets/imgs/pages/program/phase3/small.webp';
import phase3BigImg from './../../../../assets/imgs/pages/program/phase3/big.webp';
import spiral1Img from './../../../../assets/imgs/pages/program/spiral1.webp';
import spiral2Img from './../../../../assets/imgs/pages/program/spiral2.webp';

export const Phases: React.FC = () => {
  return <section className='mt100to200 relative grid grid-cols-1 gap-y-[120px] sm:gap-y-40 md:gap-y-48 md:pb-[10%] lg:gap-y-60'>
    <Spiral className="w-[173px] top-[26%] -right-5 mw:right-0" src={spiral1Img} />
    <Phase phaseNumber={0} description='Teams transition into Phase 1 with clear milestones and projects for product and business development. Phase 1 emphasizes AI of prototyping, iteration and testing as well as building up networks for suppliers, experts and manufacturers moving towards production.' heading='interative product development.' smallImg={phase1SmallImg} bigImg={phase1BigImg} />
    <Phase ltr phaseNumber={1} heading='growth & fundraising.' description='Founders prime for scaling through expanded business development, manufacturing, and concentrated venture capital fundraising.  We closely collaborate with every team as they build out their investment strategy and support with our network of the world’s top investors aligned with physical / digital technology investment, along with our own investment through PIXIRY.' smallImg={phase2SmallImg} bigImg={phase2BigImg} />
    <Phase phaseNumber={2} heading='community onboarding.' description="After the program, startups still work closely with ARIES leadership, investment team and business development team throughout their startup journey. While we don't continue to provide engineering and product development support, we are part of your company for the long haul and want to see you succeed." smallImg={phase3SmallImg} bigImg={phase3BigImg} />
    <Spiral className="w-[123px] bottom-[8%] -left-5 sm:-bottom-[18%] md:-bottom-[10%] lg:-bottom-[6%] mw:left-0" src={spiral2Img} />
  </section>
};