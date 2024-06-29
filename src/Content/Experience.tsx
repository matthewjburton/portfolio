import programmingImage from "../Images/Experience/programming.png";
import gameDevImage from "../Images/Experience/game-dev.png";
import graphicDesignImage from "../Images/Experience/graphic-design.png";

export const programmingExperience = {
    imageSrc: programmingImage,
    altText: "programming",
    title: "Programming",
    description: (
        <>
            I started learning Javascript, Python, and HTML on <a href="https://www.codecademy.com/users/Matt1641/achievements" target="_blank" rel="noreferrer">Codecademy
            </a> in middle school, and continued to study Java in highschool. I graduated Magna Cum Laude from High Point University
            in 2024, with my B.S. in Computer Science. I have a wealth of knowledge in C++, Python, SQL, data structures, computer systems, web
            development and much more. I was a member of the <a href="https://involved.highpoint.edu/organization/computersciencesociety" target="_blank" rel="noreferrer">Computer Science Society
            </a>, started several projects on my <a href="https://github.com/matthewjburton" target="_blank" rel="noreferrer">GitHub</a> account, and practiced on <a href="https://leetcode.com/mattjburton64/" target="_blank" rel="noreferrer">LeetCode
            </a> as an undergraduate.
        </>
    ),
    links: [
        { href: "programs", text: "Projects" }
    ]
};

export const gameDevExperience = {
    imageSrc: gameDevImage,
    altText: "game dev",
    title: "Game Development",
    description: (
        <>
            With experience from <a href="https://scratch.mit.edu/users/Minecraft1641/"
                target="_blank" rel="noreferrer">Scratch</a>, <a href="https://www.minecraftforum.net/members/Matt64/threads"
                    target="_blank" rel="noreferrer">Minecraft</a>, GameMaker, and Unity I've worked on many projects in several engines.
            Currently I'm using Unity because of the flexible nature of implementing features through C# and to improve my
            programming skills. I overcame the challenges of learning Unity by attending the <a
                href="https://www.envisionexperience.com/explore-our-programs/game-and-technology-academy"
                target="_blank" rel="noreferrer">George Mason Envision Experience</a> which kickstarted my ability to create
            games on my own. I followed up those camps with my first solo project <a
                href="https://matt-burton.itch.io/endless-breakout" target="_blank" rel="noreferrer">Endless Breakout</a>, which
            I revisited in 2022 to complete. Lately, I've been focused on <a href="https://matt-burton.itch.io/head-hunter" target="_blank" rel="noreferrer">Head Hunter</a> an action
            roguelike platformer.
        </>
    ),
    links: [
        { href: "games", text: "Projects" }
    ]
};

export const graphicDesignExperience = {
    imageSrc: graphicDesignImage,
    altText: "graphics",
    title: "Graphic Design",
    description: (
        <>
            I studied graphic design four four years and continued to refine my ability to produce effective visual
            solutions. I've offered services on <a
                href="https://www.instagram.com/matthewburton.graphics/" target="_blank" rel="noreferrer">Instagram</a>, <a href="https://99designs.com/profiles/matthewjburton"
                    target="_blank" rel="noreferrer">99Designs</a> and <a href="https://www.fiverr.com/mattburton64?up_rollout=true"
                        target="_blank" rel="noreferrer">Fiverr</a>. My portfolio includes cover art, logos, brands, geofilters,
            apparel designs, and more. Freelance and client focused work strengthened my interpersonal business skills and dedication to customer satisfaction.
            These relationships helped me understand a client's needs to reach a satisfying product.
        </>
    ),
    links: [
        { href: "graphics", text: "Projects" }
    ]
};