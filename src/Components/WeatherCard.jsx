import React, { useEffect, useState } from 'react'
import { useDate } from '../Utils/useDate'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import '../index.css'

const WeatherCard = (
  {
    temperature,
    windspeed,
    humidity,
    place,
    uvHealthConcern,
    imageString,
    conditions,
  }
) => {
  

  const [icon, setIcon] = useState(sun)
  const { time } = useDate()

  
  useEffect(() => {
    if (imageString) {
      if (imageString >= 1000 || imageString <= 1100) {
        setIcon(sun)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setIcon(rain)
      }  else if (imageString >= 1001 || imageString <= 1100) {
        setIcon(storm)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setIcon(fog)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setIcon(snow)
      } else{
        setIcon(cloud)
      }
    }
  }, [imageString])
  
  return (
    <div className=' weather w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
      <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center' >{temperature} &deg;C</p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{windspeed} km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <p className='font-normal'>{humidity} gm/m&#179;</p></p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Health Concern</p>
        <p className='text-lg'>{uvHealthConcern ? uvHealthConcern : 'Not to worry'}</p>
      </div>
      <hr className='bg-slate-600' />
      
    </div>
  )
}

export default WeatherCard
