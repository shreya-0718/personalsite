import React, { useState, useRef } from "react";
import "./Window.css";

function Window({ title, children, onClose }) {
  const [pos, setPos] = useState({ x: 120, y: 120 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPos({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div
      className="window"
      style={{ left: pos.x, top: pos.y }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="window-bar" onMouseDown={handleMouseDown}>
        <span className="window-title">{title}</span>
      </div>
      <button className="close-btn" onClick={onClose}>
        <img src="x.png" alt="close" />
      </button>

      <div className="window-content">{children}</div>
    </div>
  );
}

export default Window;