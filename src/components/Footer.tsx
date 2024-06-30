import React from "react";
import WhiteLogo from "../Images/white-logo.png";
import BlackLogo from "../Images/black-logo.png";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full p-12 items-center flex flex-col gap-8">
            <div className="w-full flex flex-row justify-center gap-8">
                <a href="index.html">
                    <picture>
                        <source srcSet={WhiteLogo} media="(prefers-color-scheme: dark)" />
                        <source srcSet={BlackLogo} media="(prefers-color-scheme: light)" />
                        <img alt="Logo" className="w-6 h-6" />
                    </picture>
                </a>
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
            <div>&copy; {currentYear} Matthew Burton
            </div>
        </div>
    );
};

export default Footer;