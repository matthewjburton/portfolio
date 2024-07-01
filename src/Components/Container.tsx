import React from "react";

const Container: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="flex flex-col w-full px-8 md:px-32 lg:px-48  justify-center bg-background dark:bg-background-dark text-primaryText dark:text-primaryText-dark lg:gap-12">
            {children}
        </div>
    );
}

export default Container;