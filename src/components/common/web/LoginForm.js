import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';

//CONTEXT
import { AuthContext } from '../../../contexts/AuthContext';

//VALIDATION
import { validationString } from '../../../utils/Validations';

//FETCHAPI
import FetchAPI from '../../../utils/FetchAPI';

//URL API
import { urlAuth } from '../../../consts/URLs';
import e from 'cors';

function LoginForm({ registrar, setRegistrar }) {
    const history = useHistory();
    const { setIdUser, changeAuth, setTypeUser } = useContext(AuthContext);
    
    const [ datos, setDatos ] = useState({
        id_tipo_usuario: 3,
        nombres: '',
        apellidos: '',
        email: '',
        usuario: '',
        password: '',
        password_confirm: '',
        fecha_nacimiento: '',
        direccion: '',
        telefono: ''
    });

    const LoginAPi = () => {
        const authAPI = FetchAPI(urlAuth, 'POST', datos);

        authAPI.then( user => {
            if(user.message)
            {
                alert(user.message);
            }
            else
            {
                setIdUser(user.usuario.id)
                setTypeUser(user.usuario.tipo_usuario)
                changeAuth();
                history.push('/public/Home')
            }
        })
        .catch( err => {
            console.log('error:'+err);
        })
    }

    //FUNCION PARA INICIAR SESION EN EL LOGIN
    const loginUser = () => {
        if( validationString(datos.usuario) )
        {
            if( validationString(datos.password) )
            {
                LoginAPi();
            }
            else
            {
                alert( 'Ingrese su contraseña')
            }
        }
        else
        {
            alert('Ingrese su usuario')
        }
    }

    return (
        <div className='form-content-right'>
            <form className='form'>
                <div className="form-inner">
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="name">Usuario:</label>
                        <input type="text" name="name" id="name" onChange={e => { setDatos({...datos, usuario: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" name="password" id="password" onChange={e => { setDatos({...datos, password: e.target.value})}}/>
                    </div>
                    <div className='row'>
                        <span className='form-label'>
                            ¿Aún no tienes cuenta? Registrate <a href="" onClick = { (e) => { e.preventDefault(); setRegistrar(!registrar) } }>aquí</a>
                        </span>
                        <input 
                            type="submit" value="Ingresar"
                            onClick = { (e) => {e.preventDefault(); loginUser()}  }
                        />

                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
