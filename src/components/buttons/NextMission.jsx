import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

const NextMission= () => {

  return (
    <div>
      <Router>
        <a href='/ok'><button className="btn-ok" name='Siguiente Misión'>Siguiente Misión</button></a>
        </Router>
    </div>
  );
}

export default NextMission;