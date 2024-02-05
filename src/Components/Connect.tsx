import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Connect: React.FC = () => {
    return (
        <div id="connect">
            <div className="bg-secondary flex gap-x-6 justify-center p-12 w-screen">
                <a href="https://www.linkedin.com/in/matthew-j-burton/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="mr-2" />LinkedIn</a>
                <a href="https://github.com/matthewjburton" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="mr-2" />GitHub</a>
                <a href="https://mattburton64.itch.io/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faItchIo} className="mr-2" />Itch.io</a>
                <a href="https://www.instagram.com/matthewburton.graphics/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="mr-2" />Instagram</a>
                <a href="mailto:mattjburton64@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Mail</a>
            </div>
        </div>
    );
}

export default Connect;