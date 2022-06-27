import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import List from '../components/List';

const mapItems = (items) => items.map((value, i) => ({ key: i.toString(), value }));

const generateRandomNumber = (max, min = 1) => Math.floor(Math.random() * (max - min) + min);

const GuessYourNumber = () => {
    const [AINumber, setAINumber] = useState(generateRandomNumber(101))
    const [guessList, setGuessList] = useState([])
    const [win, setWin] = useState(false)
    const [count, setCount] = useState(1)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(101)
    

    const handleOnPress = (mayor = false) => {
        if(mayor)
        {
            setMin(AINumber)
            setAINumber(generateRandomNumber(max , AINumber + 1))
        } else 
        {
            setMax(AINumber);
            setAINumber(generateRandomNumber(AINumber, min + 1))
        }
       
        setGuessList([
            AINumber,
            ...guessList
        ]);
        setCount(count + 1)
    }   

    
 
    return (
        <View style={styles.game}>
                <View style={styles.gameContainer}>
                    <Text style={{...styles.winText, marginTop: 20, marginBottom: 0}}>Eleccion de La Computadora: <Text style={{fontWeight: 'bold'}}>{AINumber}</Text></Text>
                    <Text style={styles.winText}>Mi Número es: </Text>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity 
                            style={[styles.button, win && {backgroundColor: 'rgba(0,0,0,0.6)'}]}
                            onPress={() => handleOnPress(true)}
                            disabled={win ? true : false}
                        >
                            <Text style={[{fontSize: 15, padding: 5, fontWeight: 'bold'}, win ? {color: 'rgba(126, 247, 189, .6)'} : {color: 'rgba(126, 247, 189, 1)'}]}>Más Alto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.button, win && {backgroundColor: 'rgba(0,0,0,0.6)'}]}
                            onPress={() => {
                                setWin(true)
                                setGuessList([
                                    AINumber,
                                    ...guessList
                                ]);
                            }}
                            disabled={win ? true : false}
                        >
                            <Text style={[{fontSize: 15, padding: 5, fontWeight: 'bold'}, win ? {color: 'rgba(126, 247, 189, .6)'} : {color: 'rgba(126, 247, 189, 1)'}]}>Correcto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.button, win && {backgroundColor: 'rgba(0,0,0,0.6)'}]}
                            onPress={() => handleOnPress(false)}
                            disabled={win ? true : false}
                        >
                            <Text style={[{fontSize: 15, padding: 5, fontWeight: 'bold'}, win ? {color: 'rgba(126, 247, 189, .6)'} : {color: 'rgba(126, 247, 189, 1)'}]}>Más Bajo</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        win 
                        && <Text style={styles.winText}>La IA lo adivino en<Text style={{fontWeight: 'bold'}}> {count}</Text> intentos.</Text>
                    }

                </View>
                <View style={styles.listContainer}>
                    <Text style={{color: '#7ef7bd', fontSize: 21, marginVertical: 10, textAlign: 'center'}}>Numeros Intentados: </Text>
                    <List
                        data={mapItems(guessList)}
                    />
                </View>
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
    buttonsContainer: {
        flexDirection: 'row',
        backgroundColor: '#9c33ff',
        borderRadius: 20
    },
    winText: {
      color: '#9c33ff', 
      fontSize: 20,
      marginVertical: 20,
    },
    input: {
      textAlign: 'center',
      margin: 35,
      color: '#9c33ff',
      fontSize: 20,
    },
    listContainer: {
        width: '100%',
    },
    button: {
      padding: 10,
      margin: 10,
      backgroundColor: 'black',
      borderRadius: 200,
    }
   
  })

  export default GuessYourNumber;