import { StyleSheet,View ,ScrollView,Text,TouchableOpacity,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper';






const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [data,setData] = React.useState([]);
    const [filterData,setFilterData] = React.useState([]);
    

    useEffect(()=>{
        fetchData("https://randomuser.me/api/?page=3&results=10&seed=abc");
    },[]);

    const fetchData = async(url)=>{
        try{
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setFilterData(json.results);
            
        }catch(error){
            console.log(error);
        }
    };

    

    return (
        <ScrollView>
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Text style={styles.txtstudent}>Students</Text>
            {
                filterData.map((item,index)=>{
                    <View key={index} style={styles.itemContainer}>
                        <Image
                        source={{uri:item.picture.large}}
                        style={styles.image}
                        />
                        <View>
                            <Text style={styles.txtname}>{item.name.first}{item.name.last}</Text>
                            <Text style={styles.txtemail}>{item.login.username}</Text>
                        </View>
                        </View>
                })
            }

        </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    txtstudent:{
        fontSize:20,
        textAlign:'left',
        marginLeft:10,
        fontWeight:'bold',
        marginTop:10

    }
})