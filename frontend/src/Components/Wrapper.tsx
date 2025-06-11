import React from "react";

const Wrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark text-primaryText dark:text-primaryText-dark">
            {children}
        </div>
    );
};

export default Wrapper;