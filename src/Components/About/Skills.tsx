import React from "react";

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
        <div className="w-full bg-container dark:bg-container-dark border border-border dark:border-none p-12 rounded-lg flex flex-col gap-8">
            <div className="text-2xl font-bold">{title}</div>
            {skills.map((category, index) => (
                <div key={index} className="flex flex-row items-center gap-4">
                    <div className="font-bold">{category.category}</div>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;