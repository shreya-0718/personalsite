import React from 'react'
import './Cafe.css'
import { useState, useEffect } from 'react';

// tabs:
import Welcome from '../tabs/Welcome';
import About from '../tabs/About';
import Contacts from '../tabs/Contacts';

function Cafe() {
  const [openWindows, setOpenWindows] = useState([]);

  useEffect(() => {
    setOpenWindows((prev) => (prev.includes("welcome") ? prev : [...prev, "welcome"]));
  }, []);
  
  return (
    <>
        <div className='cafe-wrapper'>
            <div className='ye-shall-float'>
                <img src="cat_cafe.jpg" className="cafe" alt="" />

                <button className="sign" onClick={() => setOpenWindows([...openWindows, "welcome"])}></button>
                <button className="cashier" onClick={() => setOpenWindows([...openWindows, "about"])}></button>
                <button className="menu"></button>
                <button className="contacts" onClick={() => setOpenWindows([...openWindows, "contacts"])}></button>

            </div>
        </div>

        {openWindows.includes("welcome") && (
          <Welcome
            onClose={() =>
              setOpenWindows(openWindows.filter((w) => w !== "welcome"))
            }
          />
        )}

        {openWindows.includes("about") && (
          <About
            onClose={() =>
              setOpenWindows(openWindows.filter((w) => w !== "about"))
            }
          />
        )}

        {openWindows.includes("contacts") && (
          <Contacts
            onClose={() =>
              setOpenWindows(openWindows.filter((w) => w !== "contacts"))
            }
          />
        )}


    </>
  )
}

export default Cafe
