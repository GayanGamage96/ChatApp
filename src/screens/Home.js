import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.imageHolder}>
                    <Image source={require('../assets/images/homeimage.png')} resizeMode='contain' style={styles.image}></Image>
                </View>

                <View style={styles.imageHolder2}>
                    <Image source={require('../assets/images/text.png')} resizeMode='contain' style={styles.image2}></Image>
                </View>


                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Register') }}>
                        <Text style={{ color: "#ffff", fontSize: 16, textAlign: 'center' }}>Register Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Login') }}>
                        <Text style={{ color: "#ffff", fontSize: 16, textAlign: 'center' }}>Login to Start</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 30

    },
    myTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: 250,
        height: 250
    },
    imageHolder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',


    },
    imageHolder2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',



    },

    image2: {
        width: 280,
        height: 250,
        marginBottom: 20
    },
    formInput: {
        padding: 10,

    },
    button: {
        padding: 12,
        backgroundColor: '#007F5F',
        borderRadius: 20,
        width: '40%',
        marginHorizontal: '30%'
    },
});