import React, { useState } from "react";
import BenefitsDetail from "../benefitsDetail/BenefitsDetail";

const BenefitsCar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({
    photo: "",
    description: "",
    name: "",
  });


  const openModal = (e) => {
    setProduct({
      photo: e.currentTarget.parentElement.parentElement.firstChild.getAttribute(
        "src"
      ),
      description: e.currentTarget.parentElement.children[1].textContent,
      name: e.currentTarget.parentElement.children[0].textContent,
    });

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const products = props.products.map((item) => {
    return (
      <div className="container-car" key={item.id}>
        <img src={item.photo} alt="" />
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p onClick={openModal}>Ver más detalles</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      {products}
      {showModal === false ? null : (
        <BenefitsDetail
          img={product.photo}
          name={product.name}
          producer={product.description}
          close={closeModal}
        />
      )}
    </div>
  );
};

export default BenefitsCar;
