import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
//el display donde el jugador ingresa los numeros en los diferentes juegos
export const DisplayGameState = ({text, func, state: {display, setDisplay}, color}) => {
    const on = () => (
        <View style={styles.container}>
            <TouchableOpacity 
                style={{backgroundColor: `${color}`, ...styles.button}}
                onPress={() => {
                    func();
                    setDisplay(false);
                }}
            >
                <Text style={{color: 'white', zIndex: 1, fontSize: 30}}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )

    const off = () => null
        
    return (display) ? on() : off();
}
//estilos de el estado de juego para el Piedra papel o Tijera
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black', 
        position: 'absolute', 
        top: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    button: {
        width: 200,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10
    }
}) 