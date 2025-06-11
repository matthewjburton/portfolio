import React from "react";
import SubHeader from '../SubHeader';

interface BioProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: React.ReactNode;
}

const Bio: React.FC<BioProps> = ({ imageSrc, altText, title, description }) => {
    return (
        <>
            <SubHeader text={title} />
            <div className="w-full bg-container dark:bg-container-dark p-12 rounded-lg flex flex-col lg:flex-row gap-8">
                <img src={imageSrc} alt={altText} className="object-cover w-full h-full lg:h-60 lg:w-60 rounded-lg" />
                <div className="w-fit h-full flex flex-col gap-8">
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}

export default Bio;