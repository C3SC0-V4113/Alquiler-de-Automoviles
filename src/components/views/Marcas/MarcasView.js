import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const MarcasView = () => {
    return(
        <View>
            <View styles = { styles.container }>
                <Text>Alo</Text>
                <TextInput></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: '#A8A8B2',
    },
    texto: {
        fontSize: 25,
    }
})


export default MarcasView;