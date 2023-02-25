import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const ForgetPassword = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('../../assets/images/loginimage.png')} resizeMode='cover' style={styles.image}></Image>
                     
                    

                </View>
                <View style={styles.formInput}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#004B23', textAlign: 'center' }}>VERIFY YOUR EMAIL ADDRESS</Text>
                </View>
                
                <View style={styles.formInput}>
                
                    <TextInput
                        style={styles.txtInput}
                        placeholder='Email Address'
                    />
                </View>
                
                               
                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: "#ffff", fontSize: 16, textAlign: 'center' }}>Send Reset Link</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.button2} onPress={()=>{navigation.navigate('Login')}}>
                        <Text style={{ color: "#004B23", fontSize: 16, textAlign: 'left', fontWeight: 'bold' }}>Already have Account? Login</Text>
                    </TouchableOpacity>
                </View>
               
                

             
                          
            </ScrollView>
        </SafeAreaView>
    )
}

export default ForgetPassword;

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 230
    },
    container: {
        // flex:1,
        // height:'100%'
    },

    formInput: {
        padding: 10,
        marginTop: 20,
    },
    txtInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#006400",
        borderRadius: 10,
        
    },

    button: {
        padding: 12,
        backgroundColor: '#007F5F',
        borderRadius: 20,
        width: '40%',
        marginHorizontal: '30%'
    },
    button2: {
        padding: 12,

        borderRadius: 10
    }
})