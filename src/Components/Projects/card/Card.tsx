interface CardProps {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-background dark:bg-dark-background group flex h-full flex-col items-center justify-center overflow-hidden rounded-lg p-8 shadow-xl transition duration-300 ease-in-out hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f]">
      <div className="flex h-full w-full flex-col items-center justify-between gap-4 rounded-lg p-4 lg:gap-8 lg:p-8">
        <div className="flex h-full w-full flex-col items-start gap-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
