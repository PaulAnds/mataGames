import React from 'react';
import {View, Text, Image} from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View style={{backgroundColor: 'black', height: '100%'}}>
            <Image //bienvenida a la aplicacion y estilazado de la imagen de la juegoteca
                style={{width: '100%', height: 300}}
                source={require('../assets/Juegoteca.jpg')}
            />
            <Text style={{ marginTop: 40, padding: 10, color: 'white',fontSize:26}}>Bienvenido a la Juegoteca Interactiva de React aqui podras repasar varios juegos con los que podras
            Aprender ciertos funcionamientos de React y a su vez divertirte en el proceso, Bivenido Juegonauta.
            </Text>
            
            
        </View>
    );
}
export default HomeScreen;