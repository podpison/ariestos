type Props = {
  src: string
  children: React.ReactNode
  alt: string
  onClick: () => void
}

export const Action: React.FC<Props> = ({ src, children, alt, onClick }) => {
  return <h6 className='primaryHoverWithImg flex gap-x-1.5 items-center cursor-pointer' onClick={onClick}>
    <span>
      <img src={src} alt={alt} />
    </span>
    <span>{children}</span>
  </h6>
};