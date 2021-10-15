import React from 'react';
import { View, Text, StyleSheet, TextInput,ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements'

const Marcas = [
    {
        id: '1',
        nombre: 'BMW',
    },
    {
        id: '2',
        nombre: 'Chevrolet',
    },
    {
        id: '3',
        nombre: 'Dodge',
    },
    {
        id: '4',
        nombre: 'Ford',
    },
    {
        id: '5',
        nombre: 'Honda',
    },
    {
        id: '6',
        nombre: 'Hyundai',
    },
    {
        id: '7',
        nombre: 'Kya',
    },
    {
        id: '8',
        nombre: 'Mitsubishi',
    },
    {
        id: '9',
        nombre: 'Toyota',
    },
]


const MarcasView = () => {
    return(
        <ScrollView>
        <View>
        <SearchBar placeholder="Buscar Marca..." 
        containerStyle={{backgroundColor: "#1C2530", width:'100%', borderRadius: 10, borderBottomWidth: 0 }}/>
        <FlatList
                data = { Marcas }
                keyExtractor= { ( item ) => item.id }
                renderItem = { ( {item} ) => (
            <View style = {styles.container}>
            <Text style={styles.title}>Marca</Text>
            <TextInput style={styles.textInput} editable={false} placeholderTextColor="#D8D4CF"  placeholder="Marca" value={item.nombre}></TextInput>
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
