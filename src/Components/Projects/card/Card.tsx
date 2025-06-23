interface CardProps {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-background dark:bg-dark-background hover:from-background-light hover:to-background hover:dark:from-dark-background-light hover:dark:to-dark-background border-t-highlight dark:border-t-dark-highlight group border-border dark:border-dark-border flex h-full flex-col items-center justify-center overflow-hidden rounded-lg border-1 p-4 shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-b">
      <div className="flex h-full w-full flex-col items-center justify-between gap-4 rounded-lg p-4 lg:gap-8 lg:p-8">
        <div className="flex h-full w-full flex-col items-start gap-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
