import { projects } from '@/data/projects'
import { slugify } from '@/router/utils/slugify'
import { useParams } from 'react-router-dom'
import ProjectDetails from '@/components/projects/ProjectDetails'
import Breadcrumbs from '@/components/Breadcrumbs'
import Container from '@/components/Container'

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => slugify(p.title) === slug)

  if (!project) return <p>Project not found</p>

  return (
    <Container>
      <Breadcrumbs />
      <ProjectDetails project={project} />
    </Container>
  )
}

export default ProjectPage
