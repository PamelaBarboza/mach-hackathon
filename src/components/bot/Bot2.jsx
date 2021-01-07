import React from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/grommet-icons/close";
import bot2 from "../../img/bot2.png";
import status from "../../img/status.png";
import { Link } from "react-router-dom";
import "./bot2.css";

const Bot2 = () => {
  return (
    <div className="container-bot2">
      <img src={status} alt="img-status" />
      <Icon icon={closeIcon} />
      <img src={bot2} alt="img-bot2" />
      <div>
        <h3>Los Machpoint son puntos que acumulas por cada transacción</h3>
        <p>
          Tambien puedes ganar <strong>Machpoints</strong> con cada misión que
          completes.{" "}
        </p>
        <p>
          {" "}
          Recuerda que mientras más misiones termines, aumentarás tus{" "}
          <strong>Machpoints</strong> y podrás cambiarlos por lo que más te
          guste.
        </p>
      </div>
      <Link to="/bot3">
        {" "}
        <button>Quiero más</button>
      </Link>
      <hr />
    </div>
  );
};

export default Bot2;
