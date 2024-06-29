import React from "react";

interface BioProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: React.ReactNode;
}

const Bio: React.FC<BioProps> = ({ imageSrc, altText, title, description }) => {
    return (
        <div className="w-full bg-container dark:bg-container-dark border border-border dark:border-none p-12 rounded-lg flex flex-row gap-8">
            <img src={imageSrc} alt={altText} className="object-cover h-60 w-60 rounded-lg" />
            <div className="w-fit h-full flex flex-col gap-8">
                <div className="text-2xl font-bold">{title}</div>
                <p>{description}</p>
            </div>
        </div>

    );
}

export default Bio;