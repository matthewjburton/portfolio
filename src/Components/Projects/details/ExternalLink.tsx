import { ProjectType } from '../types'

interface ExternalLinkProps {
  project: ProjectType
}

const ExternalLink = ({ project }: ExternalLinkProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="gradient-accent text-container dark:text-container-dark w-fit rounded-full px-4 py-2"
    >
      View project
    </a>
  )
}

export default ExternalLink
