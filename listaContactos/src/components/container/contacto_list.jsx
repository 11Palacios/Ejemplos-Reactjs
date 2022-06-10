import React , {useState} from 'react';
import ContactoComponent from '../pure/contacto';
import { Contacto } from '../../models/contacto.class';
import FormContacto from '../pure/forms/formContacto';


const ContactoList = () => {
    const contacto1 = new Contacto('Nombre1','Apellidos','666666666','test1@test.com',false);
    const contacto2 = new Contacto('Nombre2','Apellidos2','777777777','test2@test.com',true);
    const contacto3 = new Contacto('Nombre3','Apellidos3','888888888','test3@test.com',false);

    const [contactos, setContactos] = useState([contacto1, contacto2, contacto3]);

    function conectar(contacto){
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos[index].conectado = !tempContactos[index].conectado;
        setContactos(tempContactos);
    }

    function borrar(contacto){
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.splice(index,1);
        setContactos(tempContactos);
    }

    function addContacto(contacto){
        const tempContactos = [...contactos];
        tempContactos.push(contacto);
        setContactos(tempContactos);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p3'>
                        <h3>Lista de Contactos</h3>
                    </div>
                    <div className='card-body overflow' style={ {position: 'relative', height: '400px'} }>
                        <table className='table table-raya table-hover-raya'>
                            <thead>
                                <tr>
                                    <th scope='col'></th>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellidos</th>
                                    <th scope='col'>Teléfono</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'><i class="bi bi-gear-fill"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                            {contactos.map((contacto, index) =>{
                                return(
                                    <ContactoComponent contacto={contacto} key={index} conectar={conectar} borrar={borrar}/>
                                )
                            })}
                            </tbody>
                        </table>
                        {contactos.length === 0 ? (<h3>No existen Contactos</h3>) : ("")}
                    </div>
                </div>
            </div>
            <FormContacto add={addContacto}/>
        </div>
    );
}

export default ContactoList;
