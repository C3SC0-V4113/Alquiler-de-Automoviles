import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

const Users = [{
    nombres: 'Fernando Xavier',
    apellidos: 'Maldonado Canjura',
    correo: 'fernanxavi@mail.com',
    usuario: 'Xavier6',
    password: '12345678'
}]

const LoginView = ({ setAuth }) => {

    const [ registrar, setRegistrar ] = useState(false);
    const [ datos, setDatos ] = useState({
        nombres: '',
        apellidos: '',
        correo: '',
        usuario: '',
        password: ''
    });


    const loginUser = () => {
        if(datos.usuario.trim() !== '')
        {
            if(datos.password.trim() !== '')
            {
                const usuario = Users.findIndex(  user => user.usuario === datos.usuario );
                const password = Users.findIndex( user => user.password === datos.password )
                if( usuario !== -1 && password !== -1)
                {
                    setAuth(true);
                }
            }
        }
    }

    const createUser = () => {
        Users.push(datos);
        setRegistrar(false);
    }

    return(
        <View style = { styles.container }>
            <Image
                containerStyle = { styles.img }
                resizeMode = 'stretch'
                source = {{ uri: 'https://images.pexels.com/photos/445399/pexels-photo-445399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
            />

            { registrar ? (
                <View style = { styles.containerRegistrar }>
                    <Text style = { styles.title }>Registrar</Text>
                    <Text  style = { styles.text }>Registrate con nosotros</Text>
                    <View style = {{ height: '65%', display: 'flex', marginBottom: 10}}>
                        <ScrollView>
                            <TextInput
                                style = { [styles.input, { marginVertical: 5}] }
                                placeholder = 'Nombres'
                                onChangeText = { text => setDatos({...datos, nombres: text})}
                                value = { datos.nombres }
                            />
                            <TextInput
                                style = { [styles.input, { marginVertical: 5}] }
                                placeholder = 'Apellidos'
                                onChangeText = { text => setDatos({...datos, apellidos: text})}
                                value = { datos.apellidos }
                            />
                            <TextInput
                                style = { [styles.input, { marginVertical: 5}] }
                                placeholder = 'Correo Electrónico'
                                onChangeText = { text => setDatos({...datos, correo: text})}
                                value = { datos.correo }
                            />
                            <TextInput
                                style = { [styles.input, { marginVertical: 5}] }
                                placeholder = 'Usuario'
                                onChangeText = { text => setDatos({...datos, usuario: text})}
                                value = { datos.usuario }
                            />
                            <TextInput
                                style = { [styles.input, { marginVertical: 5}] }
                                placeholder = 'Contraseña'
                                secureTextEntry = {true}
                                onChangeText = { text => setDatos({...datos, password: text})}
                                value = { datos.password }
                            />
                            <TextInput
                                style = { [styles.input, { marginVertical: 5}] }
                                placeholder = 'Confirmar contraseña'
                                secureTextEntry = {true}
                            />
                        </ScrollView>
                    </View>
                    

                    <TouchableOpacity
                        onPress = { () => setRegistrar(false)}
                    >
                        <Text style = { styles.text }>¿Ya tienes cuenta?
                            <Text> </Text>
                            <Text style = { [styles.text, { textDecorationLine: 'underline', marginTop: 0 }] }>Iniciar sesión</Text>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = { styles.button }
                        onPress = { () => createUser()}
                    >
                        <Text style = { styles.text }>Registrar</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style = { styles.containerForm }>
                    <Text style = { styles.title }>Bienvenido</Text>
                    <Text  style = { styles.text }>Ingrese sus datos</Text>
                    <TextInput
                        style = { styles.input }
                        placeholder = 'Usuario'
                        onChangeText = { text => setDatos({...datos, usuario: text})}
                        value = { datos.usuario }
                    />
                    <TextInput
                        style = { styles.input }
                        placeholder = 'Contraseña'
                        secureTextEntry = {true}
                        onChangeText = { text => setDatos({...datos, password: text})}
                        value = { datos.password }
                    />

                    <TouchableOpacity
                        onPress = { () => setRegistrar(true)}
                    >
                        <Text style = { styles.text }>¿No tienes cuenta?
                            <Text> </Text>
                            <Text style = { [styles.text, { textDecorationLine: 'underline', marginTop: 0 }] }>Registrate aquí</Text>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = { styles.button }
                        onPress = { () => loginUser()}
                    >
                        <Text style = { styles.text }>Iniciar Sesion</Text>
                    </TouchableOpacity>
                </View>
            ) }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 30,
        backgroundColor: '#000',
    },
    img: {
        width: '100%',
        height: '60%',
        
    },
    containerForm: {
        position: 'absolute',
        elevation: 5,
        width: '100%',
        height: '60%',
        backgroundColor: '#1C2530',
        bottom: 0,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        paddingTop: 25,
        paddingHorizontal: 20
    },
    title: {
        color: '#FFF',
        fontSize: 26,
        letterSpacing: 0.5,
        marginBottom: 10
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        letterSpacing: 0.5,
    },
    input: {
        marginVertical: 15,
        height: 50,
        backgroundColor: '#FFFC',
        paddingLeft: 10,
        fontSize: 18,
        borderRadius: 15,
    },
    button: { 
        backgroundColor: '#F7B661', 
        height: 40, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 20,
        top: 30,
        width: '100%',
    },

    containerRegistrar: {
        position: 'absolute',
        elevation: 5,
        width: '100%',
        height: '90%',
        backgroundColor: '#1C2530',
        bottom: 0,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        paddingTop: 25,
        paddingHorizontal: 20
    }
})

export default LoginView;