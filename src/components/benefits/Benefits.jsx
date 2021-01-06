import React, { useState } from "react";
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
import BenefitsDetail from "../benefitsDetail/BenefitsDetail";

const Benefits = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
          <div>
            <img src={movistarLogo} alt="" />
            <div>
              <h3>Movistar</h3>
              <p>Canjea tus puntos y paga tu cuenta</p>
              <p onClick={openModal}>Ver más detalles</p>
            </div>
          </div>
          <div>
            <img src={houseLogo} alt="" />
            <div>
              <h3>House Bar</h3>
              <p>40% Descuento en productos seleccion</p>
              <p onClick={openModal}>Ver más detalles</p>
            </div>
          </div>
          <div>
            <img src={cabifyLogo} alt="" />
            <div>
              <h3>Cabify</h3>
              <p>Gana hasta $25.000 con primeros viajes solicitados</p>
              <p onClick={openModal}>Ver más detalles</p>
            </div>
          </div>
          <div>
            <img src={lippiLogo} alt="" />
            <div>
              <h3>Lippi</h3>
              <p>15% descuento adicional en la tienda</p>
              <p onClick={openModal}>Ver más detalles</p>
            </div>
          </div>
          <div>
            <img src={hakaLogo} alt="" />
            <div>
              <h3>Haka Honu</h3>
              <p>¡Aprovecha este descuento exclusivo y disfruta de una</p>
              <p onClick={openModal}>Ver más detalles</p>
            </div>
          </div>
          <div>
            <img src={rappiLogo} alt="" />
            <div>
              <h3>Rappi</h3>
              <p>Delivery gratis, pagando con MACH</p>
              <p onClick={openModal}>Ver más detalles</p>
            </div>
          </div>
          <div>
            <img src={nikLogo} alt="" />
            <div>
              <h3>NIK Gamers</h3>
              <p>Descuento 30% en tu próxima compra</p>
              <p onClick={openModal}>Ver más detalles</p>
            </div>
          </div>
          <div>
            <img src={donutsLogo} alt="" />
            <div>
              <h3>Dunkin'Donuts</h3>
              <p>20% Descuento en combos !lleva mas, por menos!</p>
              <p onClick={openModal}>Ver más detalles</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showModal === false ? null : (
          <BenefitsDetail
            img={donutsLogo}
            name="Dunkin'Donuts"
            producer="20% Descuento en combos !lleva mas, por menos!"
            close={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default Benefits;
