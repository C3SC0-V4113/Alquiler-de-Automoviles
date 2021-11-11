import React, { useContext, useState } from 'react';
import LoginForm from '../../common/web/LoginForm';
import "./Login.css";

function LoginView() {

    return (
        <div className="LoginView">
            <LoginForm />
        </div>
    );
}

export default LoginView;
