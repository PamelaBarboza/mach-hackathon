import React from "react";
import bot1 from "../../img/bot1.png";
import { Link } from "react-router-dom";
import "../messageSuccess/messageSuccess.css"

const MessageSuccess  = () => {
    return (
        <div className="success">
            <h1>¡TU MISIÓN FUE CREADA CON ÉXITO!</h1>
            <img src={bot1} alt="img-bot1" />
      <Link to="/">
      <div className="container-benefits">
      <button>Cerrar</button>
        </div>
      </Link>
        </div>
    )
}

export default MessageSuccess;
