import React from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/grommet-icons/close";
import "./benefitsDetail.css";

const BenefitsDetail = (props) => {
  return props.productToRender.map((item) => {
    if (item.photo === props.img) {
      <div className="container-benefits-detail">
        <Icon icon={closeIcon} onClick={item.close} />
        <div>
          <img src={item.img} alt="movistar-logo" />
          <h2>{item.name}</h2>
        </div>
        <div>
          <div>
            <p>{item.producer}</p>
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
        <button>Ir a Servicios</button>
      </div>;
    }
  });
};

export default BenefitsDetail;
