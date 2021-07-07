import { StatusBar } from 'expo-status-bar';
import React,{ useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import List from './Components/LatestMovies';
import {Provider} from 'react-redux'
import store  from './Store'
import Navbar from "./Components/Navbar";


export default function App() {
  const [text, setText ]= useState("Hello World!!")
  return (
      <View >     
          <Navbar></Navbar>               
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
