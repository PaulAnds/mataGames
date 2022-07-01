import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import List from '../components/List';
//se genera un listado para que se guarden los numeros que vayas intentando para adivinar
const mapItems = (items) => items.map((value, i) => ({ key: i.toString(), value }));
//se genera un numero random que sera el que la PC usara para ir adivinando el numero del jugador
const generateRandomNumber = (max, min = 1) => Math.floor(Math.random() * (max - min) + min);
// se recogen los datos del usuario para establecer el numero que "penso" el jugador  y en base a eso 
// la IA o PC tratara de Adivinar que numero esta pensando el jugador
const GuessYourNumber = () => {
    const [PCnumber, setPCnumber] = useState(generateRandomNumber(101))
    const [guessList, setGuessList] = useState([])
    const [win, setWin] = useState(false)
    const [count, setCount] = useState(1)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(101)
    //se le indica a la PC si el numero que penso es correo o si tiene que volver a intentar 
    const handleOnPress = (mayor = false) => {
        if(mayor)
        {
            setMin(PCnumber)
            setPCnumber(generateRandomNumber(max , PCnumber + 1))
        } else 
        {
            setMax(PCnumber);
            setPCnumber(generateRandomNumber(PCnumber, min + 1))
        }
       
        setGuessList([
            PCnumber,
            ...guessList
        ]);
        setCount(count + 1)
    }   

    return (
        <View style={styles.game}>
                <View style={styles.gameContainer}>
                    <Text style={{...styles.winText, marginTop: 20, marginBottom: 0}}>Eleccion de La Computadora: <Text style={{fontWeight: 'bold'}}>{PCnumber}</Text></Text>
                    <Text style={styles.winText}>Mi Número es: </Text>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity 
                            style={[styles.button, win && {backgroundColor: 'black'}]}
                            onPress={() => handleOnPress(true)}
                            disabled={win ? true : false}
                        >
                            <Text style={[{fontSize: 15, padding: 5, fontWeight: 'bold'}, win ? {color: 'orange'} : {color: '#9c33ff'}]}>Más Alto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.button, win && {backgroundColor: 'black'}]}
                            onPress={() => {
                                setWin(true)
                                setGuessList([
                                    PCnumber,
                                    ...guessList
                                ]);
                            }}
                            disabled={win ? true : false}
                        >
                            <Text style={[{fontSize: 15, padding: 5, fontWeight: 'bold'}, win ? {color: 'orange'} : {color: '#9c33ff'}]}>Correcto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.button, win && {backgroundColor: 'black'}]}
                            onPress={() => handleOnPress(false)}
                            disabled={win ? true : false}
                        >
                            <Text style={[{fontSize: 15, padding: 5, fontWeight: 'bold'}, win ? {color: 'orange'} : {color: '#9c33ff'}]}>Más Bajo</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        win 
                        //te indica en cuantos intentos la PC descubrio tu numero
                        && <Text style={styles.winText}>La PC lo adivino en :<Text style={{fontWeight: 'bold'}}> {count}</Text> intentos.</Text>
                    }

                </View>
                <View /*te despliega los numeros intentados por la PC*/style={styles.listContainer}>
                    <Text style={{color: 'orange', fontSize: 21, marginVertical: 10, textAlign: 'center'}}>Numeros Intentados: </Text>
                    <List
                        data={mapItems(guessList)}
                    />
                </View>
        </View>
  )
}
//estilos del Guess Your Number
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