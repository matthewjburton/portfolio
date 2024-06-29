import React from "react";

interface EducationProps {
    title: string;
    degree: string;
    description: React.ReactNode;
}

const Education: React.FC<EducationProps> = ({ title, degree, description }) => {
    return (
        <div className="w-full bg-container dark:bg-container-dark border border-border dark:border-none p-12 rounded-lg flex flex-col gap-8">
            <div className="text-2xl font-bold">{title}</div>
            <div className="text-xl font-bold text-secondaryText dark:text-secondaryText-dark">{degree}</div>
            <p>{description}</p>
        </div>
    );
}

export default Education;