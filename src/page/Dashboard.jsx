import React, { useEffect } from 'react'
import Logo from '../components/Logo'
import { Tabs } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import SearchBar from '../components/SearchBar';
import useSWR from "swr";
import { Link, useLocation } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import Current from './Current';
import Forecast from './Forecast';

export const LocationContext = createContext(null);


/* To GET string location (s) from URL */
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Current`,
    children: <Current/>,
  },
  {
    key: '2',
    label: `Forecast`,
    children: <Forecast/>,
  },
];

const Dashboard = () => {

  // const [isCurrent, setIsCurrent] = useState('')

  const q = useQuery();
  const location = q.get('s');
  
  console.log('q',location);
  // setLocation(q.get('s'));

  //   const {data, error, isLoading } = useSWR(
  //     location === '' ? undefined : "https://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + location + "&aqi=no",
  //     fetcher
  //   );
  //   if (error) return "error";
  //   if (isLoading) return "Loading...";
  //   console.log("curent", data.current);

  
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
    <div name="dashboard" className='w-full h-screen flex flex-col justify-start items-center bg-gray-100'>
      <LocationContext.Provider value={location}>

        {/* header part */}
      <div name='header' className='w-[95%] h-20 flex flex-row justify-between items-center ml-[5%]'>
        <Logo height={'h-16'} textSize={'text-sm'}/>
        <h1 className='text-2xl'>Showing Weather for {location}</h1>
        <SearchBar/>
              
      </div>
      {/* separates the two parts  */}
      <div name='divider' className='w-full flex felx-col justify-center items-end'>
          <Divider />
          
      </div>
      
      
      {/* bottom part contains 3 panels displaying "Today" "Hourly" and "3-days" */}
      <div className='w-full ps-14'>

          <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
      </div>


      </LocationContext.Provider>
    </div>
  )
}

export default Dashboard 
