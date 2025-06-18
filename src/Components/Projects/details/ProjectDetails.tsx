import React from 'react'
import Sidebar from './Siderbar'
import Content from './Content'
import { ProjectType } from '../types'

interface ProjectDetailsProps {
  project: ProjectType
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => (
  <div className="w-ful flex h-full flex-col gap-8">
    <div className="flex flex-col gap-12 md:flex-row">
      <Sidebar />
      <Content project={project} />
    </div>
  </div>
)

export default ProjectDetails
