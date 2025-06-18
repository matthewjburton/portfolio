import React from 'react'
import { ProjectType } from '../types'
import Purpose from './sections/Purpose'
import Role from './sections/Role'
import Features from './sections/Features'
import Challenges from './sections/Challenges'
import Learned from './sections/Learned'
import State from './sections/State'

interface ContentProps {
  project: ProjectType
}

const Content: React.FC<ContentProps> = ({ project }) => (
  <div className="mb-12 flex w-full flex-col gap-24">
    <Purpose project={project} />
    <Role project={project} />
    <Features project={project} />
    <Challenges project={project} />
    <Learned project={project} />
    <State project={project} />
  </div>
)

export default Content
