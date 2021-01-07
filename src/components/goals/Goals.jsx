import React from "react";
import "../header/header.css";
import "../win/wins.css";


    const Goals = () => {
        const [name, setName] = React.useState('')

        const saveData = (e) => {
            e.preventDefault()

            if(!name.trim()){
                console.log('Por Favor, ingresar datos requeridos')
                return
            }
            // Si ambos campos están correctos, procesamos los datos

            console.log('Procesando datos...'  +  name +  ' ')
            e.target.reset()
            setName('')
        }

        return (
            <div>
            <hr/>
            <h2>Colócale un nombre</h2>
            <form onSubmit={ saveData }>
                <input
                type="text"
                placeholder="Ejemplo: Celular nuevo"
                className="Form-control mb-2"
                onChange={ (e) => setName(e.target.value) }
                />
               {/*  <button className="btn btn-primary btn-block" type="submit">Listo</button> */}
            </form>
            <button>Listo</button>
        </div>
    );
}

export default Goals;