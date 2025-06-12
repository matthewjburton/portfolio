import React from 'react'
import Bio from './Bio'
import Skills from './Skills'
import { bio, skills } from '../../Content/About/About'
import Header from '../Header'
import { Element } from 'react-scroll'

const About: React.FC = () => {
  return (
    <Element name="About" className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-12 pt-12">
        <Header text="About" />
        <Bio {...bio} />
        <Skills {...skills} />
      </div>
    </Element>
  )
}

export default About
