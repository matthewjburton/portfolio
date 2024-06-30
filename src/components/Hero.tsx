import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center p-8 text-wrap text-center gap-8">
            <div className="text-5xl">
                <div>
                    Hello, I'm <span className="text-accent">Matt</span>.
                </div>
                <div>
                    I make software, games, and graphics.
                </div>
            </div>
            <ScrollLink to="projects" duration="500" smooth className="p-4 border-accent border-2 text-accent">
                View my work <i className="ml-2 fa-solid fa-arrow-down" />
            </ScrollLink>
        </div>
    );
};

export default Hero;