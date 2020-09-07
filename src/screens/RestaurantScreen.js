import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/Yelp';

const RestaurantScreen = ({navigation})=>{
    const restaurantId=navigation.getParam('id');
    const [result,setResult]=useState(null);
    const getRestaurantInfo=async(id)=>{
        try {
         const response=await yelp.get(`/${id}`);
         setResult(response.data);   
        } catch (error) {
        }
       
    }
    useEffect(()=>{//FEITO PRA CHAMAR UMA VEZ
        getRestaurantInfo(restaurantId)
        console.log(result);
    },[]);
    if(!result){
        return null;
    }
    console.log(result);
    return<View>
        <Text>{result.name}</Text>
        <FlatList data={result.photos}
         keyExtractor={(photo)=>photo}
         renderItem={({item})=>{
         return <Image
         style={styles.img}
         source={{uri:item}}
       />
         }}/>
    </View>
}

const styles = StyleSheet.create({
    img:{
        height:100,
        width:100
    }
});
export default RestaurantScreen;