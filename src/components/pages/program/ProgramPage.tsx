import { useScrollTop } from './../../../hooks/useScrollTop';
import heroImg from './../../../assets/imgs/pages/program/hero.webp';
import { HeroBase } from './../../ui/heroBase/HeroBase';
import { HowItWorks } from './howItWorks/HowItWorks';
import { Startups } from '../../ui/startups/Startups';
import { ContactUs } from './../../ui/contactUs/ContactUs';
import { Phases } from './phases/Phases';


export const ProgramPage: React.FC = () => {
  useScrollTop();

  return <main>
    <HeroBase signClassName='max-w-[9em]' sign='Building faster,  smarter, together.' src={heroImg} />
    <HowItWorks />
    <Phases />
    <Startups />
    <ContactUs />
  </main>
};