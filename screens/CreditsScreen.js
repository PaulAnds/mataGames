import React from 'react';
import {View, Text, Image} from 'react-native';

function CreditsScreen({navigation}) {
    return (
        //se estiliza la pagina para que se vea de manera correcta y centrada
        <View style={{backgroundColor: 'black', height: '100%',alignItems: 'center'}}>
            <Image
            //usamos styles y source para desplegar la imagen de la juegoteca , el juego es el logo de la App  
                style={{width: '100%', height: 300}}
                source={require('../assets/Juegoteca.jpg')}
            />
            <Text /*se añaden los creditos del proyecto con sus respectivos estilos*/style={{color: '#9c33ff', fontSize:32}}>Creditos:</Text>
         <Text style={{color: '#9c33ff', fontSize:20}}> 1.- josé Miguel Ruiz Mata</Text>
        <Text style={{color: '#9c33ff', fontSize:20}}> 2.- https://reactnative.dev/</Text>
        <Text style={{color: '#9c33ff', fontSize:20}}> 3.- https://github.com/</Text>
        <Text style={{color: '#9c33ff', fontSize:20}}> 4.- https://expo.dev/snacks</Text>
        <Text style={{color: '#9c33ff', fontSize:20}}> 5.- https://es.stackoverflow.com/</Text>
        </View>
    );
}
export default CreditsScreen;
