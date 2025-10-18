import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import Testpage from './home/Testpage';
import AboutMe from './Other Pages/about me/AboutMe.js'
import ProjectGal from './Other Pages/project gallery/ProjectGal.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Testpage/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/projects" element={<ProjectGal/>}/>
      </Routes>
    </Router>
  );
}

export default App;
