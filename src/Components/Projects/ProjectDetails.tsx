import React from 'react'
import Header from '../Header'

interface Tag {
  label: string
  iconClass: string
}

interface Project {
  title: string
  description: string
  year: number
  link: string
  tags: Tag[]
}

interface ProjectDetailsProps {
  project: Project
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => (
  <div className="w-ful h-full">
    <Header text={project.title} />
    <p>{project.description}</p>
    <p>Year: {project.year}</p>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      View project
    </a>
    <ul>
      {project.tags.map((tag) => (
        <li key={tag.label}>
          <i className={tag.iconClass} /> {tag.label}
        </li>
      ))}
    </ul>
  </div>
)

export default ProjectDetails
