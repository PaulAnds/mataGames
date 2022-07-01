import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import List from '../components/List';
//se genera un listado para que se guarden los numeros que vayas intentando para adivinar
const mapItems = (items) => items.map((value, i) => ({ key: i.toString(), value }));
//se genera un numero random que sera el que tienes que descubrir mediante el juego
const generateRandomNumber = (max, min = 1) => Math.floor(Math.random() * (max - min) + min);
//se genera un texto que le indica al jugador cuando esta cerca del resultado, ya sea alto o sea bajo
const calculateText = (number, random) => {
    const soClose = 5;
    const diff = Math.abs(random - number)

    if(diff < soClose) {
        if(number < random) return "Estas muy cerca! tu numero es un poco bajo"
        else return "Estas muy cerca! tu numero es un poco alto"
    } else {
        if(number < random) return "Tu numero es muy bajo"
        else return "Tu numero es muy alto"
    }
}
//se declaran todos los UseState para que el juego cumpla todas las funciones 
const GuessNumber = () => {
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [guessList, setGuessList] = useState([])
    const [win, setWin] = useState(false)
    const [count, setCount] = useState(0)
    const [random] = useState(generateRandomNumber(101))

    const handleOnChange = newNumber => {
        setNumber(newNumber)
    }

    const handleOnPress = () => {
        const num = parseInt(number)
        if(!isNaN(num))
        {
            const numRand = parseInt(random)
            const text = calculateText(num, numRand)

            if(num === numRand) setWin(true);

            setNumber("");
            setMessage(text);
            
                setGuessList([
                    num,
                    ...guessList
                ]);
            setCount(count + 1)
        }

    }
    return (
        <View style={styles.game}>
            <View style={styles.gameContainer}>
                <TextInput
                    style={styles.input}
                    autoFocus
                    placeholder='Adivina el numero (del 1-100)'
                    placeholderTextColor='#9c33ff'
                    onChangeText={handleOnChange}
                    defaultValue = {number}
                    keyboardType='number-pad'
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleOnPress}
                >
                    <Text style={{fontSize: 15, padding: 5, fontWeight: 'bold', color: 'black'}}>Probar</Text>
                </TouchableOpacity>

                {
                    win 
                        ? <Text style={styles.winText}> Felicidades, lo has adivinado en {count} intentos.</Text>
                        : <Text style={styles.winText}>{message}</Text>
                }

            </View>
            <Text style={{color: '#9c33ff', fontSize: 15, marginTop: 30}}>Numeros Intentados: </Text>
            <List
                data={mapItems(guessList)}
            />
        </View>
        
    )
}


const styles = StyleSheet.create({
  game: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    borderTopColor: "#9c33ff", 
    borderTopWidth: 1,
  },
  gameContainer: {
    alignItems: 'center',
    width: '100%',
  },
  winText: {
    color: '#9c33ff', 
    fontSize: 15,
    marginTop: 30,
  },
  input: {
    textAlign: 'center',
    margin: 35,
    color: '#9c33ff',
    fontSize: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#9c33ff',
    borderTopLeftRadius: 30,
    borderBottomEndRadius: 30,
  }
 
})

export default GuessNumber;