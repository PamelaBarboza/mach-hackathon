import React from "react";
import bot4 from "../../img/bot4.png";
import coin3 from "../../img/coin3.png";
import { Link } from "react-router-dom";
import "../messageSuccess/messageSuccess.css";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/grommet-icons/close";

const MessageSuccess = () => {
  return (
    <div className="container-success">
      <Icon icon={closeIcon} />
      <h1>¡TU MISIÓN FUE CREADA CON ÉXITO!</h1>
      <p>Agregamos a tus Machpoint</p>
      <div className="machpoint">
        <img src={coin3} alt="coin-img" />
        <span>10</span>
      </div>
      <img src={bot4} alt="img-bot1" />
      <Link to="/nextMission">
        <div className="container-button-success">
          <button>Siguiente Misión</button>
        </div>
      </Link>
    </div>
  );
};

export default MessageSuccess;
