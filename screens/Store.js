import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView,TouchableOpacity } from 'react-native';
import Card from '../Card';
import cards from '../cards';
import { useNavigation } from '@react-navigation/native';

function Store() {
    
    const navigation = useNavigation();
    return (
        <View style={{ height: '100%', backgroundColor: 'black', borderTopColor: "#9c33ff", borderTopWidth: 1}}>
            
            <ScrollView style={styles.scroll}> 
            <View style={styles.containerButton}>
                {
                    cards.map( card => {
                        const { id, description, url, screen } = card;
                        return (
                            <Card key={id} >
                                    <Image 
                                        style={{width: '100%', height: 110,
                                        borderTopRightRadius: 8, borderTopLeftRadius: 8}}
                                        source={{uri: url}}
                                    />
                                    <Text style={styles.text}>{description}</Text>
                                    <TouchableOpacity
                                        style={styles.buttonLocation}
                                        onPress={() => navigation.push(`${screen}`)}
                                    >
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>Jugar</Text>
                                        </View>
                                    </TouchableOpacity>
                                  
                            </Card>
                        )
                    })
                }
            </View>
            </ScrollView>

            
            
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        marginRight: 'auto',
        marginLeft: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginTop: 50,
        padding: 10,
        overflow: 'hidden',
        width: '95%',
        height: 'auto',
    },
    text: {
        textAlign: 'center',
        color: 'black',
        marginVertical: 4,
        paddingVertical: 4,
    },
    scroll: {
        marginBottom: 90,
    },

    button: {
        backgroundColor: 'black',
        padding: 5,
        width: '50%',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    buttonLocation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


})

export default Store;