import React from 'react';
import Link from './Link';

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
                className="relative group flex items-center justify-center bg-container dark:bg-container-dark rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
            >
                <img src={game.image} alt={game.title} className="object-cover w-full h-full" />

                {/* Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <div className="group h-full flex flex-col gap-8 items-center justify-center p-4 lg:p-8 bg-accent dark:bg-accent-dark">
                        <div className="text-xl md:text-2xl lg:text-3xl text-center font-bold">{game.title}</div>
                        <div className="text-lg">{game.description}</div>
                        <Link link={game.link} text="Play" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default GameContainer;