import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../amount/amount.css";

const Time = () => {
  return (
    <div className="amount-text">
      <h2>¿En cuánto tiempo quieres alcanzar tu meta?</h2>
      <div className="amount">
        <button type="button">3 meses</button>
        <button type="button">6 meses</button>
        <button type="button">10 meses</button>
        {/*  <a href='/ok'><button className="btn-ok" name='monto'>$300.000</button></a>
          <a href='/ok'><button className="btn-ok" name='monto'>$600.000</button></a>
          <a href='/ok'><button className="btn-ok" name='monto'>$1.000.000</button></a> */}
      </div>
      <div className="button-amount">
        <Link to="/sumaryGoals">
          <button>Continuar</button>{" "}
        </Link>
      </div>
      <hr />
    </div>
  );
};
export default Time;
