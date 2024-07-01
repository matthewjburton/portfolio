import React from "react";
import Bio from "./About/Bio";
import Education from "./About/Education";
import Skills from "./About/Skills";
import { bio, education, skills } from "../Content/About/About";
import Header from "./Header";

import { Element } from "react-scroll";

const About: React.FC = () => {
    return (
        <Element name="About" className="flex w-full justify-center">
            <div className="flex flex-col items-center pt-12 gap-12">
                <Header text="About" />
                <Bio {...bio} />
                <Education {...education} />
                <Skills {...skills} />
            </div>
        </Element>
    );
}

export default About;