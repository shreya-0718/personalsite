import React, { useEffect, useState } from 'react';
import './Cursor.css';

function Cursor({ hovering }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicked(true);
    const up = () => setClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  const cursorImg = (clicked || hovering) ? "meow-click.png" : "meow-still.png";
  const cursorClass = (clicked || hovering) ? "cursor-glow" : "cursor";

  return (
    <img
      src={cursorImg}
      alt="cursor"
      className={cursorClass}
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

export default Cursor;