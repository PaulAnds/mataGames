import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DisplayGameState } from '../components/DisplayGameState';

import piedra from '../assets/Piedra.jpg';
import papel from '../assets/Papel.jpeg';
import tijeras from '../assets/Tijeras.png';
import vs from '../assets/vs.jpg';
let jugadorJugada = 0;
let jugadorPuntaje = 0;
let iaJugada = 0;
let iaPuntaje = 0;

const PPoT = () => {
  const [jugada, setJugada] = useState(piedra)
  const [IA, setIA] = useState(papel)
  const [marcadorJugador, setMarcadorJugador] = useState(jugadorPuntaje)
  const [marcadorIA, setMarcadorIA] = useState(iaPuntaje)
  const [displayStart, setDisplayStart] = useState(true);
  const [displayGanaste, setDisplayGanaste] = useState(false);
  const [displayPerdiste, setDisplayPerdiste] = useState(false);

 
  const elegirJugada = (btnSeleccionado, jugada) => {

    switch(btnSeleccionado)
    {
        case 'piedra':
            jugadorJugada = 1;
            setJugada(jugada);
            break;
        case 'papel':
            jugadorJugada = 2;
            setJugada(jugada);
            break;
        case 'tijeras':
            jugadorJugada = 3;
            setJugada(jugada);
            break;
    }
   

    const random = Math.floor( Math.random() * (4 - 1)) + 1;
    
    switch( random ) {
        case 1: 
            iaJugada = 1;
            setIA(piedra);
            break;
        
        case 2: 
            iaJugada = 2;
            setIA(papel);
            break;
        
        case 3: 
            iaJugada = 3;
            setIA(tijeras);
            break;
        default: break;
    }

    verificarGanador();

  }

  function verificarGanador() {
    if( jugadorJugada !== iaJugada)
    {
        if(jugadorJugada == 1 && iaJugada == 3)
        {
            jugadorPuntaje++;
        } else if( jugadorJugada == 2 && iaJugada == 1)
        {
            jugadorPuntaje++;
        } else if( jugadorJugada == 3 && iaJugada == 2)
        {
            jugadorPuntaje++;
        } else {
            iaPuntaje++;
        }
    }

    actualizarMarcador();
}

function actualizarMarcador() {
    
    if( jugadorPuntaje <= 2 || iaPuntaje <= 2 ) {
        jugadorPuntaje = ( jugadorPuntaje > 2) ? 2 : jugadorPuntaje; 
        iaPuntaje = ( iaPuntaje > 2) ? 2 : iaPuntaje; 
        setMarcadorJugador(jugadorPuntaje) ;
        setMarcadorIA(iaPuntaje);
    }

    if( jugadorPuntaje == 2) setDisplayGanaste('visible');
    if( iaPuntaje == 2) setDisplayPerdiste('visible');
}

const reiniciarMarcador = () => {
    jugadorPuntaje = 0;
    iaPuntaje = 0;
    actualizarMarcador();
}
return (
    <View style={styles.container}>
        
        <DisplayGameState 
            text='Start'
            func={reiniciarMarcador}
            state={{
                display: displayStart,
                setDisplay: setDisplayStart
            }}
            color='#9c33ff'
        />
        <DisplayGameState 
            text='Ganaste'
            func={reiniciarMarcador}
            state={{
                display: displayGanaste,
                setDisplay: setDisplayGanaste
            }}
            color='#0060FF'
        />
        <DisplayGameState 
            text='Perdiste'
            func={reiniciarMarcador}
            state={{
                display: displayPerdiste,
                setDisplay: setDisplayPerdiste
            }}
            color='#FF1347'
        />
        <Text style={styles.title}>Piedra Papel y Tijera</Text>
        <View style={styles.gameContainer}>
            <View >
                <Text style={[
                    styles.gameText, 
                    (jugada === piedra) && {top: -71}, 
                    {color: '#0060FF'}
                    ]}>
                        Player
                </Text>
                <Image style={[styles.gameImage,(jugada === piedra) && {height: 90}]} source={ (jugada) } alt="Jugada jugador" />
            </View>
            <Image style={styles.gameVS} source={ (vs) } />
            <View >
            <Text style={[
                    styles.gameText, 
                    (IA === piedra) && {top: -71}, 
                    {color: '#FF1347'}
                    ]}>
                        AI
                </Text>
                <Image style={[styles.gameImage,(IA === piedra) && {height: 90}]} source={ (IA) } />
            </View>
        </View>
        <View >
            <Text style={styles.buttonText}>Elige tu jugada</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={ () => elegirJugada('piedra', piedra) }>
                    <Image style={[styles.buttonImage, {height: '65%', top:-5, left: -1}]} source={ (piedra) }/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ () => elegirJugada('papel', papel) }>
                    <Image style={styles.buttonImage} source={ (papel) } />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ () => elegirJugada('tijeras', tijeras) }>
                    <Image style={styles.buttonImage} source={ (tijeras) }/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.marcadorContainer}>
            <View style={styles.marcadorTextContainer}>
                <Text style={{...styles.marcadorTextPlayer, color: '#0060FF'}}>Player</Text>
                <Text style={styles.marcadorTextPoints}>{marcadorJugador}</Text>
            </View>
            <View style={styles.marcadorTextContainer}>
                <Text style={{...styles.marcadorTextPlayer, color: '#FF1347'}}>AI</Text>
                <Text style={styles.marcadorTextPoints}>{marcadorIA}</Text>
            </View>
        </View>
    </View>
  )
}

export default PPoT

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: "#9c33ff", 
        borderTopWidth: 1,
        backgroundColor: 'black'
    },
    title: {
        fontSize: 30,
        marginBottom: 50,
        color: '',
        textAlign: 'center',
    },
    gameContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    gameImage: {
        width: 110,
        height: 75,
        top: -30
    },
    gameVS: {
        width: 40,
        height: 40,
    },
    gameText: {
        textAlign: 'center',
        fontSize: 35,
        top: -80,
    },
    buttonContainer: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        width: '28%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5, 
        borderColor: '#9c33ff',
        borderRadius: 130,
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15,
        color: '#9c33ff',
    },
    buttonImage: {
        width: '80%',
        height: '55%',
        padding: 10
    },
    marcadorContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    marcadorTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    marcadorTextPlayer: {
        fontSize: 35,
    },
    marcadorTextPoints: {
        fontSize: 25,
        color: 'orange',
        padding: 5,
    }
})