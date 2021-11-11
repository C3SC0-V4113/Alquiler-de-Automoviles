import React, { useState, useContext } from 'react';
import LoginForm from '../../common/web/LoginForm';
import FormSignup from '../../common/web/FormSignup';

//CONTEXT
import { AuthContext } from '../../../contexts/AuthContext';

const SignupView = () => {
	const [ registrar, setRegistrar ] = useState(false);
	return (
		<>
			{ registrar ? (<FormSignup setRegistrar = { setRegistrar } registrar = {registrar} />) : (
				<div className='form-container'>
					<span className='close-btn'>×</span>
					<div className='form-content-left'>
						<img className='form-img' src='https://assets.stickpng.com/images/580b585b2edbce24c47b2c54.png' alt='spaceship' />
					</div>
					<LoginForm setRegistrar = { setRegistrar } registrar = {registrar} />
				</div>
			) }
		</>
	);
};

export default SignupView;
