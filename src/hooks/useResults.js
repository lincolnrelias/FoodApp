import {useEffect,useState} from 'react';
import yelp from "../api/Yelp";

export default ()=>{
    const [results,setResults]=useState([]);
    const [errorMessage,setErrorMessage]=useState(null);
    const searchApi=async(searchTerm)=>{
        try{
       const response = await yelp.get('/search',{
         params:{
             limit:50,
             term:searchTerm,
             location:'san jose'
            }
        });
        setResults(response.data.businesses);     
        }catch(err){
        setErrorMessage('something went wrong!');
        }
    };
    useEffect(()=>{
        searchApi('steak');
    },[])
    return [searchApi,results,errorMessage];
}