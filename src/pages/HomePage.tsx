import { About } from '@/components/about/About'
import { Blog } from '@/components/blog/Blog'
import { Container } from '@/components/Container'
import { Hero } from '@/components/hero/Hero'
import { Nav } from '@/components/Nav'
import { Projects } from '@/components/projects/Projects'
import { Skills } from '@/components/skills/Skills'

const HomePage = () => (
  <>
    <Hero />
    <Nav />
    <Container>
      <Projects />
      <Blog />
      <About />
      <Skills />
    </Container>
  </>
)

export { HomePage }
