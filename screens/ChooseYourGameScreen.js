import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const ChooseYourGameScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.game}>
        <View >
            <TouchableOpacity
                onPress={() => navigation.push('GuessMyNumber')}
            >
                <View style={styles.button}>
                    <Text style={styles.winText}>Adivina el Numero de la PC</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
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
        borderRadius: 20
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
      borderBottomEndRadius:200,
      borderBottomLeftRadius:200,
    }
   
  })