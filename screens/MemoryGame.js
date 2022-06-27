import React, { useEffect, useState } from "react";
import { Image, View,Text, StyleSheet, TouchableOpacity } from 'react-native'
import Hornet from '../assets/HollowKnight/Hornet.png';
import knight from '../assets/HollowKnight/Knight.png';
import Cloth from '../assets/HollowKnight/Cloth.png';
import Quirrel from '../assets/HollowKnight/Quirrel.png';
import Backcard from '../assets/Backcard.png';
import { DisplayGameState } from "../components/DisplayGameState";

const Knights = [
    { id: 1, url: Hornet, Backcard },
    { id: 2, url: knight, Backcard },
    { id: 3, url: Cloth, Backcard },
    { id: 4, url: Quirrel, Backcard },
  ];
  
let DuoOfHollows = [...Knights, ...Knights, ];
DuoOfHollows = shuffle(DuoOfHollows);

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const MemoryGame = () => {
    const [openedCard, setOpenedCard] = useState([]);
    const [matched, setMatched] = useState([]);
    const [win, setWin] = useState(false);
    const [contador, setContador] = useState(0);

    const flipCard = (index) => setOpenedCard((opened) => [...opened, index]);
    
    
    useEffect(() => {
        if (openedCard.length < 2) return;
        
        const firstMatched = DuoOfHollows[openedCard[0]];
        const secondMatched = DuoOfHollows[openedCard[1]];
        
        if(openedCard.length === 2)
        {
            if (secondMatched && firstMatched.id === secondMatched.id) {
                setMatched([...matched, firstMatched.id]);
            }
            setTimeout(() => setOpenedCard([]), 1000);
            setContador(contador + 1);

        }
        
    
    }, [openedCard]);

    useEffect(() => {
        if(matched.length >= 4) setWin(true);
    }, [matched]);
    
    const restart = () => {
        setOpenedCard([]);
        setMatched([]);
        setContador(0);
        DuoOfHollows = shuffle(DuoOfHollows);
    }


    return (
        <View style={styles.game}>
            <DisplayGameState
                text='Ganaste'
                func={restart}
                state={{
                    display: win,
                    setDisplay: setWin
                }}
                color='#0060FF'
            />
            <Text style={{color: '#9c33ff', fontSize: 20}}>Numero de Intentos: {contador}</Text>
            <View style={styles.cardContainer}>
                {DuoOfHollows.map(({id, url}, index) => {
                //lets flip the card
                let isFlipped = false;
                if (openedCard.includes(index) && openedCard.length < 3) isFlipped = true;
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
        borderColor: 'black',
        borderRadius: 10,
        margin: 1,
        padding: 5,
    },

  })

export default MemoryGame