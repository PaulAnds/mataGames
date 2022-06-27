import React from 'react';
import {Button, View, Text, Image} from 'react-native';

function CreditsScreen({navigation}) {
    return (
        <View style={{backgroundColor: 'black', height: '100%',alignItems: 'center'}}>
            <Image 
                style={{width: '100%', height: 300}}
                source={require('../assets/Juegoteca.jpg')}
            />
            <Text style={{color: '#9c33ff', fontSize:32}}>Creditos:</Text>
         <Text style={{color: '#9c33ff', fontSize:20}}> 1.- josé Miguel Ruiz Mata</Text>
        <Text style={{color: '#9c33ff', fontSize:20}}> 2.- https://reactnative.dev/</Text>
        <Text style={{color: '#9c33ff', fontSize:20}}> 3.- https://github.com/</Text>
        <Text style={{color: '#9c33ff', fontSize:20}}> 4.- https://expo.dev/snacks</Text>
        <Text style={{color: '#9c33ff', fontSize:20}}> 5.- https://es.stackoverflow.com/</Text>
            
            
        </View>
    );
}
export default CreditsScreen;
