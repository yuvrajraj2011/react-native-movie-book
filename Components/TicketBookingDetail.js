import React,{useState} from 'react'
import { View, Text, StyleSheet, Button, Alert} from "react-native";
import QRCode from 'react-native-qrcode-svg';

function TicketBookingDetail({ route, navigation }) {
      /* 2. Get the param */
    const { _id, name, rate, type, language  } = route.params;
    const [isSuccess, setSuccess] = useState(false);
    const Separator = () => (
        <View style={styles.separator} />
      );
    return (
       
        <View styles={styles.listItem}key={_id}>
        <Text styles={styles.textval}>Name: {name} </Text>
        <Text styles={styles.textval}>Language: {language} </Text>
        <Text styles={styles.textval}>Rate: {rate} </Text>
        <Text styles={styles.textval}>Type: {type} </Text>
        <Separator />
        {
            !isSuccess && (
                <Button title="Submit" onPress={() => {
                    setSuccess(true);
                    Alert.alert("Booking confirmation", "Congratulations, you have successfully booked the ticket");
              }}/>  
            )
        }
        {
            isSuccess && (
                <QRCode
                 value="http://awesome.link.qr"
                />
            )
            
        }
        
        </View>
      );
}

export default TicketBookingDetail;

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
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})
