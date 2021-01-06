import React, { useState, useEffect, useRef } from "react";
import "./benefits.css";
import movistarLogo from "../../media/movistar.png";
import houseLogo from "../../media/house.png";
import cabifyLogo from "../../media/cabify.png";
import lippiLogo from "../../media/lippi.png";
import hakaLogo from "../../media/haka.png";
import rappiLogo from "../../media/movistar.png";
import nikLogo from "../../media/nik.png";
import donutsLogo from "../../media/donuts.png";
import { Icon } from "@iconify/react";
import bxMap from "@iconify-icons/bx/bx-map";
import BenefitsCar from "./BenefitsCar";

const Benefits = () => {
  let [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setCatalogue((catalogue = data)));
  }, []);

  return (
    <div>
      <div className="container-benefits">
        <button>
          <Icon icon={bxMap} />
          Buscar descuentos cercanos
        </button>
        <select>
          <option value="">Todas las categorías</option>
          <option value="santiago">Tecnología</option>
          <option value="las condes">Gastronomía</option>
          <option value="providencia">Vestuario</option>
          <option value="lo espejo">Entretenimiento</option>
          <option value="estación central">Servicios</option>
        </select>
        <div>
          <BenefitsCar products={catalogue} key="list" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
