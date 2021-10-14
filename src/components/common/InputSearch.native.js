import React, { useEffect, useState } from 'react';
import { SearchBar } from 'react-native-elements';

const InputSearch = ({ placeholder, SearchMethod }) => {
    const [ value, setValue ] = useState('');

    useEffect( () => { console.log(value); }, [value])

    return(
        <SearchBar
            placeholder="Buscar Vehículo"
            onChangeText={ search => setValue(search) }
            value={ value }
            lightTheme = {true}
            containerStyle = {{ backgroundColor: '#FFF', height: 50, padding: 0 }}
            inputContainerStyle = {{ backgroundColor: '#FFF', height: 50 }}
        />
    )
}

export default InputSearch;