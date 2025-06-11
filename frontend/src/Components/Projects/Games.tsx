import React from 'react';
import { games } from '../../Content/Projects/Games';
import SubHeader from '../SubHeader';
import GameContainer from './GameContainer';

const Games: React.FC = () => {
    return (
        <>
            <SubHeader text="Games" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {games.map((game) => (
                    <GameContainer key={game.id} game={game} />
                ))}
            </div>
        </>
    );
};

export default Games;
