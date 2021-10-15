import React, { useEffect, useState } from 'react';
import { View, Modal, Pressable, StyleSheet, Text, TextInput, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';

const ModalAuto = ({ modalVisible, setModalVisible, marcas, idAuto}) => {

    const [ data, setData ] = useState({
        id_modelo: "",
        anio: "",
        placa: "",
        precio_dia: "",
        transmision: "",
        pasajeros: "",
        puertas: "",
        ac: "",
        motor: "",
        vidrios_electricos: "",
        imagen: "",
        id_estado_auto: 1,
    })
    const [ marca, setMarca ] = useState(0);
    const [ modelos, setModelos ] = useState([]);
    const urlAPI = 'http://192.168.1.6:3000/api/modelos/';
    const urlAutos = 'http://192.168.1.6:3000/api/autos/';

    useEffect( () => {
        //FUNCION PARA OBTENER LOS MODELOS RESPECTO A LA MARCA SELECCIONADA
        const getModelos = async () =>{
            const response = await fetch(`${urlAPI}/${marca}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response.json();
        }

        let ModelosAPi = getModelos()
        ModelosAPi.then( data => {
            //SE GUARDAN LOS MODELOS
            setModelos([ ...data.modelos ])
        })
    }, [marca])

    //FUNCION PARA HACER LA PETICION PARA CREAR LOS AUTOS
    const createFetchVehiculo = async () => {
        let response = await fetch( urlAutos, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        return response.text();
    }

    //FUNCION PARA CREAR LOS AUTOS
    const createVehiculo = () => {
        let vehiculoNew = createFetchVehiculo();
        vehiculoNew.then( data => {
            if( data.id_auto_PK !== 0 )
            {
                console.log('el vehiculo se creo');
                reset();
            }
        })
        .catch( err => { console.log(err) })
        
    }

    //FUNCION PARA HACER LA PETICION PARA MODIFICAR LOS AUTOS
    const updateFetchVechiculo = async () => {
        const response = await fetch(`${urlAutos}${data.id_auto}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response.json();
    }

    //FUNCION PARA MODIFICAR LOS AUTOS
    const updateVehiculo = () => {
        const autoAPI = updateFetchVechiculo();

        autoAPI.then( data => {
            console.log(data);
            reset();
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect( () => {
        //FUNCION PARA OBTENER LA INFORMACION DEL AUTO SEGUN SU ID
        const getVehiculo = async () => {
            const response = await fetch(`${urlAutos}${idAuto}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response.json();
        }
        if(idAuto > 0)
        {
            let autoAPI = getVehiculo();
            autoAPI.then( data => {
                const { id_auto_PK, anio, placa, precio_dia, transmision, pasajeros, puertas, ac, motor, vidrios_electricos, imagen, modelo} = data[0];
                setMarca(modelo.marca.id_marca_PK)
                setData({
                    ...data,
                    id_auto: id_auto_PK,
                    id_modelo: modelo.id_modelos_PK,
                    anio: anio.toString(),
                    placa,
                    precio_dia,
                    transmision,
                    pasajeros: pasajeros.toString(),
                    puertas: puertas.toString(),
                    ac,
                    motor,
                    vidrios_electricos,
                    imagen,
                })

                
            })
        }
        else
        {
            reset()
        }
    }, [idAuto, modalVisible])

    //FUNCION PARA RESETEAR LOS CAMPOS
    const reset = () => {
        setData({
            id_modelo: "",
            anio: "",
            placa: "",
            precio_dia: "",
            transmision: "",
            pasajeros: "",
            puertas: "",
            ac: "",
            motor: "",
            vidrios_electricos: "",
            imagen: "",
            id_estado_auto: 1,
        })

        setMarca('')
    }

    return(
        <Modal
            animationType="slide"
            visible={ modalVisible }
            animationType = 'slide'
            presentationStyle = 'fullScreen'
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style = { styles.header } >
                    { idAuto === 0 ? (
                        <Text style = { styles.title }>Crear vehículo</Text>
                    ) : (
                        <Text style = { styles.title }>Modificar vehículo</Text>
                    ) }
                    
                    <Pressable
                        onPress = { () => { reset(); setModalVisible(!modalVisible)} }
                    >
                        <Icon name = 'close' size={30} color='#FFF' /> 
                    </Pressable>
                </View>
                <Divider style = {{ borderBottomWidth: 5 }} />
                <Text 
                    style = {{ color: '#FFF', paddingHorizontal: 20, fontSize: 18, marginTop: 10, textAlign: 'center' }}
                >
                    Ingresar la información del vehículo</Text>

                <ScrollView style={styles.modalView}>

                    <Text style={{ textAlign: 'left' }}>Marca</Text>
                    <View style = { styles.containerPicker }>
                        <Picker
                            style = { styles.picker }
                            selectedValue={ marca }
                            onValueChange={(itemValue, itemIndex) => setMarca(itemValue) }
                        >
                            <Picker.Item label="Seleccione la marca" value="" />
                            { marcas.map( (marca, index) => (
                                <Picker.Item label={ marca.marca } value={ marca.id_marca_PK } key = { index } />
                            )) }
                        </Picker>
                    </View>

                    <Text style={{ textAlign: 'left' }}>Modelo</Text>
                    <View style = { styles.containerPicker }>
                        <Picker
                            style = { styles.picker }
                            selectedValue={ data.id_modelo }
                            onValueChange={(itemValue, itemIndex) => setData({...data, id_modelo: itemValue })}
                        >
                            <Picker.Item label="Seleccione el modelo" value="" />
                            { modelos.map( ( modelo, index ) => (
                                <Picker.Item label={modelo.modelo} value={ modelo.id_modelos_PK } key = { index } />
                            ) ) }
                        </Picker>
                    </View>

                    <Text style={{ textAlign: 'left' }}>Año</Text>
                    <TextInput 
                        style = { styles.input }
                        placeholder = 'Ingrese el año del vehículo' 
                        keyboardType="numeric" 
                        onChangeText = { text => setData({...data, anio: text }) }
                        value = { data.anio  }
                    />

                    <Text style={{ textAlign: 'left' }}>Placa</Text>
                    <TextInput 
                        style = { styles.input }
                        placeholder = 'Ingrese la placa del vehículo'
                        onChangeText = { text => setData({...data, placa: text }) }
                        value = { data.placa }
                    />

                    <Text style={{ textAlign: 'left' }}>Transmision del vehículo</Text>
                    <TextInput 
                        style = { styles.input }
                        placeholder = 'Ingrese la transmision del vehículo'
                        onChangeText = { text => setData({...data, transmision: text }) }
                        value = { data.transmision }
                    />

                    <Text style={{ textAlign: 'left' }}>Pasajeros</Text>
                    <TextInput 
                        style = { styles.input }
                        placeholder = 'Ingrese la cantidad de pasajeros' 
                        keyboardType="numeric"
                        onChangeText = { text => setData({...data, pasajeros: text }) }
                        value = { data.pasajeros  }
                    />

                    <Text style={{ textAlign: 'left' }}>Puertas del vehículo</Text>
                    <TextInput 
                        style = { styles.input }
                        placeholder = 'Ingrese el número de puertas' 
                        keyboardType="numeric"
                        onChangeText = { text => setData({...data, puertas: text }) }
                        value = { data.puertas  }
                    />

                    <Text style={{ textAlign: 'left' }}>A/C</Text>
                    <TextInput 
                        style = { styles.input }
                        placeholder = 'Ingrese si tiene A/C'
                        onChangeText = { text => setData({...data, ac: text }) }
                        value = { data.ac }
                    />

                    <Text style={{ textAlign: 'left' }}>Tamaño de motor</Text>
                    <TextInput 
                        style = { styles.input }
                        placeholder = 'Ingrese el tamaño del motor' 
                        keyboardType="numeric"
                        onChangeText = { text => setData({...data, motor: text }) }
                        value = { data.motor }
                    />

                    <Text style={{ textAlign: 'left' }}>Vidrios Electricos</Text>
                    <TextInput 
                        style = { styles.input }
                        placeholder = 'Ingrese si tiene vidrios electricos'
                        onChangeText = { text => setData({...data, vidrios_electricos: text }) }
                        value = { data.vidrios_electricos }
                    />

                    <Text style={{ textAlign: 'left' }}>Precio por día</Text>
                    <TextInput 
                        style = { styles.input }
                        placeholder = 'Ingrese el precio por día'
                        keyboardType="numeric"
                        onChangeText = { text => setData({...data, precio_dia: text }) }
                        value = { data.precio_dia }
                    />

                    <Text style={{ textAlign: 'left' }}>Imagen del Vehículo</Text>
                    <TextInput 
                        style = { styles.input }
                        placeholder = 'Subir una imagen del vehículo'
                        onChangeText = { text => setData({...data, imagen: text }) }
                        value = { data.imagen }
                    />
                </ScrollView>

                { idAuto === 0 ? (
                    <Pressable
                        style = { styles.button }
                        onPress = { () => createVehiculo() }
                    >
                        <Text style = { styles.textButton }>Crear</Text>
                    </Pressable>
                ) : (
                    <Pressable
                        style = { styles.button }
                        onPress = { () => updateVehiculo() }
                    >
                        <Text style = { styles.textButton }>Modificar</Text>
                    </Pressable>
                )}
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      backgroundColor: '#1C2530'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: '#F7B661',
    },
    title: {
        fontSize: 24,
        width: '80%',
        color: '#FFF'
    },
    modalView: {
      marginHorizontal: 20,
      backgroundColor: "white",
      paddingHorizontal: 20,
      marginTop: 15,
      borderRadius: 15,
      marginBottom: 15
    },
    containerPicker: {
        borderWidth: 1,
        width: '100%',
        marginBottom: 10
    },
    picker: {
        width: '100%',
        height: 50,
        borderWidth: 1,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#F7B661',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    }
});

export default ModalAuto