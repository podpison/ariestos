import { InvestmentPortfolioTeamItemType } from "../../../redux/reducers/static";
import { ArrowLink } from "../../ui/ArrowLink";
import { Separator } from "../../ui/Separator";
import { Spiral } from './../../ui/Spiral';
import spiralImg from './../../../assets/imgs/pages/teamRepresentative/spiral.webp';

type Props = {
  teamName: string
} & InvestmentPortfolioTeamItemType

export const Info: React.FC<Props> = ({ teamName, name, description, role, src, linkedin }) => {
  let Texts = description.map((i, index) => <p key={index}>{i}</p>);

  return <section className="mt100to200">
    <ArrowLink className='flex-row-reverse justify-end w-fit [&>img]:rotate-180' to={`/team/${teamName}`}>Go back</ArrowLink>
    <div className="grid grid-cols-1 mt-8 md:grid-cols-2 md:gap-x-[8%] md:items-center">
      <div className="relative grid items-center grid-cols-[2fr_3fr] gap-5 bg-shape p-5 max-md:mb-14 md:pb-10 md:grid-cols-1 md:pt-40 lg:pt-52">
        <Spiral className="w-full top-0 z-10 max-md:hidden" src={spiralImg} />
        <img className="w-full" src={src} alt={`${name} - ${role}`} />
        <div className="flex flex-col md:hidden">
          <h4>{name}</h4>
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">{role}</p>
        </div>
      </div>
      <div className="md:relative">
        <div className="hidden flex-col pb-10 md:flex">
          <h2>{name}</h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">{role}</p>
        </div>
        <Separator className="w-full h-px left-0" />
        <div className="flex flex-col gap-y-5 pt-[30px] sm:pt-[40px] md:pt-[50px] lg:pt-[60px]">
          {Texts}
        </div>
        <ArrowLink className="mt-[60px]" to={linkedin} link>connect on linkedin</ArrowLink>
      </div>
    </div>
  </section>
};