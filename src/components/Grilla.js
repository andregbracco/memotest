import React from 'react';

const Grilla = ({rango}) => {
    
    return (
        <div className='grilla'>
            { rango.map(num => <div className='cards-conteiner'>               
                                { rango.map(num => <div className='card' >-</div>) }                  
                              </div>          
            )}
        </div>
    )
};
export default Grilla;