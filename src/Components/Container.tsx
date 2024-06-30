import React from "react";

const Container: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="flex flex-col w-full justify-center bg-background dark:bg-background-dark text-primaryText dark:text-primaryText-dark lg:gap-12 lg:px-0">
            {children}
        </div>
    );
}

export default Container;