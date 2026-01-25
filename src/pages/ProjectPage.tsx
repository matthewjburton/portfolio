import { findProjectBySlug } from '@/content/utils'
import { useParams } from 'react-router-dom'
import { ProjectDetails } from '@/components/projects/details/ProjectDetails'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Banner } from '@/components/projects/details/Banner'

const ProjectPage = () => {
  const { slug } = useParams()
  if (!slug) return
  const project = findProjectBySlug(slug)
  if (!project) return

  return (
    <div className="flex flex-col gap-12">
      <Banner project={project} />
      <Container>
        <Breadcrumbs type="projects" title={project.title} />
        <ProjectDetails project={project} />
      </Container>
    </div>
  )
}

export { ProjectPage }
