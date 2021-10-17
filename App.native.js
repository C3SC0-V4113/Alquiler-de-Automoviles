import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Navigation from './src/components/navigation/Navigation';
import Login from './src/components/views/login/Login';

export default function App() {
  
  const [ auth, setAuth ] = useState(true);

  return(
    <>
      { auth ? (
        <Navigation setAuth = { setAuth } auth = {auth} />
      ) : (
        <Login setAuth = { setAuth } />
      )}
    </>
  )

}
