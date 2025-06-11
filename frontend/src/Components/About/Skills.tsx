import React from "react";
import SubHeader from '../SubHeader';

interface SkillCategory {
    category: string;
    skills: string[];
}

interface SkillsProps {
    title: string;
    skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ title, skills }) => {
    return (
        <>
            <SubHeader text={title} />
            <div className="w-full bg-container dark:bg-container-dark p-12 rounded-lg flex flex-col gap-8">
                {skills.map((category, index) => (
                    <div key={index} className="flex flex-col lg:flex-row items-center gap-4">
                        <div className="font-bold text-center lg:text-left">{category.category}</div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Skills;