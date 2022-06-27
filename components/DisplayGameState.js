import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

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

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.8)', 
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