import PortraitImage from "../Images/About/portrait.png"

export const bio = {
    imageSrc: PortraitImage,
    altText: "Matthew Burton",
    title: "Bio",
    description:
        <>
            Hi, I'm Matthew Burton, a developer with interest and experience in Game Development, Web Development, and UI/UX. During undergraduate studies I
            refounded the <a href="https://pikapp.org/" target="_blank" rel="noreferrer">Pi Kappa Phi</a> Theta Tau chapter on High
            Point University's campus, and served as the Standards Board Chairman and Chaplain. I enjoy golfing, skateboarding, making music,
            spending time with my two golden retrievers, and learning new things.
        </>
}

export const education = {
    title: "Education",
    degree: "B.S. in Computer Science",
    description:
        <>
            I studied at <a
                href="https://www.highpoint.edu/computerscience/" target="_blank" rel="noreferrer">High Point University</a>,
            North Carolina. During my freshman year I was inducted into <a
                href="https://www.nationalald.org/" target="_blank" rel="noreferrer">Alpha Lambda Delta Honors Society</a> for
            students who achieved a 3.5 GPA during their first year in college. Later, during my junior year I
            was inducted into the <a href="https://www.nsls.org/" target="_blank" rel="noreferrer">National Society of Leadership and
                Sucess</a> for my academic success and leadership roles. Also, in my junior year I became a member of
            the <a href="https://orderofomega.org//" target="_blank" rel="noreferrer">Order of Omega</a>, for students who who exemplify high standards in the areas of scholarship, leadership, and involvement.
            My education has been rigorous but rewarding, and fostered my love for learning and disciplined work ethic.
        </>
}

export const skills = {
    title: "Skills",
    skills: [
        {
            category: "Programming",
            skills: [
                "Python",
                "C++",
                "Java",
                "HTML",
                "CSS",
                "MySQL",
            ]
        },
        {
            category: "Game Development",
            skills: [
                "Unity",
                "C#",
                "Aseprite",
                "Xcode",
            ]
        },
        {
            category: "Graphic Design",
            skills: [
                "Adobe Illustrator",
                "Adobe Photoshop",
                "Adobe Lightroom",
                "Adobe After Effects",
            ]
        },
        {
            category: "Extras",
            skills: [
                "GitHub",
                "Visual Studio Code",
                "Microsoft Excel",
                "Adobe Audition",
                "Adobe Premiere",
            ]
        }
    ]
};