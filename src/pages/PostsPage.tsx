import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Posts } from '@/components/posts/Posts'

const PostsPage = () => (
    <div className="flex flex-col p-8">
        <Breadcrumbs project={"Posts"} />
        <Container>
            <Posts/>
        </Container>
    </div>
)

export { PostsPage }
