import React, { createContext, useState } from "react";

export const CursorContext = createContext({
  cursorType: "cat",
  setCursorType: () => {},
});

export function CursorProvider({ children }) {
  const [cursorType, setCursorType] = useState("cat");

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
}

export default CursorContext;
