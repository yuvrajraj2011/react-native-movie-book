import { StatusBar } from 'expo-status-bar';
import React,{ useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import List from './Components/LatestMovies';
import {Provider} from 'react-redux'
import store  from './Store'
import Navbar from "./Components/Navbar";

=======
import List from './Components/List';
import {Provider} from 'react-redux'
import store  from './Store'
>>>>>>> 16e1c2d0ca996b2335e1f97fb3ae8be00e470895

export default function App() {
  const [text, setText ]= useState("Hello World!!")
  return (
<<<<<<< HEAD
      <View >     
          <Navbar></Navbar>               
=======
    
      <View style={styles.container}>
        <Provider store={store}>
        <Text style={styles.mainHeading}>Shopping Cart</Text>
        <List></List>

        {/* <Text>{text}</Text>
        <Button title="Change Text" onPress={()=>{setText("Changed Text")}}></Button>
          */}
        <StatusBar style="auto" />
        </Provider>
>>>>>>> 16e1c2d0ca996b2335e1f97fb3ae8be00e470895
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
