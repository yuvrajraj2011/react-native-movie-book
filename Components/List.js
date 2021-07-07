import React,{useEffect} from 'react'
import { ScrollView, View,Text,Image,StyleSheet,Button } from 'react-native'
import { connect } from 'react-redux'
import {fetchLatestMovies} from '../Actions/LatestMoviesActions'

 function List({latestMoviesData,fetchLatestMovies}) {
   useEffect(()=>{
       fetchLatestMovies()
   },[])

   return latestMoviesData.loading ?(
       <Text>Loading...</Text>
       ): latestMoviesData.error ? (
           <Text>Error...</Text>
       ): (    
        <ScrollView>
            <View>
              {
                latestMoviesData && latestMoviesData.latestMoviesPreducer && latestMoviesData.latestMoviesPreducer.items &&  
                latestMoviesData.latestMoviesPreducer.items.map((item,key)=>{
                    return (
                        <View styles={styles.listItem}key={key}>
                        <Image source={{uri:item.imageUrl}} style={styles.placeImage}/>
                        <Text styles={styles.textval}>
                            {item.name}
                        </Text>
                        <Text>Details Screen</Text>
                        <Button title="Details"/>
                        </View>
                    )

                })
              }
            </View>
       </ScrollView>
    )
}


const mapStateToProps = (state) =>
  ({
    latestMoviesData:state
    
})


const mapDispatchToProps = disptach=> {
  return {
    fetchLatestMovies:()=>disptach(fetchLatestMovies())
  }   
}

export default connect(mapStateToProps, mapDispatchToProps)(List)



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
