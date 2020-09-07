import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({term,onTermChange,onTermSubmit})=>{
    return <View style={styles.bg}>
        <FontAwesome name="search" style={styles.iconStyle} />
        <TextInput 
        value={term} 
        onChangeText={onTermChange}
        style={styles.inputStyle} 
        placeholder="Search" 
        autoCapitalize='none'
        autoCorrect={false} 
        onEndEditing={onTermSubmit} />
        </View>
}

const styles = StyleSheet.create({
    bg:{
        marginVertical:15,
        backgroundColor:'#e8eaeb',
        height:50,
        borderRadius:7,
        marginHorizontal:20,
        flexDirection:'row',
    },
    inputStyle:{
     flex:1,
     fontSize:22,
    },
    iconStyle:{
      fontSize:35,
      alignSelf:"center",
      marginHorizontal:10
    }
});
export default SearchBar;