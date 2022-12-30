import cn from 'classnames';

type Props = {
  name: string
  items: string[]
  className?: string
}

export const Item: React.FC<Props> = ({ name, items, className }) => {
  let Items = items.map((i, index) => {
    return <ul key={index}>
      <li className='text-secondary-title'>{i}</li>
    </ul>
  });

  return <div>
    <h6 className='h6rules text-sub-title'>{name}</h6>
    <div className={cn("flex flex-col gap-y-5 mt-5", className)}>
      {Items}
    </div>
  </div>
};