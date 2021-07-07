import React,{useEffect} from 'react'
import { ScrollView, View,Text,Image,StyleSheet } from 'react-native'
import data from '../JSON/native.json'
import { connect } from 'react-redux'
import {fetchProducts} from '../Actions/ProductActions'

 function LatestMovies({productsData,fetchProducts}) {
   useEffect(()=>{
       fetchProducts()
   },[])

   return productsData.loading ?(
       <Text>Loading...</Text>
       ): productsData.error ? (
           <Text>Error...</Text>
       ): (    
        <ScrollView>
            <View>
              {
                  
                productsData && productsData.preducer && productsData.preducer.items &&  
                productsData.preducer.items.map((item,key)=>{
                    
                    return (
                        <View styles={styles.listItem}key={key}>
                        
                        <Image source={{uri:item.imageUrl}} style={styles.placeImage}/>
                        <Text styles={styles.textval}>
                            {item.name}
                            
                        </Text>
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
    productsData:state
    
})


const mapDispatchToProps = disptach=> {
  return {
      fetchProducts:()=>disptach(fetchProducts())
  }   
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies)



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
