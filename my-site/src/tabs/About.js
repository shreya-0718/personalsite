import React from "react";
import Window from "../components/Window";

function About({ onClose }) {
  return (
    <Window title="About Me" onClose={onClose}>
        <p>
          I'm Sh
        </p>
    </Window>
  );
}

export default About;