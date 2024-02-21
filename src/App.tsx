import './App.css';
import About from './Components/About';
import Connect from './Components/Connect';
import Experience from './Components/Experience';
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
      <Connect />
    </>
  );
}

export default App;
