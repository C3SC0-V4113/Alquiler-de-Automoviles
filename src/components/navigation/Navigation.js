import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Saludo from '../views/saludo/Saludo';

const Drawer = createDrawerNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Inicio' component={Saludo} />
                <Drawer.Screen name='Vechiculos' component={Saludo} />
                <Drawer.Screen name='Marcas y Modelos' component={Saludo} />
                <Drawer.Screen name='Alquileres' component={Saludo} />
                <Drawer.Screen name='Clientes' component={Saludo} />
                <Drawer.Screen name='Perfil' component={Saludo} />
                <Drawer.Screen name='Salir' component={Saludo} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;