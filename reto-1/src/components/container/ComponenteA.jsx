import React from 'react';
import PropTypes from 'prop-types';
import ComponenteB from '../ComponenteB'
import { Contacto } from '../../models/Contacto.class';

const ComponenteA = () => {
    const contacto = new Contacto("javier", "santillan", "javier@gmail.com", true);
    return (
        <div>
            <ComponenteB contacto={contacto}></ComponenteB>
        </div>
    );
};

export default ComponenteA;