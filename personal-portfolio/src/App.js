import { NavBar } from "./components/NavBar";
import { MainPage } from "./components/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { SkillsPage } from "./components/skills.js";
import { Projects } from "./components/projects.js";
import { About } from "./components/about.js";
import { Contact } from "./components/contact.js";
import "../src/App.css";

function App() {
  return (
    <section className="App">
      <NavBar />
      <MainPage />
      <SkillsPage />
      <Projects />
      <About />
      <Contact />
    </section>
  );
}

export default App;
