import { StatusBar } from 'expo-status-bar';
import React,{ useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import List from './Components/List';
import {Provider} from 'react-redux'
import store  from './Store'

export default function App() {
  const [text, setText ]= useState("Hello World!!")
  return (
    
      <View style={styles.container}>
        <Provider store={store}>
        <Text style={styles.mainHeading}>Shopping Cart</Text>
        <List></List>

        {/* <Text>{text}</Text>
        <Button title="Change Text" onPress={()=>{setText("Changed Text")}}></Button>
          */}
        <StatusBar style="auto" />
        </Provider>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHeading:{
    marginTop:20,
    fontWeight:"bold",
    color:"red",
    fontSize:30
  }
});
