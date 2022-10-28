import './App.css';
import { NavBar } from './components/NavBar';
import { MainPage } from './components/main.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SkillsPage } from './components/skills.js'
import { Projects } from './components/projects.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <SkillsPage />
      <Projects />
      <form />
    </div>
  );
}

export default App;
