
import React from 'react';
import { AlbumCovers } from '../../Content/Projects/Graphics';

const Graphics: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {AlbumCovers.map((album) => (
                    <img
                        key={album.id}
                        src={`${process.env.PUBLIC_URL}/${album.image}`}
                        alt={album.title}
                        className="object-cover w-full h-full md:h-60 md:w-60 lg:h-full lg:w-full"
                    />),
                )}
            </div>
        </>
    )
};

export default Graphics;