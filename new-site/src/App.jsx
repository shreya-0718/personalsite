import {Canvas} from "@react-three/fiber"
import './App.css';
import Experience from "./components/Experience"

function App() {
  return (
    <>
    <div id="scroll-buffer"></div>
    <div id="scroll-area">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
    </>
  );
}

export default App;
