import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import "../amount/amount.css"

const Time= () => {
   return (
      <div className="amount-text">
        <h2>¿En cuánto tiempo quieres alcanzar tu meta?</h2>
        <Router>
          <div className="amount">
        <Card body>3 meses</Card>
        <Card body>6 meses</Card>
        <Card body>10 meses</Card>
         {/*  <a href='/ok'><button className="btn-ok" name='monto'>$300.000</button></a>
          <a href='/ok'><button className="btn-ok" name='monto'>$600.000</button></a>
          <a href='/ok'><button className="btn-ok" name='monto'>$1.000.000</button></a> */}
          </div>
          <div className="button-amount">
            <Link
            to="/sumaryGoals">
                <button>Continuar</button>{" "}
                </Link>
            </div>
          </Router>
      </div>
    );
  }
export default Time;