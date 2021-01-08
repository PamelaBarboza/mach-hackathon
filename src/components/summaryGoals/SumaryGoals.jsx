import React from "react";
import { Link } from "react-router-dom";
import "./sumaryGoals.css";
import coin from "../../img/coin.png";

const SumaryGoals = () => {
  return (
    <div className="container-sumary">
      <div className="expected-goal">
        <div> </div>
        <div>
          {" "}
          <span>Meta esperada</span> <span>$600.000</span>{" "}
        </div>
      </div>
      <div className="sumary">
        <div>
          <div>
            <p>Tu monto mensual</p>
            <p>Tiempo estimado</p>
          </div>
          <div>
            <p>$100.000</p>
            <p>6 meses</p>
          </div>
        </div>
        <hr />
        <h3>Bonus</h3>
        <div>
          <div>
            <p>Machpoint mensual</p>
            <p>Bono completitud</p>
          </div>
          <div>
            <div className="container-coin">
              <img src={coin} alt="img-coin" />
              <p>100</p>
            </div>
            <div className="container-coin">
              <img src={coin} alt="img-coin" />
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-check">
        <input type="checkbox" />
        <p>Concuerdo y acepto la propuesta</p>
      </div>
      <p>Términos y condiciones</p>
      <div className="button-sumary">
        <Link to="/messageSuccess">
          <button>Continuar</button>{" "}
        </Link>
      </div>
      <hr />
    </div>
  );
};
export default SumaryGoals;
