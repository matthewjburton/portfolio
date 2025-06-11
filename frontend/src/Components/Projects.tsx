import React from 'react'
import { Element } from 'react-scroll'
import Header from '../Components/Header'
import Programs from './Projects/Programs'

const Projects: React.FC = () => {
  return (
    <Element name="Projects" className="flex w-full justify-center pt-8">
      <div className="flex flex-col items-center gap-12 pt-12">
        <Header text="Projects" />
        <Programs />
      </div>
    </Element>
  )
}

export default Projects
