interface PortraitProps {
  imageSrc: string
  altText: string
}

const Portrait = ({ imageSrc, altText }: PortraitProps) => {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-lg lg:max-w-[240px]">
      <img
        src={imageSrc}
        alt={altText}
        className="h-full w-full translate-x-12 scale-150 object-cover"
      />
    </div>
  )
}

export default Portrait
