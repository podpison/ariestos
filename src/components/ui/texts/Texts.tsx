import { Text, TextType } from "./Text";
import cn from 'classnames';

type Props = {
  items: TextType[] | undefined
  className?: string
  itemsClassName?: string
}

export const Texts: React.FC<Props> = ({ items, className, itemsClassName }) => {
  let Texts = items?.map((i, index) => <Text {...i} className={itemsClassName} key={index} />);
  
  return <section className={cn("flex flex-col gap-y-14", className)}>
    {Texts}
  </section>
};