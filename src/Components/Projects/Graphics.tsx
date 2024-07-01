import React from 'react';
import SubHeader from '../SubHeader';
import Carousel from '../Carousel';
import { AlbumCovers } from '../../Content/Projects/Graphics';
import { Logos } from '../../Content/Projects/Graphics';

const Graphics: React.FC = () => {
    return (
        <>
            <SubHeader text="Graphics" />
            <Carousel images={AlbumCovers} />
            <Carousel images={Logos} />
        </>
    );
};

export default Graphics;
