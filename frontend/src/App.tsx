import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'
import Footer from './Components/Footer'

import Wrapper from './Components/Wrapper'
import Container from './Components/Container'

const App = () => {
  return (
    <>
      <Wrapper>
        <Hero />
        <Nav />
        <Container>
          <Projects />
          <About />
        </Container>
        <Footer />
      </Wrapper>
    </>
  )
}

export default App
