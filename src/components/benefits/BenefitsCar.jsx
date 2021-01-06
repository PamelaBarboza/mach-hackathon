import React, { useState } from "react";
import BenefitsDetail from "../benefitsDetail/BenefitsDetail";

const BenefitsCar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [imgProduct, setImgProduct] = useState(undefined);
  const [productName, setProductName] = useState(undefined);
  const openModal = (e) => {
    setImgProduct(
      e.currentTarget.parentElement.parentElement.firstChild.getAttribute("src")
    );

    props.products.map((item) => {
      if (item.photo === imgProduct) {
        setProductName(item.name);
        console.log(productName);
      }
    });

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return props.products.map((item) => {
    return (
      <div>
        <img src={item.photo} alt="" />
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p onClick={openModal}>Ver más detalles</p>
        </div>
        <div>
          {showModal === false ? null : (
            <BenefitsDetail
              img={item.photo}
              name={item.name}
              producer={item.description}
              close={closeModal}
            />
          )}
        </div>
      </div>
    );
  });
};

export default BenefitsCar;
