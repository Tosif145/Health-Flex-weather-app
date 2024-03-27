import React, { useEffect, useState } from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

const MiniCard = ({ time, temp, imageString }) => {

  const [icon, setIcon] = useState(wind)

  useEffect(() => {
    if (imageString) {
      if (imageString >= 1001 || imageString <= 1100) {
        setIcon(cloud)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setIcon(rain)
      }  else if (imageString >= 1001 || imageString <= 1100) {
        setIcon(storm)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setIcon(fog)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setIcon(snow)
      } else{
        setIcon(sun)
      }
    }
  }, [imageString])


  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleString('en-US', { timeZone: 'UTC' })}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard
