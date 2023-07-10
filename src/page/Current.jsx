import React, { useContext, useState } from 'react'
import useSWR from "swr";
import { LocationContext } from './Dashboard';
import { ApiFetcher } from '../components/SearchBar';


export const ApiKey = '2d132eec13fd43018af03710230307';

const Current = () => {
  const location = useContext(LocationContext);

  console.log("location", location);

  // fetch current weather data from api
  const { data, error, isLoading } = useSWR(
    location === '' ? undefined : "https://api.weatherapi.com/v1/current.json?key=" + ApiKey + "&q=" + location + "&aqi=no",
    ApiFetcher
  );
  if (error) return "error";
  if (isLoading) return "Loading...";
  console.log("curent", data);

  // delete data.current.condition;


  const curWeather = [
    {
      text: data.current.condition.text,
      icon: data.current.condition.icon,
      temp: data.current.temp_c,
    }
  ]


  return (
    <div name='bottom-left' className='flex justify-center items-center m-5 w-[inherit]'>

        {
          curWeather.map((item)=>
            <div className='flex flex-col justify-center items-center text-xl'>
            <img src={item.icon} className=' w-40 h-40'/>
              <p>{item.text}</p> 
              <p>Temperature Now is {item.temp}C</p>
              </div>
            
              )
        }


    </div>
  )
}

export default Current
