import React from "react";

interface ContainerProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: React.ReactNode;
    links: {
        href: string;
        text: string;
    }[];
}

const Container: React.FC<ContainerProps> = ({ imageSrc, altText, title, description, links }) => {
    return (
        <article className="w-full bg-white dark:bg-gray-800 p-12 rounded-lg flex flex-row gap-8">
            <img src={imageSrc} alt={altText} className="object-cover h-60 w-60 rounded-lg" />
            <div className="w-full h-full flex flex-col gap-8">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p>{description}</p>
                {links.map((link, index) => (
                    <a key={index} href={link.href} className="text-blue-500 self-end text-xl font-bold">
                        {link.text} <i className="fa-solid fa-arrow-right" />
                    </a>
                ))}
            </div>
        </article>

    );
}

export default Container;