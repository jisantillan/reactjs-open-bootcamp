import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/Contacto.class';

const ComponenteB = ({contacto}) => {
    const [conectado, setConectado ] = useState(contacto.conectado);
    const cambiarContacto = () => {
        if(conectado){
            setConectado(false);
        }
        else{
            setConectado(true)
        }
    }
    return (
        <div>
            <h1>Nombre: {contacto.nombre} {contacto.apellido}</h1>
            <h2>Email: {contacto.email}</h2>
            <h4>{conectado?'Contacto En Línea':'Contacto No Disponible'}</h4>
            <div>
                <button onClick={cambiarContacto}>Cambiar conectado</button>   
            </div>
        </div>
    );
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ComponenteB;