import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Footer />
    </>
  );
}

export default App;
