import React from "react";
import Container from "./Experience/Container";
import programmingImage from "../Images/Experience/programming.png";
import gameDevImage from "../Images/Experience/game-dev.png";
import graphicDesignImage from "../Images/Experience/graphic-design.png";

const programmingExperience = {
    imageSrc: programmingImage,
    altText: "programming",
    title: "Programming",
    description: (
        <>
            I started learning Javascript, Python, and HTML on
            <a href="https://www.codecademy.com/users/Matt1641/achievements" target="_blank" rel="noreferrer">Codecademy</a>
            in middle school, and continued to study Java in highschool. I graduated Magna Cum Laude from High Point University
            in 2024, with my B.S. in Computer Science. I have a wealth of knowledge in C++, Python, SQL, data structures, computer systems, web
            development and much more. I was a member of the
            <a href="https://involved.highpoint.edu/organization/computersciencesociety" target="_blank" rel="noreferrer">Computer Science Society</a>
            , created my
            <a href="https://github.com/matthewjburton" target="_blank" rel="noreferrer">GitHub</a> account, and practiced on
            <a href="https://leetcode.com/mattjburton64/" target="_blank" rel="noreferrer">LeetCode</a> as an undergraduate.
        </>
    ),
    links: [
        { href: "", text: "Projects" }
    ]
};

const gameDevExperience = {
    imageSrc: gameDevImage,
    altText: "game dev",
    title: "Game Development",
    description: (
        <>
            Making games has been an effective way to strengthen my interactive design skills. I've experimented
            with a vast range of platforms including <a href="https://scratch.mit.edu/users/Minecraft1641/"
                target="_blank" rel="noreferrer">Scratch</a>, <a href="https://www.minecraftforum.net/members/Matt64/threads"
                    target="_blank" rel="noreferrer">Minecraft</a>, GameMaker, and Unity. Unity stuck with me because of the
            flexible nature of implementing features through C#, and for simultaneously improving my
            programming skills. I tried learning Unity as an ambitious, inexperienced kid, but had little
            success. Ultimately, I overcame the challenges I faced as a kid by attending the <a
                href="https://www.envisionexperience.com/explore-our-programs/game-and-technology-academy"
                target="_blank" rel="noreferrer">George Mason Envision Experience</a> which kickstarted my ability to create
            games on my own. I followed up those camps with my first solo project <a
                href="https://mattburton64.itch.io/endless-breakout" target="_blank" rel="noreferrer">Endless Breakout</a>, which
            I revisited in 2022 to complete.
        </>
    ),
    links: [
        { href: "", text: "Projects" }
    ]
};

const graphicDesignExperience = {
    imageSrc: graphicDesignImage,
    altText: "graphics",
    title: "Graphic Design",
    description: (
        <>
            Throughout high school I studied graphic design and refined my ability to produce effective visual
            solutions. I began offering my services on <a
                href="https://www.instagram.com/matthewburton.graphics/" target="_blank" rel="noreferrer">Instagram</a>, but also
            branched into other service providers like <a href="https://99designs.com/profiles/matthewjburton"
                target="_blank" rel="noreferrer">99Designs</a> and <a href="https://www.fiverr.com/mattburton64?up_rollout=true"
                    target="_blank" rel="noreferrer">Fiverr</a>. I developed a portfolio of cover art, logos, brands, geofilters,
            apparel designs, and more. I found success in the services I provided, and many clients returned for
            further art after our first interaction. Freelance and client focused work bolstered my
            interpersonal business skills, and allowed me to exhibit the compassionate business model I value. I
            learned a lot about understanding a client's needs, and experimenting with multiple solutions to
            reach a suitable product.
        </>
    ),
    links: [
        { href: "", text: "Projects" }
    ]
};

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