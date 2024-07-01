
import React from 'react';
import { AlbumCovers } from '../../Content/Projects/Graphics';
import SubHeader from '../SubHeader';

const Graphics: React.FC = () => {
    return (
        <>
            <SubHeader text="Graphics" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {AlbumCovers.map((album) => (
                    <img
                        key={album.id}
                        src={`${process.env.PUBLIC_URL}/${album.image}`}
                        alt={album.title}
                        className="object-cover w-full h-full lg:h-full lg:w-full"
                    />),
                )}
            </div>
        </>
    )
};

export default Graphics;