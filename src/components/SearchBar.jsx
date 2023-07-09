
import {React, useEffect, useState } from 'react'
import { Input, Button } from 'antd';
import useSWR from "swr";
import { Link, useNavigate, redirect } from "react-router-dom";
import Dashboard from '../page/Dashboard';

const key = '2d132eec13fd43018af03710230307';
const fetcher = (url) => fetch(url).then((res) => res.json());


const SearchBar = () => {

  // const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const { data, error, isLoading } = useSWR(
    "http://ip-api.com/json/",
    fetcher
  );
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  const ipLocation = data.city;

  const onSearch = (s) => {
    // setLocation(value);
    console.log(s);
    navigate(`/dashboard?s=${s}`);
  }

  // console.log('location', location);

  return (
    
    <div className='flex flex-col justify-end items-center mb-0'>
      
      <Input.Search style={{ width: '18rem', maxWidth: '500px', height: '1rem' }} allowClear
              placeholder="Search City Name" onSearch={onSearch}/>

           <a className='pt-4'>Current IP location is {ipLocation}</a>  

    </div>
  )
}

export default SearchBar