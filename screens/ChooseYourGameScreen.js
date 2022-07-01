import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
//Seleccion de juego , el jugador podra elegir entre Guess my Number y Guess Your Number
export const ChooseYourGameScreen = () => {
  //se declara navigation para poder ir a las ventanas de los juegos
    const navigation = useNavigation();
  return (
    //view con el estilo para que el juego tenga orden visual
    <View style={styles.game}>
        <View >
            <TouchableOpacity
            //usamos Navigation para ir a Guess my Number y a su vez abajo se despliega el button para ir hacia guessmynumber
                onPress={() => navigation.push('GuessMyNumber')}
            >
                <View style={styles.button}>
                    <Text style={styles.winText}>Adivina el Numero de la PC</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            //usamos Navigation para ir a Guess your Number y a su vez abajo se despliega el button para ir hacia guessyournumber
                onPress={() => navigation.push('GuessYourNumber')}
            >
                <View style={styles.button}>
                    <Text style={styles.winText}>la PC adivina tu Numero</Text>
                </View>
            </TouchableOpacity>

        </View>
    </View>
  )
}
//estilos del ChooseYourGameScreen
const styles = StyleSheet.create({
    game: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      borderTopColor: "#9c33ff", 
      borderTopWidth: 1,
    },
    gameContainer: {
        alignItems: 'center',
        width: '100%',
    },
    buttonsContainer: {
        backgroundColor: '#9c33ff',
        borderRadius: 20,
    },
    winText: {
      color: 'black', 
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
      backgroundColor: '#9c33ff',
      borderBottomRightRadius:90,
      borderBottomLeftRadius:90,
      borderTopRightRadius:45,
      borderTopLeftRadius:46,
    }
   
  })