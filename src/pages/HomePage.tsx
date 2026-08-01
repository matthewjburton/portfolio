import About from '@/components/about/About'
import Container from '@/components/Container'
import Experience from '@/components/experience/Experience'
import Hero from '@/components/hero/Hero'
import Nav from '@/components/Nav'
import Projects from '@/components/projects/Projects'

const HomePage = () => (
  <>
    <Hero />
    <Nav />
    <Container>
      <Projects />
      <Experience />
      <About />
    </Container>
  </>
)

export default HomePage
