import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-background dark:bg-background-dark text-primaryText dark:text-primaryText-dark">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Footer />
    </div>
  );
}

export default App;
