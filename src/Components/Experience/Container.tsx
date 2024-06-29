import React from "react";
import { Link as ScrollLink } from 'react-scroll';

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
        <article className="w-full bg-container dark:bg-container-dark p-12 rounded-lg flex flex-row gap-8">
            <img src={imageSrc} alt={altText} className="object-cover h-60 w-60 rounded-lg" />
            <div className="w-fit h-full flex flex-col gap-8">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p>{description}</p>
                {links.map((link, index) => (
                    <ScrollLink key={index} to={link.href} smooth={true} duration={500} className="text-blue-500 self-end text-xl font-bold">Projects <i className="fa-solid fa-arrow-right" /></ScrollLink>
                ))}
            </div>
        </article>

    );
}

export default Container;