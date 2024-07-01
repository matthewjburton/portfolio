import React from "react";
import SubHeader from '../SubHeader';

interface EducationProps {
    title: string;
    degree: string;
    description: React.ReactNode;
}

const Education: React.FC<EducationProps> = ({ title, degree, description }) => {
    return (
        <>
            <SubHeader text={title} />
            <div className="w-full bg-container dark:bg-container-dark p-12 rounded-lg flex flex-col gap-8">
                <div className="text-xl font-bold text-secondaryText dark:text-secondaryText-dark">{degree}</div>
                <p>{description}</p>
            </div>
        </>
    );
}

export default Education;