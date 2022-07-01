import React, { useEffect, useState } from "react";
import { Image, View,Text, StyleSheet, TouchableOpacity } from 'react-native'
import Hornet from '../assets/HollowKnight/Hornet.png';
import knight from '../assets/HollowKnight/Knight.png';
import Cloth from '../assets/HollowKnight/Cloth.png';
import Quirrel from '../assets/HollowKnight/Quirrel.png';
import backUrl from '../assets/HollowKnight/Backcard.png';
import { DisplayGameState } from "../components/DisplayGameState";
//se guarda en un arreglo los datos de la cartas al igual que su numeraje para buscar su par
const Knights = [
    { id: 1, url: Hornet, backUrl },
    { id: 2, url: knight, backUrl },
    { id: 3, url: Cloth, backUrl },
    { id: 4, url: Quirrel, backUrl },
  ];
  //se crea el arreglo mediante los Knights(las imagenes) para que no siempre sean las mismas en el mismo lugar
let DuoOfHollows = [...Knights, ...Knights, ];
DuoOfHollows = shuffle(DuoOfHollows);

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
// se establecen las constantes para las funciones del juego
const MemoryGame = () => {
    const [openedCard, setOpenedCard] = useState([]);
    const [matched, setMatched] = useState([]);
    const [win, setWin] = useState(false);
    const [contador, setContador] = useState(0);
    //para que el juego no vuelva a voltear la carta si la vuelves a tocar
    const flipCard = (index) => setOpenedCard((opened) => [...opened, index]);
    //usamos el effecto para revisar si las dos cartas hacen Match la una con la otra y de ser asi cuenta como resuelto
    useEffect(() => {
        if (openedCard.length < 2) return;
        
        const firstMatched = DuoOfHollows[openedCard[0]];
        const secondMatched = DuoOfHollows[openedCard[1]];
        
        if(openedCard.length === 2)
        {
            if (secondMatched && firstMatched.id === secondMatched.id) {
                setMatched([...matched, firstMatched.id]);
            }
            setTimeout(() => setOpenedCard([]),300);
            setContador(contador + 1);

        }
        
    
    }, [openedCard]);
    // usamos el efecto para revisar que ya se hayan formado los 4 pares y de ser asi salta el letrero de victoria
    useEffect(() => {
        if(matched.length >= 4) setWin(true);
    }, [matched]);
    
    const restart = () => {
        setOpenedCard([]);
        setMatched([]);
        setContador(0);
        DuoOfHollows = shuffle(DuoOfHollows);
    }

// se presenta el boton de incio del juego
    return (
        <View style={styles.game}>
            <DisplayGameState
                text='Ganaste'
                func={restart}
                state={{
                    display: win,
                    setDisplay: setWin
                }}
                color='#9c33ff'
            />
            <Text style={{color: '#9c33ff', fontSize: 20}}>Intentos: {contador}</Text>
            <View style={styles.cardContainer}>
                {DuoOfHollows.map(({id, url, backUrl}, index) => {
                //se voltea la carta mediante un bool para comprobar que si se encontro el par se volteen ambas cartas
                let isFlipped = false;
                if (openedCard.includes(index) && openedCard.length < 3) isFlipped = false;
                if (matched.includes(id)) isFlipped = true;
                return (
                    <TouchableOpacity
                        key={index}
                        style={styles.card}
                        onPress={() => flipCard(index)}
                        disabled={(isFlipped ? true : false)}
                    >
                        <View >
                            <Image
                                style={{width: 80, height: 90, margin: 1, borderRadius: 10, backgroundColor: 'black'}}
                                source={isFlipped && (url)}
                                alt="Knights-name"
                            />
                        </View>
                    </TouchableOpacity>
                );
                })}
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    game: {
        alignItems:'center',
        backgroundColor: 'black',
        borderTopColor: "#9c33ff", 
        borderTopWidth: 1,
        flex: 1,
        justifyContent: 'center',
    },
    cardContainer: {
        height: 300,
        padding: 20,
        alignItems:'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    card: {
        backgroundColor: '#9c33ff',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 10,
        borderBottomEndRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        margin: 1,
        padding: 5,
    },

  })

export default MemoryGame
