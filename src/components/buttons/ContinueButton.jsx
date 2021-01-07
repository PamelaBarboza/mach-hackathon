import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

const ContinueButtons = () => {

  return (
    <div>
      <Router>
        <a href='/ok'><button className="btn-ok" name='Continuar'>Continuar</button></a>
        </Router>
    </div>
  );
}

export default ContinueButtons;
