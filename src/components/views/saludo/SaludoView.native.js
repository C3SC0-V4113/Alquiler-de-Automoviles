import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SaludoView = () => {
    return(
        <View styles = { styles.container }>
            <Text style = { styles.texto }>Hola desde Movil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    texto: {
        fontSize: 25,
    }
})

export default SaludoView;