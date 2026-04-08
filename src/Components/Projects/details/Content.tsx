import React from 'react'
import { ProjectType } from '../types'
import Purpose from './sections/Purpose'
import Features from './sections/Features'
import Challenges from './sections/Challenges'
import State from './sections/State'

interface ContentProps {
  project: ProjectType
}

const Content: React.FC<ContentProps> = ({ project }) => (
  <div className="mb-12 flex w-full flex-col gap-24">
    <Purpose project={project} />
    <Features project={project} />
    <Challenges project={project} />
    <State project={project} />
  </div>
)

export default Content
