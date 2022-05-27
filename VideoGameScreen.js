import React from 'react';
import { Text,View,Image,StyleSheet } from "react-native";

function VideoGameScreen(_props) {
    return (
        <><View style={{ flex: 1,alignItems: 'center', flexDirection: "column"}}>
        </View><View style={styles.container}>
                <View>
                    <Image
                        style={{
                            borderBottomLeftRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                            height: 100,
                            width: 300
                        }}
                        source={require("./assets/guessmyNumber.jpg")} />
                    <Text>                      Adivina el Numero</Text>
                </View>
                <View>
                    <Image
                        style={{
                            borderBottomLeftRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                            height: 100,
                            width: 300
                        }}
                        source={require("./assets/piedra-papel-tijera--644x390.jpg")} />
                    <Text>                  Piedra Papel o Tijera</Text>
                </View>
                <View>
                    <Image
                        style={{
                            borderBottomLeftRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                            height: 100,
                            width: 300
                        }}
                        source={require("./assets/Minesweaper.png")} />
                    <Text>                          Buscaminas</Text>
                </View>
            </View></>
    );
    
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "vertical",
      justifyContent: "space-around",
      alignItems: "center",
      height: "100%",
      textAlign: "center"
    }
  });
export default VideoGameScreen;