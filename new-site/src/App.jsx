import {Canvas} from "@react-three/fiber"
import './App.css';
import Experience from "./components/Experience"

function App() {
  return (
    <>
    <div id="scroll-area">
      <Canvas>
        <Experience />
      </Canvas>
    </div>

    <div id="next-section">
      <h1>Welcome to the site</h1>
      <p>This is the next part of shreya's website.</p>
    </div>

    </>
  );
}

export default App;
