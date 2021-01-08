import React from "react";
import { Link } from "react-router-dom";
import "../goals/goals.css";

const Goals = () => {
  const [name, setName] = React.useState("");

  const saveData = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      console.log("Por Favor, ingresar datos requeridos");
      return;
    }
    // Si ambos campos están correctos, procesamos los datos

    console.log("Procesando datos..." + name + " ");
    e.target.reset();
    setName("");
  };

  return (
    <div className="container-goals1">
      <div>
        <h2 className="name-goals1">Colócale un nombre</h2>
        <form onSubmit={saveData}>
          <input
            className="form-goals1"
            type="text"
            placeholder="Ejemplo: Celular nuevo"
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
      <div className="button-goals1">
        <Link to="/amount">
          <button>Listo</button>{" "}
        </Link>
        <hr />
      </div>
    </div>
  );
};

export default Goals;

