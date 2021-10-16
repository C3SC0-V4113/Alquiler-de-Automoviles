import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          ¡Únete a nosotros ahora mismo! Crea tu propia cuenta rellenando el siguiente
          pequeño formulario.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Nombre del usuario</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Introduzca su nombre de usuario'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Correo electrónico</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Introduzca su correo electrónico'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Introduzca su contraseña'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirmar contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirme su contraseña'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Registrarse
        </button>
        <span className='form-input-login'>
        ¿Ya tienes una cuenta? Inicia sesión <a href="#">aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
