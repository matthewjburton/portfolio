import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";
import {hero} from '../Content/Hero'

const Hero = () => {
    return (
        <Element name="Hero" className="h-screen flex flex-col justify-center items-center p-4 lg:p-8 text-wrap text-center gap-8">
            <div className="text-5xl">
                <div>
                    {hero.greeting} <span className="text-accent dark:text-accent-dark">{hero.name}</span>.
                </div>
                <div>
                    {hero.description}
                </div>
            </div>
            <ScrollLink to="Projects" duration="500" smooth spy={true} offset={-80} className="p-4 border-accent dark:border-accent-dark border-2 text-lg text-accent dark:text-accent-dark hover:shadow-lg hover:shadow-accent hover:dark:shadow-accent-dark transition duration-300 ease-in-out">
                {hero.buttonText} <i className="ml-2 fa-solid fa-arrow-down" />
            </ScrollLink>
        </Element>
    );
};

export default Hero;