import React from 'react';
import { programs } from '../../Content/Projects/Programs';
import SubHeader from '../SubHeader';
import ProgramContainer from './ProgramContainer';
const Programs: React.FC = () => {
    return (
        <>
            <SubHeader text="Programs" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map((program) => (
                    <ProgramContainer key={program.id} program={program} />
                ))}
            </div>
        </>
    );
};

export default Programs;
