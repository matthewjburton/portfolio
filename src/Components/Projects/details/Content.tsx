import React from 'react'
import { ProjectType } from '../types'
import Purpose from './sections/Purpose'
import Role from './sections/Role'
import Features from './sections/Features'
import Challenges from './sections/Challenges'

interface ContentProps {
  project: ProjectType
}

const Content: React.FC<ContentProps> = ({ project }) => (
  <div className="flex w-full flex-col gap-12">
    <Purpose project={project} />
    <Role project={project} />
    <Features project={project} />
    <Challenges project={project} />

    {/*
    <Card title={sections[5]}>
      <div>New technologies, skills, design patterns</div>
      <div>Takeaways from the experience</div>
    </Card>

    <Card title={sections[6]}>
      <div>Is it complete?</div>
      <div>What would you improve</div>
    </Card>
    */}
  </div>
)

export default Content
