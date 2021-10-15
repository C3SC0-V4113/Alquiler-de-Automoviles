import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native-elements';

const LoginView = () => {
    return(
        <View style = { styles.container }>
            <Image
                containerStyle = { styles.img }
                resizeMode = 'stretch'
                source = {{ uri: 'https://images.pexels.com/photos/445399/pexels-photo-445399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
            />

            <View style = { styles.containerForm }>
                <Text style = { styles.title }>Bienvenido de vuelta</Text>
                <Text style = { styles.text }>Ingrese sus datos</Text>
                <TextInput
                    style = { styles.input }
                    placeholder = 'Usuario'
                />
                <TextInput
                    style = { styles.input }
                    placeholder = 'Contraseña'
                    secureTextEntry = {true}
                />
            </View>
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
        height: '65%',
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
    }
})

export default LoginView;