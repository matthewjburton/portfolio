import React from "react";

interface HeaderProps {
    text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
    return (
        <div className="text-5xl font-bold self-center py-4 border-b-8 border-accent dark:border-accent-dark">{text}</div>
    );
}

export default Header;