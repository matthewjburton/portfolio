import React from "react";

interface HeaderProps {
    text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
    return (
        <div className="text-3xl font-bold self-center py-12">{text}</div>
    );
}

export default Header;