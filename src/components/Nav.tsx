import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Nav: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);

    // Function to handle scroll event and update navbar stickiness
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    // Add event listener for scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-full bg-container dark:bg-container-dark flex flex-row justify-center items-center gap-8 p-6 text-2xl z-20 ${isSticky ? 'sticky top-0 shadow-container dark:shadow-container-dark shadow-md' : ''}`}>
            <ScrollLink to="Hero" duration={500} smooth spy={true} offset={-100} activeClass="font-bold text-accent dark:text-accent-dark">
                Home
            </ScrollLink>
            <ScrollLink to="Projects" duration={500} smooth spy={true} offset={-100} activeClass="font-bold text-accent dark:text-accent-dark">
                Projects
            </ScrollLink>
            <ScrollLink to="About" duration={500} smooth spy={true} offset={-100} activeClass="font-bold text-accent dark:text-accent-dark">
                About
            </ScrollLink>
        </div>
    );
};

export default Nav;
