import Cafe from "./components/Cafe";
import Cursor from "./components/Cursor";
import { CursorProvider } from "./components/CursorContext";

function App() {
  return (
    <CursorProvider>
      <div className="App">
        <Cursor />
        <Cafe />
      </div>
    </CursorProvider>
  );
}

export default App;