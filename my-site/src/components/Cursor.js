import React, { useContext, useEffect, useState } from "react";
import { CursorContext } from "./CursorContext";
import "./Cursor.css";

const imageMap = {
  cat: {
    still: "/meow-still.png",
    click: "/meow-click.png",
  },
  boba: {
    still: "/meow-still-boba.png",
    click: "/meow-click-boba.png",
  },
};

function Cursor() {
  const { cursorType } = useContext(CursorContext);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicked(true);
    const up = () => setClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    const handleOver = (e) => {
      if (e.target && e.target.closest && e.target.closest("button")) setHovering(true);
    };
    const handleOut = (e) => {
      if (e.target && e.target.closest && e.target.closest("button")) setHovering(false);
    };
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  const activeType = cursorType || "cat";

  const imgSrc =
    clicked || hovering
      ? imageMap[activeType]?.click || imageMap.cat.click
      : imageMap[activeType]?.still || imageMap.cat.still;

  const cursorClass = (clicked || hovering) ? "cursor-glow" : "cursor";

  return (
    <img
      src={imgSrc}
      alt="cursor"
      className={`cursor-img ${cursorClass}`}
      style={{ left: pos.x + "px", top: pos.y + "px" }}
    />
  );
}

export default Cursor;
