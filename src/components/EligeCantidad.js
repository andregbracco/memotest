import React from 'react';

const EligeCantidad = ({setRango}) => {

    function tomarCantidad(evento) {
        let rango1 = [...Array(Number(evento.target.value)).keys()]
        setRango(rango1)      
    }
    return (
        <div>
            <label>Elige cantidad: </label>
            <select onChange={tomarCantidad}>
                <option ></option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </div>
    )
}
export default EligeCantidad;