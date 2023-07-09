import React from 'react'
import WeatherIcon from '../assets/weather-icon-png-8.png';
import { Link } from 'react-router-dom';

// reads parameter height and text size 
const Logo = ({height, textSize}) => {
  return (
    <Link to={'/'}>
          <div name='logo' className={ `flex flex-row justify-center items-center ${height}`}>
              <img className='aspect-square h-[inherit]' src={WeatherIcon} />
          <p className={`${textSize} pt-2`} >My Weather App</p>
          </div>
    </Link>
  )
}

export default Logo
