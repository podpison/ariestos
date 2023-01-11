import cn from 'classnames';

type Props = {
  items: any[]
  count?: number
  className?: string
  isContainer?: boolean
}

export const Skeleton: React.FC<Props> = ({ count = 3, items, className, isContainer }) => {
  let Items = [...Array(count).keys()].map(i => {
    return <div className={cn(`skeleton`, className ? className : 'h-[600px]')} key={i} />;
  })

  if (items.length) {
    return <>{items}</>
  }

  return isContainer ? <div>{Items}</div> : <>{Items}</>
};