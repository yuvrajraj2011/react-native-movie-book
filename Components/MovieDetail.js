import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, Button} from "react-native";
import axios from "axios";

function MovieDetail({ route, navigation }) {
      /* 2. Get the param */
    const { _id } = route.params;
    const [item, setMovie] = useState([]);
    useEffect(() => {
    axios
      .get(`http://3.17.216.66:4000/latest/${_id}`)
      .then((response) => response.data)
      .then((json) => {
        setMovie(json);
        
      })
      .catch((error) => console.error(error));
    }, [item]
    
    );
    
    return (
       
        <View styles={styles.listItem}key={item._id}>
        <Image source={{uri:item.imageUrl}} style={styles.placeImage}/>
        <Text styles={styles.textval}>Name: {item.name} </Text>
        <Text styles={styles.textval}>Language: {item.language} </Text>
        <Text styles={styles.textval}>Rate: {item.rate} </Text>
        <Text styles={styles.textval}>Type: {item.type} </Text>
        <Button title="Book Now" onPress={() => navigation.navigate('TicketBookingDetail', {
            _id:item._id,
            name:item.name,
            language: item.language,
            rate: item.rate,
            type:item.type
        })}/>  
        </View>
      );
}

export default MovieDetail;

const styles = StyleSheet.create({
    listContainer:{
        width:"80%"
      },
    listItem:{
        width:"100%",
        padding:10,
        marginTop:2,
        color:'#191970',
        backgroundColor: '#eee',
        alignSelf:'stretch',
    },
    placeImage:{
        marginRight:8,
        height:200
    },
    textval:{
        textAlign:'center',
        fontSize:30
    }
})
