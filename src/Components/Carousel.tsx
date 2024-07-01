import React, { useState } from "react";

interface CarouselImage {
    id: number;
    image: string;
    title: string;
}

interface CarouselProps {
    images: CarouselImage[],
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [current, setCurrent] = useState(2);

    const handleClick = (index: number) => {
        setCurrent(index);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <div className="flex items-center justify-center w-full h-60 overflow-hidden">
            <div className="relative w-full h-full flex justify-center items-center">
                {images.map((image, index) => {
                    const distance = index - current;
                    const isCurrent = index === current;
                    const position = 180 * distance;

                    return (
                        <div
                            key={image.id}
                            onClick={() => handleClick(index)}
                            className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${isCurrent ? 'z-10' : `z-${10 - Math.abs(current - index)}`}`}
                            style={{
                                left: `calc(50% - 100px + ${position}px)`,
                                top: '50%',
                                transform: isCurrent ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1)',
                                opacity: isCurrent ? 1 : 1 - .3 * Math.abs(current - index),
                                transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out, left 0.7s ease-in-out',
                            }}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/${image.image}`}
                                alt={image.title}
                                className="object-cover w-40 h-40 rounded-lg"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;