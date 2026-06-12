// cursorState.js
let cursorType = "cat";
let listeners = [];

export function getCursor() {
  return cursorType;
}

export function setCursor(type) {
  cursorType = type;
  listeners.forEach((fn) => fn(cursorType)); 
}

export function subscribe(fn) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
}
