import React from 'react'
import { ProjectType } from '../types'
import Purpose from './sections/Purpose'
import Role from './sections/Role'
import Features from './sections/Features'

interface ContentProps {
  project: ProjectType
}

const Content: React.FC<ContentProps> = ({ project }) => (
  <div className="flex w-full flex-col gap-12">
    <Purpose project={project} />
    <Role project={project} />
    <Features project={project} />

    {/*
    <Card title={sections[4]}>
      <div>What was difficult?</div>
      <div>What decisions were made (e.g. architecture, performance, UX)?</div>
    </Card>

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
