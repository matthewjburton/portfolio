import React from 'react';
import Link from './Link';

interface ProgramContainerProps {
    program: {
        id: number
        title: string
        description: string
        link: string
    }
}

const ProgramContainer: React.FC<ProgramContainerProps> = ({ program }) => {
    return (
        <>
            <div
                key={program.id}
                className="p-8 flex flex-col items-center justify-center bg-container dark:bg-container-dark hover:bg-accent dark:hover:bg-accent-dark rounded-lg overflow-hidden group transition duration-300 ease-in-out"
            >
                <div className="text-xl md:text-2xl lg:text-3xl text-center font-bold">{program.title}</div>
                <div className="h-full flex flex-col gap-4 lg:gap-8 items-center justify-center p-4 lg:p-8 rounded-lg  w-full transition duration-300 ease-in-out">
                    <div className="text-lg">{program.description}</div>
                    <Link link={program.link} text="View" />
                </div>
            </div>
        </>
    );
};

export default ProgramContainer;