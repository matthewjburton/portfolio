import { AllProjects } from '@/components/projects/AllProjects'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'

const ProjectsPage = () => (
    <div className="flex flex-col p-8">
        <Breadcrumbs type="projects" />
        <Container>
            <AllProjects />
        </Container>
    </div>
)

export { ProjectsPage }
