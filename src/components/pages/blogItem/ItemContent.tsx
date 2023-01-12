import { BlogItemType } from "../../../redux/reducers/static";
import { GoBack } from "../../ui/GoBack";
import { Separator } from "../../ui/Separator";
import { Spiral } from "../../ui/Spiral";
import { Texts } from "../../ui/texts/Texts";
import spiral1Img from './../../../assets/imgs/pages/blogItem/spiral1.webp';
import spiral2Img from './../../../assets/imgs/pages/blogItem/spiral2.webp';

type Props = {

} & BlogItemType

export const ItemContent: React.FC<Props> = ({ content, author, date, name, preview }) => {
  return <section className="mt100to200 relative">
    <GoBack to="/blog" />
    <div>
      <h2>{name}</h2>
      <Separator className="w-full h-px" containerClassName="mt-[60px]" />
    </div>
    <div className="pt-10 md:w-[85%] sm:pt-14 md:max-w-[960px] md:mx-auto md:pt-20 lg:pt-24">
      <div className="relative">
        <img className="w-full md:w-[90%] md:ml-auto" src={preview} alt='preview' />
        <div className="grid grid-cols-[30%_1fr] items-center gap-5 bg-shape py-5 px-7 max-md:mt-10 max-md:mx-4 md:max-w-[300px] md:grid-cols-1 md:absolute md:top-1/2 md:-translate-y-1/2 h-[80%] md:grid-rows-[1fr_max-content]">
          <div className="relative h-full">
            <img className="md:absolute md:w-full md:h-full md:object-cover" src={author.img} alt='author' />
          </div>
          <div>
            <h4>{author.name}</h4>
            <h6 className="mt-2.5">{author.profession}</h6>
          </div>
        </div>
      </div>
      <h4 className="mt-10 sm:mt-14 md:mt-20 lg:mt-28">{date}</h4>
      <Spiral className="-right-5 top-[50%] w-[120px] h-[400px] mw:right-0" src={spiral1Img} />
      <Spiral className="-left-5 bottom-0 w-[120px] h-[400px] mw:left-0" src={spiral2Img} />
      <Texts className="mt-5 gap-y-5 md:mt-[30px]" items={content} />
    </div>
  </section>
};