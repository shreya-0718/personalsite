import React from "react";
import Window from "../components/Window";

function Welcome({ onClose }) {
  return (
    <Window title="Welcome" onClose={onClose}>
      <p>
        Welcome to my little corner of the interwebs. Feel free to wander around,
        you might find something you like :)
        <br /><br />
        Don't forget your boba!
      </p>
    </Window>
  );
}

export default Welcome;