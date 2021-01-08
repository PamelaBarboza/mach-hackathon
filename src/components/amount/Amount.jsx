import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../amount/amount.css";

const Amount = () => {
  return (
    <div className="amount-text">
      <h2>Elige el monto que quieres ahorrar</h2>
      <div className="amount">
        <button type="button" body>
          $300.000
        </button>
        <button type="button" body>
          $600.000
        </button>
        <button type="button" body>
          $1.000.000
        </button>
        {/*  <a href='/ok'><button className="btn-ok" name='monto'>$300.000</button></a>
          <a href='/ok'><button className="btn-ok" name='monto'>$600.000</button></a>
          <a href='/ok'><button className="btn-ok" name='monto'>$1.000.000</button></a> */}
      </div>
      <div className="button-amount">
        <Link to="/time">
          <button>Continuar</button>{" "}
        </Link>
      </div>
      <hr />
    </div>
  );
};
export default Amount;
