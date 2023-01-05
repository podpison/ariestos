import cn from 'classnames';
import { TextType } from '../../../redux/reducers/static';

type Props = {
  className?: string
  text: TextType | string
}

const isTextStringGuardian = (text: TextType | string): text is TextType => {
  return (text as TextType).items !== undefined
}

export const Text: React.FC<Props> = ({ text, className }) => {
  if (!isTextStringGuardian(text)) {
    return <p className={cn('text-secondary-title', className)}>{text}</p>
  }

  let Items = text.items.map((i, index) => {
    return <ul key={index}>
      <li className='text-secondary-title'>{i}</li>
    </ul>
  });

  return <div>
    <h6 className='h6rules text-sub-title'>{text.name}</h6>
    <div className={cn("flex flex-col gap-y-5 mt-5", className)}>
      {Items}
    </div>
  </div>
};