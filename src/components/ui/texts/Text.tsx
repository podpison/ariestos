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
    let mainText = text;
    let selectedText = '';

    if (text.includes('**')) {
      let splitedText = text.split('**');
      mainText = splitedText[0];
      selectedText = splitedText[1];
    };

    return <p className={cn('text-secondary-title', className)}>
      {mainText}
      {selectedText && <span className='text-white'>{selectedText}</span>}
    </p>
  }

  let Items = text.items.map((i, index) => <li className='text-secondary-title' key={index}>{i}</li>);

  return <div>
    <h6 className='h6rules text-sub-title'>{text.name}</h6>
    <ul className={cn("flex flex-col gap-y-5 mt-5", className)}>
      {Items}
    </ul>
  </div>
};