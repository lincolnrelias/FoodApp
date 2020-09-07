import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

const ResultDetail=({name,stars,imageURL,reviews})=>{
return <View style={styles.restaurantCard}>
    <Image
        style={styles.imageStyle}
        source={{uri:imageURL}}
      />
    <Text style={styles.nameStyle}>{name}</Text>
    <Text style={styles.descStyle}>{stars} Stars, {reviews} Reviews</Text>
    </View>
}
const styles = StyleSheet.create({
    restaurantCard:{
        marginHorizontal:20,
        marginVertical:15,
    },
    imageStyle:{
        width:230,
        height:120,
    },
    nameStyle:{
        fontSize:16,
        fontWeight:'bold'
    },
    descStyle:{
        fontSize:15,
        color:'#919191',
    }
});
export default ResultDetail;