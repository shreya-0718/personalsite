import React from 'react'
import './Cafe.css'
import Window from './Window'
import { useState } from 'react';

function Cafe() {
  const [open, setOpen] = useState(null);

  return (
    <>
        <div className='cafe-wrapper'>
            <div className='ye-shall-float'>
                <img src="cat_cafe.jpg" className="cafe" alt="" />

                <button className="sign" onClick={() => setOpen("about")}></button>
                <button className="menu"></button>
                <button className="cashier"></button>

            </div>
            

            

        </div>
        {open === "about" && (
          <Window title="About Me" onClose={() => setOpen(null)}>
            <p>Hello!!</p>
          </Window>
        )}


    </>
  )
}

export default Cafe
