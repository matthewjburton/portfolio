import React from 'react';
import { games } from '../../Content/Projects/Games';
import SubHeader from '../SubHeader';

const Games: React.FC = () => {
    return (
        <>
            <SubHeader text="Games" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {games.map((game) => (
                    <div
                        key={game.id}
                        className="relative group flex items-center justify-center bg-container dark:bg-container-dark rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
                        style={{ aspectRatio: '63/50' }}
                    >
                        <img src={game.image} alt={game.title} className="object-cover w-full h-full" />

                        {/* Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <div className="h-full flex flex-col gap-8 items-center justify-center p-8 text-primaryText-dark bg-accent dark:bg-accent-dark bg-opacity-80">
                                <p className="text-lg">{game.description}</p>
                                <a href={game.link} target="_blank" rel="noopener noreferrer" className="text-link">Play</a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default Games;
