import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';


const Home = () => {

    return (
        <div name='home' className='bg-gray-100 h-screen w-full flex flex-col justify-center items-center'>
            <Logo height={'h-32'} textSize={'text-4xl'} />
            <SearchBar/>
        </div>
    )
}

export default Home
