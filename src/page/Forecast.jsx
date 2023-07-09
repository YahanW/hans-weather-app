import React, { useContext, useState } from 'react'
import useSWR from "swr";
import { LocationContext } from './Dashboard';
import { ApiFetcher } from '../components/SearchBar';
import { ApiKey } from './Current';

const Forecast = () => {
  const location = useContext(LocationContext);

  console.log("location", location);

  // fetch current weather data from api
  const { data, error, isLoading } = useSWR(
    location === '' ? undefined : "https://api.weatherapi.com/v1/forecast.json?key=" + ApiKey + "&q=" + location + "&days=3&aqi=noalerts=no",
    ApiFetcher
  );
  if (error) return "error";
  if (isLoading) return "Loading...";
  console.log("forecast", data.forecast.forecastday);


  delete data.forecast.forecastday[0].day.condition;
  delete data.forecast.forecastday[1].day.condition;
  delete data.forecast.forecastday[2].day.condition;


  const dataItemToKeyValues = (item) => {
    const entries = Object.entries(item);
    const listItems = entries.map(([key, value]) => (
      <tr><th>{key}</th>
        <td>{value}</td></tr>
    ));
    return <table>{listItems}</table>;
  };


  return (
    <div name='bottom-left' className='flex flex-row justify-around m-5 w-[inherit] bg-gray-400' >

      <div>{dataItemToKeyValues(data.forecast.forecastday[0].day)}</div>
      <div>{dataItemToKeyValues(data.forecast.forecastday[1].day)}</div>
      <div>{dataItemToKeyValues(data.forecast.forecastday[2].day)}</div>


    </div>
  )
}

export default Forecast
