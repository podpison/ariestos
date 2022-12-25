import cn from 'classnames';

type Props = {
  size: string
  className: string
}

export const BlurryDot: React.FC<Props> = ({ size, className }) => {
  return <div
    className={cn('absolute blur-[55px] -z-10', className)}
    style={{
      background: 'radial-gradient(50% 50% at 50% 50%, #5CE4CF 35.25%, #99A9FF 100%)',
      width: `${size}px`,
      height: `${size}px`,
    }}
  />
};