import React from "react";

import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full relative bg-container dark:bg-container-dark py-12 mt-24 items-center flex flex-col gap-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ScrollLink to="Hero" duration="500" smooth spy={true} className="flex justify-center items-center p-4 text-primaryText-dark bg-accent dark:bg-accent-dark text-primaryText dark:text-primaryText-dark text-xl">
                    <i className="fa-solid fa-angles-up" />
                </ScrollLink>
            </div>
            <div className="w-full flex flex-row justify-center gap-8 mt-8">
                <ScrollLink to="Hero" duration="500" smooth spy={true}>
                    <picture>
                        <source srcSet={`${process.env.PUBLIC_URL}/Images/white-logo.png`} media="(prefers-color-scheme: dark)" />
                        <source srcSet={`${process.env.PUBLIC_URL}/Images/black-logo.png`} media="(prefers-color-scheme: light)" />
                        <img alt="Logo" className="w-6 h-6" />
                    </picture>
                </ScrollLink>
                <a href="mailto:mattjburton64@gmail.com">
                    <i className="fa-solid fa-envelope" />
                </a>
                <a href="https://github.com/matthewjburton" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github" />
                </a>
                <a href="https://matt-burton.itch.io/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-itch-io" />
                </a>
                <a href="https://www.instagram.com/matthewburton.graphics/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram" />
                </a>
            </div>
            <div className="text-sm uppercase">Matthew Burton &copy;{currentYear}
            </div>
        </div>
    );
};

export default Footer;