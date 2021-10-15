import React, { useEffect, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import CardAuto from '../../common/CardAuto.native';
import ButtonFloating from '../../common/ButtonFloating.native';
import InputSearch from '../../common/InputSearch.native';
import ModalAuto from '../../common/ModalAuto.native';


const VehiculosView = () => {
    
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ marcas, setMarcas] = useState([]);
    const [ autos, setAutos ] = useState([]);
    const [ idAuto, setIdAuto] = useState(0);
    const [ alert, setAlert ] = useState(false);
    const urlAPI = 'http://192.168.1.11:3000/api/marcas/';
    const urlAutos = 'http://192.168.1.11:3000/api/autos/';

    useEffect(() => {
        //FUNCION PARA OBTENER LAS MARCAS DESDE LA API
        const getMarcas = async () => {
            const response = await fetch( urlAPI, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response.json();
        }
        
        //OBTIENE LAS MARCAS CUANDO EL MODAL SE MUESTRA
        if(modalVisible)
        {
            let marcasAPI = getMarcas();
            marcasAPI.then( data => {
                setMarcas([...data.marcas])
            })
        }
    }, [modalVisible])

    useEffect(() => {
        const getAutos = async () => {
            const response = await fetch( urlAutos, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response.json();
        }
        let autosAPI = getAutos();
        autosAPI.then( data => {
            setAutos([...data])
        })
    }, [modalVisible])

    //FUNCION PARA HACER LA PETICION PARA OBTENER A LOS VEHICULOS
    const getFetchAutos = async () => {
        const response = await fetch( urlAutos, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.json();
    }
    //FUNCION PARA OBTENER LOS VEHICULOS
    const getAutos = () => {
        let autosAPI = getFetchAutos();
        autosAPI.then( data => {
            setAutos([...data])
        })
    }
    useEffect(() => {
        getAutos()
    }, [])



    const deleteFetchVehiculo = async () => {
        const response = await fetch(`${urlAutos}${idAuto}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.json();
    }

    const deleteVehiculo = () => {
        const autoAPI = deleteFetchVehiculo();

        autoAPI.then( data => {
            getAutos();
            setAlert(false)
        })
        .catch( err => {
            console.log(err);
        })
    }

    useEffect( () => {
        if(alert)
        {
            AlertVehiculo();
        }
    }, [alert])

    const AlertVehiculo = ( ) =>{
        Alert.alert(
            "Eliminar vehículo",
            `¿Desea eliminar el vehículo?`,
            [
                {
                    text: "No",
                    onPress: () => setAlert(false),
                    style: "cancel"
                },
                { text: "Si", onPress: () => deleteVehiculo() }
            ]
        );
    }


    return(
        <>
            <InputSearch />
            <View
                style = {{ height: '90%' }}
            >
                <FlatList 
                    data = { autos }
                    renderItem = { (item) =>  <CardAuto  data = { item } setIdAuto = { setIdAuto } setModalVisible = { setModalVisible } setAlert = { setAlert } />}
                    keyExtractor = { item => item.id_auto_PK.toString() }
                />
                
            </View>
            <ButtonFloating modalVisible = { modalVisible } setModalVisible = { setModalVisible } changeId = { setIdAuto } />

            <ModalAuto 
                modalVisible = { modalVisible } 
                setModalVisible = { setModalVisible } 
                marcas = { marcas }
                idAuto = { idAuto }
            />
        </>
    )
}


export default VehiculosView;