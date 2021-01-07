import React from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/grommet-icons/close";
import status from "../../img/status.png";
import movistarLogo from "../../img/movistar2.png";
import { Link } from "react-router-dom";
import "./benefitMovistar.css";

const BenefitMovistar = (props) => {
  return (
    <div className="container-benefits-movistar">
      <div>
        <img src={status} alt="status-img" />
      </div>
      <div>
        <Link to="/benefits">
          <Icon icon={closeIcon} onClick={props.close} />
        </Link>
        <div>
          <img src={movistarLogo} alt="movistar-logo" />
          <h2>Movistar</h2>
        </div>
        <div>
          <div>
            <p>
              Canjea <strong>Machpoint</strong> y paga tu cuenta.
            </p>
          </div>
          <div>
            <p>
              {" "}
              <strong>‍¿Cómo activar el beneficio? </strong>
            </p>
            <p>
              1. Ingresar a la App sección <strong>Servicios</strong>
            </p>
            <p>
              2. Selecciona <strong>“Recarga servicios prepago”</strong> o{" "}
              <strong>“Paga tus cuentas”</strong>
            </p>
            <p>3. Elige la opción que más te convenga</p>
            <p>
              4. Antes de pagar seleccionar la opción{" "}
              <strong> “Pagar con Machpoints” </strong> y agregar el monto que
              desees.{" "}
            </p>
          </div>
          <div>
            <p>
              <strong>Términos y condiciones</strong>
            </p>
            <p>
              La entrega y calidad de los bienes y la prestación de servicios no
              bancarios ofrecidos, como asimismo los descuentos en el comercio,
              son de exclusiva responsabilidad de la empresa que realiza tal
              actividad, no cabiéndole al banco intervención alguna en su
              entrega o en la ulterior atención que ellos demanden.
            </p>
          </div>
        </div>
        <Link to="/home">
          <button>Ir a Inicio</button>
        </Link>
      </div>
    </div>
  );
};

export default BenefitMovistar;
