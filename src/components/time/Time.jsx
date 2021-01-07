import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "../header/header.css";

const Time = () => {
   return (
      <div>
        <Router>
          <a href='/ok'><button className="btn-ok" name='3 meses'>3 meses</button></a>
          <a href='/ok'><button className="btn-ok" name='6 meses'>6 meses</button></a>
          <a href='/ok'><button className="btn-ok" name='10 meses'>10 meses</button></a>
          </Router>
      </div>
    );
  }
export default Time;