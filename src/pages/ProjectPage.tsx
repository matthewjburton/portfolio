import { projects } from '@/data/projects'
import { slugify } from '@/router/utils/slugify'
import { useParams } from 'react-router-dom'
import ProjectDetails from '@/components/projects/details/ProjectDetails'
import Container from '@/components/Container'
import Banner from '@/components/projects/details/Banner'
import Nav from '@/components/Nav'
import { sections as sectionConfig } from '@/components/projects/details/sections/sections'
import { ProjectType } from '@/components/projects/types'

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => slugify(p.title) === slug)

  if (!project) return <p>Project not found</p>

  const navSections = sectionConfig
    .filter((section) => Boolean(project[section.id as keyof ProjectType]))
    .map((section) => section.label)

  return (
    <div className="flex flex-col">
      <Banner project={project} />
      <Nav sections={navSections} backTo="/" />
      <Container>
        <ProjectDetails project={project} />
      </Container>
    </div>
  )
}

export default ProjectPage
