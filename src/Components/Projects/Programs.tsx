import React from 'react';
import { programs } from '../../Content/Programs';

const Programs: React.FC = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
                <div
                    key={program.id}
                    className="relative group flex items-center justify-center bg-container dark:bg-container-dark rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
                    style={{ aspectRatio: '2/1' }}
                >
                    <div className="text-3xl md:text-4xl lg:text-5xl text-center font-bold group-hover:opacity-0 transition duration-300 ease-in-out">{program.title}</div>

                    {/* Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <div className="h-full flex flex-col gap-8 items-center justify-center p-8 bg-accent dark:bg-accent-dark bg-opacity-75">
                            <p className="text-lg">{program.description}</p>
                            <a href={program.link} target="_blank" rel="noopener noreferrer" className="text-link">Link</a>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Programs;
