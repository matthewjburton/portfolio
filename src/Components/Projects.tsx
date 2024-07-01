import React from "react";
import Yellowstone from "../Images/Yellowstone.png";
import Overcome from "../Images/Overcome.png";
import AllStars from "../Images/All Stars.png";
import ForeverLit from "../Images/Forever Lit.png";
import { Element } from 'react-scroll';
import Header from "../Components/Header";
import Programs from "./Projects/Programs";

const Projects: React.FC = () => {
    return (
        <Element name="Projects" className="flex w-full justify-center p-8">
            <div className="flex flex-col items-center w-2/3 p-12 gap-12">
                <Header text="Projects" />
                <Programs />

                <Element name="games">
                    <div className="text-2xl font-bold py-4">Games</div>
                    <div className="grid grid-flow-row grid-cols-2 gap-4">
                        <div>
                            <iframe title="Endless Breakout"
                                src="https://itch.io/embed/303595?bg_color=811515&amp;fg_color=FFF&amp;link_color=fa5c5c&amp;border_color=ce5555"
                                width="208" height="167">
                                <a href="https://matt-burton.itch.io/endless-breakout">Endless Breakout by Matt Burton</a>
                            </iframe>
                            <p>Infinite arcade brick breaker</p>
                        </div>
                        <div>
                            <iframe title="Head Hunter"
                                src="https://itch.io/embed/1437587?bg_color=1E1E1E&amp;fg_color=ffffff&amp;link_color=fa5c5c&amp;border_color=7d7d7d"
                                width="208" height="167">
                                <a href="https://matt-burton.itch.io/head-hunter">Head Hunter by Matt Burton</a>
                            </iframe>
                            <p>An action roguelike platformer</p>
                        </div>
                    </div>
                </Element>

                <Element name="graphics">
                    <div className="text-2xl font-bold py-4">Graphics</div>
                    <div className="grid grid-cols-2 gap-4">
                        <img className="w-80 h-80 object-fit" src={Yellowstone} alt="Yellowstone" />
                        <img className="w-80 h-80 object-fit" src={Overcome} alt="Overcome" />
                        <img className="w-80 h-80 object-fit" src={ForeverLit} alt="Forever Lit" />
                        <img className="w-80 h-80 object-fit" src={AllStars} alt="All Stars" />
                    </div>
                </Element>
            </div>
        </Element>
    );
}

export default Projects;