import { Separator } from "../../ui/Separator";

type Props = {
  name: string
  description: string
}

export const Description: React.FC<Props> = ({ name, description }) => {
  return <section className="mt100to200 relative">
    <h6 className="max-w-[790px] mx-auto">{name}</h6>
    <h3 className="mt-5 pb-14 md:pb-10 max-w-[790px] mx-auto">how our specialist help you.</h3>
    <Separator className="w-full h-px left-0" />
    <p className="mt-7 sm:mt-9 md:mt-11 lg:mt-14 max-w-[790px] mx-auto">{description}</p>
  </section>
};