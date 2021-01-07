import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

const IacceptMission= () => {

  return (
    <div>
      <Router>
        <a href='/ok'><button className="btn-ok" name='Acepto Misión'>Acepto Misión</button></a>
        </Router>
    </div>
  );
}

export default IacceptMission;
