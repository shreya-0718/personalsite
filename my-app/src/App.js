import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import Testpage from './home/Testpage';
import AboutMe from './Other Pages/about me/AboutMe.js'
import ProjectGal from './Other Pages/project gallery/ProjectGal.js'
import FriendSites from './Other Pages/friendsites/FriendSites.js'
import Contact from './Other Pages/contact/Contact.js'
import Blog from './Other Pages/blog/Blog.js'
import PicWall from './Other Pages/picture wall/PicWall.js'
import PhotoBooth from './Other Pages/photo booth/PhotoBooth.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Testpage/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/projects" element={<ProjectGal/>}/>
        <Route path='/friendsites' element={<FriendSites/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path="/pictures" element={<PicWall/>}/>
        <Route path="photobooth" element={<PhotoBooth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
