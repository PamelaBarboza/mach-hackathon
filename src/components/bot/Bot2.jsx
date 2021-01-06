import React from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/grommet-icons/close";
import bot2 from "../../media/bot2.png";
import { Link } from "react-router-dom";
import "./bot2.css";

const Bot2 = () => {
  return (
    <div className="container-bot2">
      <Icon icon={closeIcon} />
      <img src={bot2} alt="img-bot2" />
      <div>
        <h3>Los Machpoint son puntos que acumulas por cada transacción</h3>
        <p>
          Tambien puedes ganar Machpoints con cada misión que completes.
          Recuerda que mientras más misiones termines aumentarás tus Machpoints
          y podrás cambiarlos por lo que más te guste
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
