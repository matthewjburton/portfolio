import React from "react";

const Container: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="flex flex-col w-full px-12 md:px-24 lg:px-96 self-center justify-center bg-background dark:bg-background-dark text-primaryText dark:text-primaryText-dark lg:gap-12">
            {children}
        </div>
    );
}

export default Container;