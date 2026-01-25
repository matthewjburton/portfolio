import { Bio } from './Bio'
import { bio } from '../../content/bio'
import { SECTIONS } from '@/content/sections'

const About = () => {
  return (
    <section id={SECTIONS.about} className="scroll-mt-32">
      <div className="flex w-full flex-col items-center gap-12">
        <Bio {...bio} />
      </div>
    </section>
  )
}

export { About }
