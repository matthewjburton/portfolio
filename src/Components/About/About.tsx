import { Bio } from './Bio'
import { bio } from '../../content/bio'
import { Header } from '../Header'
import { Element } from 'react-scroll'
import { SECTIONS } from '@/content/sections'

const About = () => {
  return (
    <Element name={SECTIONS.about} className="flex w-full justify-center">
      <div className="flex w-full flex-col items-center gap-12">
        <Header text={SECTIONS.about} />
        <Bio {...bio} />
      </div>
    </Element>
  )
}

export { About }
