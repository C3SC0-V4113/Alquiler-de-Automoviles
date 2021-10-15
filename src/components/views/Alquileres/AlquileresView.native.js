import React from 'react';
import { View, Text, StyleSheet, TextInput,ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements'

const Alquileres = [
  {
      id: '1',
      nombre: 'Kevin Albert',
      carro: 'Elantra',
      tiempo: '4',
      estado: 'Alquilado',
  },
  {
      id: '2',
      nombre: 'Elena Vizcaino',
      carro: 'Rio',
      tiempo: '17',
      estado: 'Reservado',
  },
  {
      id: '3',
      nombre: 'Maria Belen Mansilla',
      carro: 'Soul',
      tiempo: '12',
      estado: 'Reservado',
  },
]


const AlquilerView = () => {
    return(
        <ScrollView>
        <View >
          <SearchBar placeholder="Buscar Alquiler..." containerStyle={{backgroundColor: "#1C2530", width:'100%', 
          borderRadius: 10, borderBottomWidth: 0 }}
          inputContainerStyle={{backgroundColor: "#B8B8BF"}}/>
          <FlatList
                data = { Alquileres }
                keyExtractor= { ( item ) => item.id }
                renderItem = { ( {item} ) => (
            <View style = {styles.container}>
            <Text style={styles.title}>Nombre</Text>
            <TextInput style={styles.textInput} value={item.nombre} editable={false} placeholderTextColor="#D8D4CF"  placeholder="Nombre de cliente"></TextInput>
            <Text style={styles.title}>Vehiculo</Text>
            <TextInput style={styles.textInput} value={item.carro} editable={false} placeholderTextColor="#D8D4CF"  placeholder="Vehiculo"></TextInput>
            <Text style={styles.title}>Tiempo de alquiler</Text>
            <TextInput style={styles.textInput} value={item.tiempo} editable={false} placeholderTextColor="#D8D4CF"  placeholder="Tiempo de alquiler"></TextInput>
            <Text style={styles.title}>Estado</Text>
            <TextInput style={styles.textInput} value={item.estado} editable={false} placeholderTextColor="#D8D4CF"  placeholder="Estado"></TextInput>
            <TouchableOpacity style={styles.boton}><Text style={styles.textoBoton}>Ver más</Text></TouchableOpacity>
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
    texto: {
        fontSize: 25,
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
        textAlign: "center",
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        opacity: 0.8,
      },
    boton:{
        marginTop: 10,
        backgroundColor: '#F7B661',
        margin: 0,
        width: '100%',
    },
    textoBoton:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
    },
    inputContainer: {
        justifyContent: 'center',
      },
      input: {
        height: 50,
      },
      icon: {
        position: 'absolute',
        right: 10,
      }
})

export default AlquilerView;