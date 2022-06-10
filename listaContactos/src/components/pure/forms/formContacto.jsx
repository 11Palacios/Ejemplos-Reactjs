import React , { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class';

const FormContacto = ({add}) => {

    const nombreRef = useRef('');
    const apellidosRef = useRef('');
    const telefonoRef = useRef('');
    const emailRef = useRef('');

    function addContacto(e){
        e.preventDefault();
        const newContacto = new Contacto(
            nombreRef.current.value,
            apellidosRef.current.value,
            telefonoRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContacto);
    }



    return (
        <form onSubmit={addContacto} className='d-flex justify-content-center align-items-center mb-4 form-back'>
            <div className='form-outline flex-fill row'>
                <div className='col-6'>
                    <input ref={nombreRef} id='inputNombre' type='text' className='form-control form-control-lg' placeholder='Nombre' required autoFocus/>
                    <input ref={apellidosRef} id='inputApellidos' type='text' className='form-control form-control-lg' placeholder='Apellidos' required/>
                </div>
                <div className='col-6'>
                    <input ref={telefonoRef} id='inputTelefono' type='number' className='form-control form-control-lg' placeholder='Telefono' required/>
                    <input ref={emailRef} id='inputEmail' type='email' className='form-control form-control-lg' placeholder='Email' required />
                </div>
                <div className='row ms-0'>
                        <button type='submit' className='btn btn-success btn-lg'>Crear</button>
                </div>                      
            </div>
        </form>
    );
};


FormContacto.propTypes = {
add: PropTypes.func.isRequired,
};


export default FormContacto;

