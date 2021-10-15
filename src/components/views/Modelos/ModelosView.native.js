import React from 'react';
import { View, Text, StyleSheet, TextInput,ScrollView, TouchableOpacity,FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements'

const Modelos = [
    {
        id: '1',
        nombre: 'Aveo',
    },
    {
        id: '2',
        nombre: 'Equinox',
    },
    {
        id: '3',
        nombre: 'Escape',
    },
    {
        id: '4',
        nombre: 'Mustang',
    },
    {
        id: '5',
        nombre: 'Civic',
    },
    {
        id: '6',
        nombre: 'Accord',
    },
    {
        id: '7',
        nombre: 'Pilot',
    },
    {
        id: '8',
        nombre: 'Elantra',
    },
    {
        id: '9',
        nombre: 'Accent',
    },
    {
        id: '10',
        nombre: 'Forte',
    },
    {
        id: '11',
        nombre: 'Rio',
    },
    {
        id: '12',
        nombre: 'Soul',
    },
    {
        id: '13',
        nombre: 'Hilux',
    },
]


const MarcasView = () => {
    return(
        <ScrollView>
        <View >
        <SearchBar placeholder="Buscar Modelo..." 
        containerStyle={{backgroundColor: "#1C2530", width:'100%', borderRadius: 10, borderBottomWidth: 0 }}/>
        <FlatList
                data = { Modelos }
                keyExtractor= { ( item ) => item.id }
                renderItem = { ( {item} ) => (
            <View style = {styles.container}>
            <Text style={styles.title}>Modelo</Text>
            <TextInput style={styles.textInput} editable={false} placeholderTextColor="#D8D4CF" value={item.nombre}  placeholder="Marca"></TextInput>
            <View style={styles.botones}>
            <TouchableOpacity style={styles.boton1}><Text style={styles.textoBoton}>Editar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.boton2}><Text style={styles.textoBoton}>Eliminar</Text></TouchableOpacity>
            </View>
            </View>
            )}
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#A1A1AB',
        margin: 20,
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex',
        paddingTop: 20,
    },
    textInput:{
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#A1A1AB",
        marginBottom: 10,
        color: '#fff',
        borderBottomColor: '#D8D4CF',
        borderBottomWidth: 2,
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        paddingBottom: 6,
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        opacity: 0.8,
        marginLeft: '6%',
    },
    boton1:{
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#F7B661',
        margin: 0,
        width: '45%'
    },
    boton2:{
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#D32950',
        margin: 0,
        width: '45%'
    },
    botones:{
        flexDirection: "row",
        marginLeft: 5, 
        justifyContent: 'space-evenly'
    },
    textoBoton:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
        color: 'white'
    },
})

export default MarcasView;