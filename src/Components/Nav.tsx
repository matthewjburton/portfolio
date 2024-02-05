import React from "react";
import Logo from "../Assets/logo-white-on-black.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Nav: React.FC = () => {
    return (
        <div className="flex justify-between p-12">
            <div className="flex gap-x-4">
                <img src={Logo} alt="logo" className="w-8 h-8 rounded-full" />
                <div className="justify-self-start">Matthew Burton</div>
            </div>

            <div className="flex gap-x-4">
                <a href="#top"><FontAwesomeIcon icon={faHouse} /></a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#about">About</a>
                <a href="#connect">Connect</a>
            </div>
        </div>
    );
}

export default Nav;