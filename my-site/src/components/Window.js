import React, { useState, useRef } from "react";
import "./Window.css";

function Window({ title, children, onClose }) {
  const [pos, setPos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const windowRef = useRef(null);
  const [allowScroll, setAllowScroll] = useState(false);

  React.useEffect(() => {
    const checkBounds = () => {
      if (!windowRef.current) return setAllowScroll(false);
      const rect = windowRef.current.getBoundingClientRect();
      const out = rect.left < 0 || rect.top < 0 || rect.right > window.innerWidth || rect.bottom > window.innerHeight;
      setAllowScroll(out);
    };

    checkBounds();
  }, [pos.x, pos.y]);

  React.useEffect(() => {
    const handler = (e) => {
      if (dragging || !allowScroll) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", handler, { passive: false });
    return () => document.removeEventListener("touchmove", handler, { passive: false });
  }, [dragging, allowScroll]);

  const handleDown = (clientX, clientY) => {
    setDragging(true);
    offset.current = {
      x: clientX - pos.x,
      y: clientY - pos.y,
    };
  };

  const handleMove = (clientX, clientY) => {
    if (!dragging) return;
    setPos({
      x: clientX - offset.current.x,
      y: clientY - offset.current.y,
    });
  };

  const handleUp = () => setDragging(false);

  const handleMouseDown = (e) => handleDown(e.clientX, e.clientY);
  const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
  const handleMouseUp = () => handleUp();

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleDown(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => handleUp();

  return (
    <div
      className="window"
      ref={windowRef}
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="window-bar"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
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