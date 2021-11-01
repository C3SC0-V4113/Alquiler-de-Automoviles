import React, { useEffect } from 'react';

//LOGOUT PARA MOVIL
export const Logout = ({ route }) => {
    
    useEffect( () => {
        route.params.setAuth(false);
    }, [])

    return null
}

//LOGOUT PARA WEB
export const LogoutWeb = () => {}