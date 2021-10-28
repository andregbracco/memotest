import React from 'react';

const Grilla = ({rango}) => {

    const listaTotal = [...Array(Number(rango.length * rango.length)).keys()]
    
    
    return (
        <div className='grilla' style={{gridTemplateColumns: "repeat("+rango.length+", 1fr)"}}>
            { listaTotal.map((num, i) => <div key={i} className='card' >-</div>) }
        </div>
    )
};
export default Grilla;