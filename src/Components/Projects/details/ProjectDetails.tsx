import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import { ProjectType } from '../types'
import OtherProjects from './OtherProjects'

interface ProjectDetailsProps {
  project: ProjectType
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => (
  <div className="w-ful flex h-full flex-col gap-8">
    <div className="flex flex-col gap-12 md:flex-row">
      <Sidebar project={project} />
      <Content project={project} />
    </div>
    <OtherProjects project={project} />
  </div>
)

export default ProjectDetails
