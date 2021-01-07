import React from "react";


    const GoalsForm = () => {
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
            <p>Colócale un nombre</p>
            <form onSubmit={ saveData }>
                <input
                type="text"
                placeholder="Ejemplo: Celular nuevo"
                className="Form-control mb-2"
                onChange={ (e) => setName(e.target.value) }
                />
               {/*  <button className="btn btn-primary btn-block" type="submit">Listo</button> */}
            </form>
        </div>
    );
}

export default GoalsForm;