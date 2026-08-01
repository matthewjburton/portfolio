import React from 'react'
import Content from './Content'
import { ProjectType } from '../types'
import OtherProjects from './OtherProjects'

interface ProjectDetailsProps {
  project: ProjectType
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => (
  <div className="flex h-full w-full flex-col gap-8">
    <Content project={project} />
    <OtherProjects project={project} />
  </div>
)

export default ProjectDetails
