import React, { useContext, useState } from 'react'
import useSWR from "swr";
import { LocationContext } from './Dashboard';


const key = '2d132eec13fd43018af03710230307';
const fetcher = (url) => fetch(url).then((res) => res.json());


const Current = () => {
  const location = useContext(LocationContext);

  // fetch current weather data from api
  // const { data, error, isLoading } = useSWR(
  //   location === '' ? undefined : "https://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + location + "&aqi=no",
  //   fetcher
  // );
  // if (error) return "error";
  // if (isLoading) return "Loading...";
  // console.log("curent", data.current);

  // delete data.current.condition;


  // const dataItemToKeyValues = (item) => {
  //   const entries = Object.entries(item);
  //   const listItems = entries.map(([key, value]) => (
  //     <tr><th>{key}</th>
  //       <td>{value}</td></tr>
  //   ));
  //   return <table>{listItems}</table>;
  // };


  return (
    <div name='bottom-left' >
{/* 
        {

          dataItemToKeyValues(data.current)
        } */}
      <h1>hello world</h1>

    </div>
  )
}

export default Current
