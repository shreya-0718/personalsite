import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greetings from './home/greetings';
import ProjLink from './home/projlink';
import Socials from './home/socials';

import Home from './home/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <div className="mainrow">
      <Greetings />
      <ProjLink/>
    </div>
    <Socials/> */}

    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
