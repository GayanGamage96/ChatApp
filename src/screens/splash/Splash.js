import React, { useEffect, useState } from 'react';
import { Image, View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Splash = () => {
    const [isGo,setIsGo]=useState(true);
    const navigation=useNavigation();

    useEffect(()=>{
        if(isGo==true){
            setTimeout(() => {
                navigation.navigate("Home");
                setIsGo(false);
            },2000);
           
        }
    })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={{
                    width: 110,
                    height: 140,
                    marginBottom: 80
                }}>
            </Image>
            
        </View>
    )
}

export default Splash;