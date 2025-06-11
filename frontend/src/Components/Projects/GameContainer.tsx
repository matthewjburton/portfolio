import React from 'react'
import Link from './Link'

interface GameContainerProps {
  game: {
    id: number
    image: string
    title: string
    description: string
    link: string
  }
}

const GameContainer: React.FC<GameContainerProps> = ({ game }) => {
  return (
    <>
      <div
        key={game.id}
        className="group bg-container dark:bg-container-dark relative flex items-center justify-center overflow-hidden rounded-lg transition duration-300 ease-in-out hover:shadow-lg"
      >
        <img
          src={game.image}
          alt={game.title}
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
          <div className="group bg-accent dark:bg-accent-dark flex h-full flex-col items-center justify-center gap-8 p-4 lg:p-8">
            <div className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
              {game.title}
            </div>
            <div className="text-lg">{game.description}</div>
            <Link link={game.link} text="Play" />
          </div>
        </div>
      </div>
    </>
  )
}

export default GameContainer
