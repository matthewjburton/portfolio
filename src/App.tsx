import './App.css';
import About from './Components/About';
import Connect from './Components/Connect';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Projects />
      <Experience />
      <About />
      <Connect />
    </>
  );
}

export default App;
