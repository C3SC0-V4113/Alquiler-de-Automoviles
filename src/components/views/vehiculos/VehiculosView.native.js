import React, { useEffect, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import CardAuto from '../../common/CardAuto.native';
import ButtonFloating from '../../common/ButtonFloating.native';
import InputSearch from '../../common/InputSearch.native';
import ModalAuto from '../../common/ModalAuto.native';
import FetchAPI from '../../../utils/FetchAPI';


const VehiculosView = () => {
    
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ autos, setAutos ] = useState([]);
    const [ idAuto, setIdAuto] = useState(0);
    const [ alert, setAlert ] = useState(false);
    const urlAutos = 'http://192.168.1.6:3000/api/autos/';

    //FUNCION PARA OBTENER LOS VEHICULOS
    const getAutos = () => {
        let autosAPI = FetchAPI(urlAutos, 'GET', {});
        autosAPI.then( data => {
            setAutos([...data])
        })
    }
    useEffect(() => {
        if(!modalVisible)
        {
            getAutos()
        }
    }, [modalVisible])

    //FUNCION PARA ELIMINAR VEHICULOS
    const deleteVehiculo = () => {
        const autoAPI = FetchAPI(`${urlAutos}${idAuto}`, 'DELETE', {});

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

    //ALERT
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
        <View style = {{ backgroundColor: '#1C2530', height: '100%' }}>
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

            { modalVisible ? (
                <ModalAuto 
                    modalVisible = { modalVisible } 
                    setModalVisible = { setModalVisible }
                    idAuto = { idAuto }
                />
            ) : (null) }
        </View>
    )
}


export default VehiculosView;