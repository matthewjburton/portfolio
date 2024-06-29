import React from "react";
import Container from "./Experience/Container";
import { programmingExperience, gameDevExperience, graphicDesignExperience } from "../Content/Experience";

const Experience: React.FC = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col items-center w-2/3 p-12 gap-12">
                <div className="text-3xl font-bold">Experience</div>
                <Container {...programmingExperience} />
                <Container {...gameDevExperience} />
                <Container {...graphicDesignExperience} />
            </div>
        </div>
    );
}

export default Experience;