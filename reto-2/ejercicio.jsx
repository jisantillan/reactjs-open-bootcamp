import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Ejercicio = (props) => {
   
    initialState = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
     };

     const [state,setState] = useState(initialState);

     const tick =() =>{
        setState(...state, state.edad +1, state.fecha = new Date())
        }

    useEffect(()=> {
        const timerId = setInterval(()=>{
            tick()
        },1000);

        return () =>{
            clearInterval(timerId);
        }
    });

    return (
        <div>
        <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
        </h2>
        <h3>{state.nombre} {state.apellidos}</h3>
        <h1>Edad: {state.edad}</h1>
        </div>
    );
}

export default Ejercicio;