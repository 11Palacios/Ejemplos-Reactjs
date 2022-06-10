import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactoComponent = ({contacto , conectar, borrar}) => {
    const estado = (contacto.conectado ? 'online' : 'offline');
    const toggleOn = (<i className='bi bi-toggle-on pointer online'></i>);
    const toggleOff = (<i className='bi bi-toggle-off pointer offline'></i>);
    const trash = (<i className='bi bi-trash pointer trash'></i>);
    return (
        <tr>
            <th className={estado}><i className='bi bi-circle-fill'></i></th>
            <th>{contacto.nombre}</th>
            <td>{contacto.apellidos}</td>
            <td>{contacto.telefono}</td>
            <td>{contacto.email}</td>
            <td>
                <span onClick={() => conectar(contacto)}>{contacto.conectado ? toggleOn : toggleOff}</span>
                <span onClick={() => borrar(contacto)}>{trash}</span>
            </td>
        </tr>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};


export default ContactoComponent;
