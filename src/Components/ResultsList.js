import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetail from "../Components/ResultDetail";
import {withNavigation} from 'react-navigation';

const ResultsList=({title,results,navigation})=>{
    return results.length==0?null:(<View>
        {console.log(results)}
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={results} 
        keyExtractor={(result)=>result.id}
        renderItem={({item})=>{
        return <TouchableOpacity onPress={()=>navigation.navigate('Restaurant',{id:item.id})}>
            <ResultDetail 
        name={item.name} 
        imageURL={item.image_url}
        stars={item.rating}
        reviews={item.review_count} />
        </TouchableOpacity>
        }}
        />
        </View>)
}
const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:20
    }
});

export default withNavigation(ResultsList);