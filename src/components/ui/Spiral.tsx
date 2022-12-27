import cn from 'classnames';

type Props = {
  src: string
  className: string
  alt?: string
}

export const Spiral: React.FC<Props> = ({ src, className, alt }) => {
  return <img
    className={
      cn(
        'absolute',
        className,
        !className.includes('z-') && '-z-10'
      )
    }
    src={src}
    alt={alt ? alt : 'spiral'}
  />
};