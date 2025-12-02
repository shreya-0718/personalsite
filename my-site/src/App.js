import { useEffect, useState } from "react";
import Cafe from "./components/Cafe";
import Cursor from "./components/Cursor";

function App() {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.target.tagName === "BUTTON") {
        setHovering(true);
      }
    };

    const handleLeave = (e) => {
      if (e.target.tagName === "BUTTON") {
        setHovering(false);
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
      <Cursor hovering={hovering} />
      <Cafe />
    </div>
  );
}

export default App;