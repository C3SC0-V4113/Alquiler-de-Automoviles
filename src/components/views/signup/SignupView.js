import React, { useState } from 'react';
import './Signup.css';
import FormSignup from '../../common/web/FormSignup';
import FormSuccess from '../../common/web/FormSuccess';

const SignupView = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://assets.stickpng.com/images/580b585b2edbce24c47b2c54.png' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default SignupView;
