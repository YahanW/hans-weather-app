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

  delete data.current.condition;


  const dataItemToKeyValues = (item) => {
    const entries = Object.entries(item);
    const listItems = entries.map(([key, value]) => (
      <tr><th>{key}</th>
        <td>{value}</td></tr>
    ));
    return <table>{listItems}</table>;
  };


  return (
    <div name='bottom-left' className='flex justify-center items-center m-5 w-[inherit] bg-gray-400'>

        {

          dataItemToKeyValues(data.current)
        }


    </div>
  )
}

export default Current
