import React from 'react'
import Bio from './Bio'
import { bio } from '../../Content/bio'
import Header from '../Header'
import { Element } from 'react-scroll'

const About: React.FC = () => {
  return (
    <Element name="About" className="flex w-full justify-center">
      <div className="flex w-full flex-col items-center gap-12">
        <Header text="About" />
        <Bio {...bio} />
      </div>
    </Element>
  )
}

export default About
