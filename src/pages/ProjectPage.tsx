import { projects } from '@/data/projects'
import { slugify } from '@/router/utils/slugify'
import { useParams } from 'react-router-dom'
import ProjectDetails from '@/components/projects/details/ProjectDetails'
import Breadcrumbs from '@/components/Breadcrumbs'
import Container from '@/components/Container'
import Banner from '@/components/projects/details/Banner'

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => slugify(p.title) === slug)

  if (!project) return <p>Project not found</p>

  return (
    <div className="flex flex-col gap-12">
      <Banner project={project} />
      <Container>
        <Breadcrumbs project={project.title} />
        <ProjectDetails project={project} />
      </Container>
    </div>
  )
}

export default ProjectPage
