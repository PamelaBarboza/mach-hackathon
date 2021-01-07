import React from "react";
import { Fragment } from "react";
import Card from 'react-bootstrap/Card';

const SumaryGoals= () => {

  return (
    <Fragment>
      <div className='sumary'>
         {/*  <hr className='firstLine' /> */}
          <p>Tu monto mensual es</p>
          <Card body>$100.000</Card>
      </div>
      <div className='sumary'>
          <p>En 6 meses ahorrarás</p>
          <Card body>$600.000</Card>
      </div>
      <div className='sumary'>
          <p>Recibirás los siguientes machpoint mensuales</p>
          <Card body>$100</Card>
      </div>
      <div className='sumary'>
          <p>Si concluyes con tu misión de manera exitosa recibirás</p>
          <Card body>$200</Card>
      </div>
      <div className='sumary'>
          <p>Concuerdo con la propuesta.
            Revisar terminos y condiciones</p>
      </div>
      <button>Acepto la Misión</button>
    </Fragment >
  )
}
export default SumaryGoals;