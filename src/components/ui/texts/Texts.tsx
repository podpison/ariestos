import { Text } from "./Text";
import cn from 'classnames';
import { TextType } from "../../../redux/reducers/static";

type Props = {
  items: (TextType | string)[] | undefined
  className?: string
  itemsClassName?: string
}

export const Texts: React.FC<Props> = ({ items, className, itemsClassName }) => {
  let Texts = items?.map((i, index) => <Text text={i} className={itemsClassName} key={index} />);

  return <section className={cn("flex flex-col", className?.includes('gap-y') ? className : `gap-y-14 ${className}`)}>
    {Texts}
  </section>
};