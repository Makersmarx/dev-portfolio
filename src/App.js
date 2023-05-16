import AboutMe from "./section/AboutMe";
import Contact from "./section/Contact";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import Testimonials from "./section/Testimonials";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Card/>
    </div>
  )
}

export default App;
