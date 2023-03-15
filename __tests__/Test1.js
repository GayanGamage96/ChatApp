import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const Login = () => {
    const navigation = useNavigation();
    const [userName, setUserName] = React.useState("");
    const [passWord, setPassWord] = React.useState("");

    const onLogin = ()=>{
            console.log(userName);
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('../../assets/images/loginimage.png')} resizeMode='cover' style={styles.image}></Image>



                </View>
                <View style={styles.formInput}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#004B23', textAlign: 'center' }}>USER LOGIN</Text>
                </View>

                <View style={styles.formInput}>

                    <TextInput
                        style={styles.txtInput}
                        placeholder='Username'
                        value={userName}
                        onChangeText={text => setUserName(text)}
                    />
                </View>
                <View style={styles.formInput}>
                    <TextInput

                        style={styles.txtInput}
                        placeholder='Password'
                        secureTextEntry={true}
                        value={passWord}
                        onChangeText={text => setPassWord(text)}
                    />
                </View>
                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.button2} onPress={() => { navigation.navigate('ForgetPassword') }}>
                        <Text style={{ color: "#004B23", fontSize: 16, textAlign: 'right', fontWeight: 'bold' }}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.button} onPress={() => onLogin()}>
                        <Text style={{ color: "#ffff", fontSize: 16, textAlign: 'center' }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formInput}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 30 }}>

                        <TouchableOpacity style={{ marginRight: 10 }}>
                            <Image source={require('../../assets/images/google.png')} style={{ width: 50, height: 50, borderRadius: 1000 }}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Image source={require('../../assets/images/fb.png')} style={{ width: 42, height: 42, borderRadius: 1000 }}></Image>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.button2} onPress={() => { navigation.navigate('Register') }}>
                        <Text style={{ color: "#004B23", fontSize: 16, textAlign: 'left', fontWeight: 'bold' }}>Need Account? Register Now</Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

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
        marginTop: 10,
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
});