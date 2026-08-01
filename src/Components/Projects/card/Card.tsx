interface CardProps {
  children: React.ReactNode
  media?: React.ReactNode
}

const Card = ({ children, media }: CardProps) => {
  return (
    <div className="bg-background dark:bg-dark-background hover:dark:from-dark-background-light hover:dark:to-dark-background border-t-highlight dark:border-t-dark-highlight group border-border dark:border-dark-border flex h-full flex-col overflow-hidden rounded-lg border-1 shadow-sm transition duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:dark:bg-gradient-to-b">
      {media}
      <div className="flex w-full flex-col items-start gap-4 p-6 lg:gap-6 lg:p-8">
        {children}
      </div>
    </div>
  )
}

export default Card
