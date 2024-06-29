import React from "react";
import Bio from "./About/Bio";
import Education from "./About/Education";
import Skills from "./About/Skills";
import { bio, education, skills } from "../Content/About";

const About: React.FC = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col items-center w-2/3 p-12 gap-12">
                <div className="text-3xl font-bold">About</div>

                <Bio {...bio} />
                <Education {...education} />
                <Skills {...skills} />
            </div>
        </div>
    );
}

export default About;