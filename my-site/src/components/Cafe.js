import React from 'react'
import './Cafe.css'
import { useState } from 'react';

// tabs:
import Welcome from '../tabs/Welcome';
import About from '../tabs/About';

function Cafe() {
  const [openWindows, setOpenWindows] = useState([]);
  return (
    <>
        <div className='cafe-wrapper'>
            <div className='ye-shall-float'>
                <img src="cat_cafe.jpg" className="cafe" alt="" />

                <button className="sign" onClick={() => setOpenWindows([...openWindows, "welcome"])}></button>
                <button className="cashier" onClick={() => setOpenWindows([...openWindows, "about"])}></button>
                <button className="menu"></button>

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


    </>
  )
}

export default Cafe
