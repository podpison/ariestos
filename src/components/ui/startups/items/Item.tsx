import { StartupType } from "../../../../redux/reducers/static";
import { ArrowLink } from "../../ArrowLink";

type Props = {

} & StartupType

export const Item: React.FC<Props> = ({ smallImg, name, year, shortDescription }) => {
  return <div className="group relative">
    <img className="w-full object-cover max-h-[400px]" src={smallImg} alt={name} />
    <h3 className="absolute line-clamp-1 transition-opacity top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0">{name}</h3>
    <div
      className="
      flex flex-col justify-center
      absolute top-0 left-0 
      z-10 transition-opacity opacity-0 w-full h-full bg-black/80
      p-5
      group-hover:opacity-100"
    >
      <p>{year}</p>
      <h3 className="line-clamp-1 mt-4">{name}</h3>
      <p className="line-clamp-[7] mt-5">{shortDescription}</p>
      <ArrowLink className="mt-16" to={`/funding/${name}`}>View program</ArrowLink>
    </div>
  </div>
};