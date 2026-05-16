import React from "react";
import Window from "../components/Window";

function Contacts({ onClose }) {
  return (
    <Window title="Contact Info" onClose={onClose}>
      <p style={{ marginBottom: "1rem" }}>
        thanks for stopping by — here’s where you can find me around the internet :)
      </p>

      <p>
        Instagram: <a href="https://www.instagram.com/its.shreyaluu/" target="_blank" rel="noopener noreferrer">@its.shreyaluu</a> <br/>
        GitHub: <a href="https://github.com/shreya-0718/" target="_blank" rel="noopener noreferrer">shreya-0718</a> <br/>
        LinkedIn: <a href="https://www.linkedin.com/in/shreya-chougule-8b2458381/" target="_blank" rel="noopener noreferrer">Shreya Chougule</a> <br/>
        Email: <a href="mailto:shreyachougule796@gmail.com" target="_blank" rel="noopener noreferrer">shreyachougule796@gmail.com</a>
        
      </p>

    </Window>
  );
}

export default Contacts;
