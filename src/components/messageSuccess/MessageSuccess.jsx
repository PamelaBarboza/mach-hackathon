import React from "react";
import bot1 from "../../img/bot1.png";
import { Link } from "react-router-dom";
import "../messageSuccess/messageSuccess.css";


const MessageSuccess  = () => {
    return (
        <div className="container-succsse">
            <h1>¡TU MISIÓN FUE CREADA CON ÉXITO!</h1>
            <div className="machpoint">
            <p1>Agregamos a tus Machpoint</p1>
            
            </div>
            <img src={bot1} alt="img-bot1" />
      <Link to="/bot2">
      <div className="container-benefits">
      <button>Siguiente Misión</button>
        </div>
      </Link>
    </div>
  );
};

export default MessageSuccess;
