import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";
import RestaurantScreen from "../screens/RestaurantScreen";

const SearchScreen = ()=>{
    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();
    
    const filterResultsByPrice=(price)=>{
        return results.filter(result=>{
        return result.price==price;
        })
    }
    return <>
        <SearchBar term={term} onTermChange={newTerm=>setTerm(newTerm)}
        onTermSubmit={()=>searchApi(term)} />
        {errorMessage!=null?<View><Image
            style={styles.errMessage}
            source={require('../Images/error.png')}
          /><Text>{errorMessage}</Text></View>:null}
         <ScrollView>
         <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
         <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
         <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender!"/>
         <ResultsList results={filterResultsByPrice('$$$$')} title="Super Fancy!"/>
         </ScrollView>
        </>
}

const styles = StyleSheet.create({
    errMessage:{
        width:200,
        height:200,
        alignSelf:"center",
        marginVertical:150
    }
});
export default SearchScreen;