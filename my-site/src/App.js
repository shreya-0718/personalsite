import { useEffect } from "react";
import Cafe from "./components/Cafe";
import Cursor from "./components/Cursor";

function App() {
  useEffect(() => {
    const handleEnter = (e) => {
      if (e.target.tagName === "BUTTON") {
        document.body.classList.add("cursor-glow");
      }
    };

    const handleLeave = (e) => {
      if (e.target.tagName === "BUTTON") {
        document.body.classList.remove("cursor-glow");
      }
    };

    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);

    return () => {
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <div className="App">
      <Cursor/>
      <Cafe/>
    </div>
  );
}

export default App;
