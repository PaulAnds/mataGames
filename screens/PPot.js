import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DisplayGameState } from '../components/DisplayGameState';

import piedra from '../assets/Piedra.jpg';
import papel from '../assets/Papel.jpeg';
import tijeras from '../assets/Tijeras.png';
import vs from '../assets/vs.jpg';
let jugadorJugada = 0;
let jugadorPuntaje = 0;
let PCJugada = 0;
let PCPuntaje = 0;

const PPoT = () => {
  const [jugada, setJugada] = useState(piedra)
  const [PC, setPC] = useState(papel)
  const [marcadorJugador, setMarcadorJugador] = useState(jugadorPuntaje)
  const [marcadorPC, setMarcadorPC] = useState(PCPuntaje)
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
    //movimientos de la PC
    const random = Math.floor( Math.random() * (4 - 1)) + 1;
    
    switch( random ) {
        case 1: 
            PCJugada = 1;
            setPC(piedra);
            break;
        
        case 2: 
            PCJugada = 2;
            setPC(papel);
            break;
        
        case 3: 
            PCJugada = 3;
            setPC(tijeras);
            break;
        default: break;
    }

    verificarGanador();

  }
  //para verificar quien fue el ganador , si el jugador o la PC , o si en caso contrario ocurrio un empate
  function verificarGanador() {
    if( jugadorJugada !== PCJugada)
    {
        if(jugadorJugada == 1 && PCJugada == 3)
        {
            jugadorPuntaje++;
        } else if( jugadorJugada == 2 && PCJugada == 1)
        {
            jugadorPuntaje++;
        } else if( jugadorJugada == 3 && PCJugada == 2)
        {
            jugadorPuntaje++;
        } else {
            PCPuntaje++;
        }
    }

    actualizarMarcador();
}
//Actualizaciones del marcador, posibles estados y empates
function actualizarMarcador() {
    
    if( jugadorPuntaje <= 2 || PCPuntaje <= 2 ) {
        jugadorPuntaje = ( jugadorPuntaje > 2) ? 2 : jugadorPuntaje; 
        PCPuntaje = ( PCPuntaje > 2) ? 2 : PCPuntaje; 
        setMarcadorJugador(jugadorPuntaje) ;
        setMarcadorPC(PCPuntaje);
    }
    // se determina si gano el Jugador o la PC
    if( jugadorPuntaje == 2) setDisplayGanaste('visible');
    if( PCPuntaje == 2) setDisplayPerdiste('visible');
}
// se reinicPC el marcador una vez termina el juego y se vuelve a ingresar a el 
const reinicPCrMarcador = () => {
    jugadorPuntaje = 0;
    PCPuntaje = 0;
    actualizarMarcador();
}
return (
    <View style={styles.container}>
        
        <DisplayGameState // se crean diferentes estados para anuncPCr lo que pasa en el juego, InicPCrlo, Ganarlo o Perderlo
            text='Start'
            func={reinicPCrMarcador}
            state={{
                display: displayStart,
                setDisplay: setDisplayStart
            }}
            color='#9c33ff'
        />
        <DisplayGameState 
            text='Ganaste'
            func={reinicPCrMarcador}
            state={{
                display: displayGanaste,
                setDisplay: setDisplayGanaste
            }}
            color='#0060FF'
        />
        <DisplayGameState 
            text='Perdiste'
            func={reinicPCrMarcador}
            state={{
                display: displayPerdiste,
                setDisplay: setDisplayPerdiste
            }}
            color='#9c33ff'
        />
        <Text style={styles.title}>Piedra Papel y Tijera</Text>
        <View style={styles.gameContainer}>
            <View >
                <Text /*Se despliega todo un Visual para que el jugador sepa de que lado esta jugando , al igual que visualizar su seleccion de partida*/style={[
                    styles.gameText, 
                    (jugada === piedra) && {top: -71}, 
                    {color: '#9c33ff'}
                    ]}>
                        Player
                </Text>
                <Image style={[styles.gameImage,(jugada === piedra) && {height: 90}]} source={ (jugada) } alt="Jugada jugador" />
            </View>
            <Image style={styles.gameVS} source={ (vs) } />
            <View >
            <Text style={[
                    styles.gameText, 
                    (PC === piedra) && {top: -71}, 
                    {color: '#9c33ff'}
                    ]}>
                        PC
                </Text>
                <Image style={[styles.gameImage,(PC === piedra) && {height: 90}]} source={ (PC) } />
            </View>
        </View>
        <View >
            <Text /*Seleccionar una Jugada entre Piedra Papel o Tijeras*/style={styles.buttonText}>Elige tu jugada</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity  /*jugar con Piedra*/style={styles.button} onPress={ () => elegirJugada('piedra', piedra) }>
                    <Image style={[styles.buttonImage, {height: '65%', top:-5, left: -1}]} source={ (piedra) }/>
                </TouchableOpacity>
                <TouchableOpacity  /*jugar con Papel*/style={styles.button} onPress={ () => elegirJugada('papel', papel) }>
                    <Image style={styles.buttonImage} source={ (papel) } />
                </TouchableOpacity>
                <TouchableOpacity  /*jugar con Tijeras*/style={styles.button} onPress={ () => elegirJugada('tijeras', tijeras) }>
                    <Image style={styles.buttonImage} source={ (tijeras) }/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.marcadorContainer}>
            <View /*el marcador de la Player*/style={styles.marcadorTextContainer}>
                <Text style={{...styles.marcadorTextPlayer, color: 'orange'}}>Player</Text>
                <Text style={styles.marcadorTextPoints}>{marcadorJugador}</Text>
            </View>
            <View /*el marcador de la PC*/style={styles.marcadorTextContainer}>
                <Text style={{...styles.marcadorTextPlayer, color: 'orange'}}>PC</Text>
                <Text style={styles.marcadorTextPoints}>{marcadorPC}</Text>
            </View>
        </View>
    </View>
  )
}

export default PPoT
//estilos Piedra papel o Tijera
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
        borderColor: 'orange',
        borderTopEndRadius: 30,
        borderBottomLeftRadius:30,
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