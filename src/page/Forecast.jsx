import React, { useContext, useState } from 'react'
import useSWR from "swr";
import { LocationContext } from './Dashboard';
import { ApiFetcher } from '../page/Current.jsx';
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
  console.log("forecast", data);


  // delete data.forecast.forecastday[0].day.condition;
  // delete data.forecast.forecastday[1].day.condition;
  // delete data.forecast.forecastday[2].day.condition;
  const threeDayWeather = [
    {
      day: data.forecast.forecastday[0].date,
      text: data.forecast.forecastday[0].day.condition.text,
      icon: data.forecast.forecastday[0].day.condition.icon,
      min_temp: data.forecast.forecastday[0].day.mintemp_c,
      max_temp: data.forecast.forecastday[0].day.maxtemp_c,

    },
    {
      day: data.forecast.forecastday[1].date,
      text: data.forecast.forecastday[1].day.condition.text,
      icon: data.forecast.forecastday[1].day.condition.icon,
      min_temp: data.forecast.forecastday[1].day.mintemp_c,
      max_temp: data.forecast.forecastday[1].day.maxtemp_c,

    },
    {
      day: data.forecast.forecastday[2].date,
      text: data.forecast.forecastday[2].day.condition.text,
      icon: data.forecast.forecastday[2].day.condition.icon,
      min_temp: data.forecast.forecastday[2].day.mintemp_c,
      max_temp: data.forecast.forecastday[2].day.maxtemp_c,

    },

  ]



  return (
    <div name='bottom-left' className='flex flex-row justify-around m-5 w-[inherit] ' >

      {
        threeDayWeather.map((item) =>
          <div className='flex flex-col justify-center items-center text-xl'>
            <p>{item.day}</p>
            <img src={item.icon} className=' w-40 h-40' />
            <p>{item.text}</p>
            <p>Min Temperature: {item.min_temp}C</p>
            <p>Max Temperature: {item.max_temp}C</p>
          </div>

        )
      }
    </div>
  )
}

export default Forecast
