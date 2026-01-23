interface ImageProps {
  src: string
  alt: string
}

const Image = ({ src, alt }: ImageProps) => (
  <img src={src} alt={alt} className="my-4 w-full rounded-lg shadow-lg" />
)

export { Image }
