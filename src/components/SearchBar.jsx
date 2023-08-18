
import {React, useEffect, useState } from 'react'
import { Input, AutoComplete, Button } from 'antd';
import useSWR from "swr";
import { useNavigate} from "react-router-dom";
import { ApiFetcher, ApiKey } from '../page/Current';





const SearchBar = () => {

const navigate = useNavigate();



  async function onSearch(searchText) {
    if (searchText === '') {
      return '';
    } else {
      const res = await fetch("http://api.weatherapi.com/v1/search.json?key=" + ApiKey + "&q=" + searchText)
      const data = await res.json()  //.then((response) => response.json()).then((data) => {
      // setOptions(data[0].name);
          if (data.length > 0) {
            console.log(data);

            //setOptions(data[0].name + ", " + data[0].region);
            navigate(`/dashboard?s=${searchText}`);
          }
          else {
            alert("No such city")
            console.log("no such city");
          }
        };
    console.log(searchText);
    }
    // setLocation(value);
    
    
  

  // console.log('location', location);

  return (
    
    <div className='flex flex-col justify-end items-center mb-0'>

      <Input.Search
      style={{ width: '18rem', maxWidth: '500px', height: '1rem' }} 
        placeholder="Search City Name"
        onSearch={onSearch}/>

           {/* <a className='pt-4'>Current IP location is {ipLocation}</a>   */}

    </div>
  )
}

export default SearchBar
