import React from "react";
import Yellowstone from "../Images/Yellowstone.png";
import Overcome from "../Images/Overcome.png";
import AllStars from "../Images/All Stars.png";
import ForeverLit from "../Images/Forever Lit.png";

const Projects: React.FC = () => {
    return (
        <div className="flex w-full justify-center ">
            <div className="flex flex-col items-center w-2/3 p-12 gap-12">
                <div className="text-3xl font-bold">Projects</div>
                <div>
                    <div className="text-2xl font-bold py-4">Programs</div>
                    <div>
                        <a href="https://github.com/matthewjburton/comfort-airlines">
                            Comfort Airlines</a>
                        <p>For my senior capstone project our class was divided into teams of six and instructed to
                            design a software solution for
                            the fictional company Comfort Airlines. We were given numerous constraints, requirements,
                            and challenges which we had to
                            decide how to solve and implement. Out of the five teams in the class, our group received
                            the class nomination for the
                            project most worthy of winning the company's "bid".</p>
                    </div>
                </div>

                <div>
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
                </div>

                <div>
                    <div className="text-2xl font-bold py-4">Graphics</div>
                    <div className="grid grid-cols-2 gap-4">
                        <img className="w-80 h-80 object-fit" src={Yellowstone} alt="Yellowstone" />
                        <img className="w-80 h-80 object-fit" src={Overcome} alt="Overcome" />
                        <img className="w-80 h-80 object-fit" src={ForeverLit} alt="Forever Lit" />
                        <img className="w-80 h-80 object-fit" src={AllStars} alt="All Stars" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;