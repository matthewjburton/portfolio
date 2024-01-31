import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <div className="flex self-center bg-blue-500 text-white p-4">
                This is styled using Tailwind CSS!
            </div>
            <div style={{ color: 'red' }}>This is styled with CSS</div>
        </>
    );
}

export default Home;