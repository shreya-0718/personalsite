import React from "react";
import Window from "../components/Window";

function About({ onClose }) {
  return (
    <Window title="About Me" onClose={onClose}>
        <p>
          I'm Shreya, an incoming freshman at Columbia University (co '30) who loves exploring code, hardware,
          and physics! Aside from these, I love competing in TSA (Technology Student Association) and FRC (FIRST
          Robotics Competition), studying math, or playing and writing songs!
          <br/> <br />
          Psst... for contact info, talk to the café's visitor!
        </p>
    </Window>
  );
}

export default About;