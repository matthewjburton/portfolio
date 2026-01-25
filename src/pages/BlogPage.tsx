import { AllPosts } from '@/components/blog/AllPosts'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { SECTIONS } from '@/content/sections'

const BlogPage = () => (
    <div className="flex flex-col p-8">
        <Breadcrumbs project={SECTIONS.blog} />
        <Container>
            <AllPosts />
        </Container>
    </div>
)

export { BlogPage }
