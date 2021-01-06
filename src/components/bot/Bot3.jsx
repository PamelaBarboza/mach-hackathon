import React from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/grommet-icons/close";
import bot3 from "../../media/bot1.png";
import "./bot3.css";

const Bot3 = () => {
  return (
    <div className="container-bot3">
      <Icon icon={closeIcon} />
      <div>
        <h3>¿Como obtengo los beneficios?</h3>
        <p>
          En la sección “Gana”, ahí podrás encontrar el beneficio que más te
          guste. Sigue los pasos que te indica el detalle de cada uno y ¡Listo!
        </p>
      </div>
      <img src={bot3} alt="img-bot3" />
      <button>Comenzar</button>
      <hr />
    </div>
  );
};

export default Bot3;
