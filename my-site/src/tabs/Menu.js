import React from "react";
import Window from "../components/Window";

function Menu({ onClose, onNavigate }) {
  const handleLinkClick = (tabName) => {
    onNavigate(tabName);
  };

  return (
    <Window title="Menu" onClose={onClose}>
      <p>
        Want to explore the site without having to click on everything? 
      </p>

      <p>
        <button className="menu-link" onClick={() => handleLinkClick("welcome")}>
          → Welcome
        </button>
          
        <br></br>

        <button className="menu-link" onClick={() => handleLinkClick("about")}>
          → About
        </button>
        
        <br></br>
          
        <button className="menu-link" onClick={() => handleLinkClick("contacts")}>
          → Contact Info
        </button>
      </p>
    </Window>
  );
}

export default Menu;
