import React, {useContext, useState} from 'react';
import LoginForm from '../../common/web/LoginForm';
import "./Login.css";

//CONTEXT
import { AuthContext } from '../../../contexts/AuthContext';

function LoginView() {

    const { isAuth, setIsAuth, setTypeUser } = useContext(AuthContext);

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password){
        console.log("¡Bienvenido!");
        setUser({
            name: details.name,
            email: details.email
        })
        } else {
            console.log("Las credenciales no coinciden.");
            setError("Las credenciales no coinciden.");
        }
    }
    const Logout = () => {
        setUser({ name: "", email:""});
    }
    return (
        <div className="LoginView">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>¡Bienvenido <span>{user.name}</span>!</h2>
                    <button onClick={Logout}>Regresar</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    );
}

export default LoginView;
