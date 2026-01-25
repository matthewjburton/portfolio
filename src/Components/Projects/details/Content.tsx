import { ProjectType } from '@/types/content'
import { Purpose } from './sections/Purpose'
import { Role } from './sections/Role'
import { Features } from './sections/Features'
import { Stack } from './sections/Stack'
import { Challenges } from './sections/Challenges'
import { Learned } from './sections/Learned'
import { State } from './sections/State'

interface ContentProps {
  project: ProjectType
}

const Content = ({ project }: ContentProps) => (
  <div className="mb-12 flex w-full flex-col gap-24">
    <Purpose project={project} />
    <Role project={project} />
    <Features project={project} />
    <Stack project={project} />
    <Challenges project={project} />
    <Learned project={project} />
    <State project={project} />
  </div>
)

export { Content }
