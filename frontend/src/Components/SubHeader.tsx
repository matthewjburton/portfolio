import React from "react";

interface SubHeaderProps {
    text: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({ text }) => {
    return (
        <div className="w-full text-3xl font-bold justify-self-center align-self-start py-2 border-b-4 border-accent dark:border-accent-dark">{text}</div>
    );
}

export default SubHeader;