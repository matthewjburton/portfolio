import React from "react";
import Logo from "../Assets/logo-white-on-black.png";

const Nav: React.FC = () => {
    return (
        <div className="flex justify-between p-4">
            <div className="flex gap-x-4">
                <img src={Logo} alt="logo" className="w-8 h-8 rounded-full" />
                <div className="justify-self-start">Matthew Burton</div>
            </div>

            <div className="flex gap-x-4">
                <a href="#top">Return to Top</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#about">About</a>
                <a href="#connect">Connect</a>
            </div>
        </div>
    );
}

export default Nav;