import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';
import {arrData, dummyData,objData} from '../Utils/preData.jsx';

const obj = objData;


const dataDummy = dummyData;
const StateContext = createContext();
// eYVNNWoGj0nTTE7EOH9cXTA9qzh50vDF

export const StateContextProvider = ({ children }) => {
    const arr = arrData;
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState({})
    const [place, setPlace] = useState('Karnataka')
    const [thisLocation, setLocation] = useState('')




    // fetch api
    const fetchWeather = async () => {
        const options = {
            method: 'GET',
            headers:{
                accept: 'application/json'
            }
        }

       

      const response = await  fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${place}&apikey=2aj7QwO7BAn76KjXQ6V8Ww5QMcPefSJU`,options)
       .then(response => response.json())
        .catch(error => console.error(error));

      return response;
    }


    // fetch forcasting data
    const forcastData = async () => {
        const options = {
            method: 'GET',
            headers:{
                accept: 'application/json'
            }
        }

       

      const response = await  fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${place}&apikey=2aj7QwO7BAn76KjXQ6V8Ww5QMcPefSJU`,options)
       .then(response => response.json())
        .catch(error => console.error(error));

      return response;
    }


    const storeData = async () => {
        const fetchData = await fetchWeather();
        console.log("fetched data",fetchData);
        if(fetchData.code){
            alert("Api request limit exceeded!");
            
        }
        // const data = dataDummy.data;
        const data = fetchData.data;
        
        const valuesData = data.values;

        const locationData = dataDummy.location;
    
        const addressData = locationData.name;
 
        const weatherData = valuesData;
      

        const forcast_data = await forcastData();


        // const forcast_data = obj;   // using dummy data
    

        const minutely = Object.values(forcast_data.timelines["minutely"]);
        // console.log("minutely",minutely);
        

        
        setLocation(addressData);
        setValues(minutely);
        setWeather(weatherData);

    }
   
  

    useEffect(() => {
        storeData()
    }, [place])

    useEffect(() => {
        if(!values){
            alert('Place does not exist');

        }else{

        
        console.log("values",values)
    }
    }, [values])


    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)