import React from "react";
import { Element } from 'react-scroll';
import Header from "../Components/Header";
import Programs from "./Projects/Programs";
import Games from "./Projects/Games";
import Graphics from "./Projects/Graphics";

const Projects: React.FC = () => {
    return (
        <Element name="Projects" className="flex w-full justify-center p-8">
            <div className="flex flex-col items-center p-12 gap-12">
                <Header text="Projects" />
                <Programs />
                <Games />
                <Graphics />
            </div>
        </Element>
    );
}

export default Projects;