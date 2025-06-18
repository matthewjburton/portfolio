import About from '@/components/about/About'
import Container from '@/components/Container'
import Hero from '@/components/hero/Hero'
import Nav from '@/components/Nav'
import Projects from '@/components/projects/Projects'
import Skills from '@/components/skills/Skills'

const HomePage = () => (
  <>
    <Hero />
    <Nav />
    <Container>
      <Projects />
      <About />
      <Skills />
    </Container>
  </>
)

export default HomePage
