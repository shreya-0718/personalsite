import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import Testpage from './home/Testpage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Testpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
