import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

const Buttons = () => {

  return (
    <div>
      <Router>
        <a href='/ok'><button className="btn-ok" name='Listo'>Listo</button></a>
        </Router>
    </div>
  );
}

export default Buttons;



