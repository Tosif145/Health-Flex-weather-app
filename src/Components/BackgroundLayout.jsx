import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
//images
import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'



const BackgroundLayout = () => {

  const { weather } = useStateContext();
  const [image, setImage] = useState(Sunny)


  useEffect(() => {
 
    if (weather['weatherCode']) {
      
      let imageString = weather['weatherCode']
      if (imageString == 1000) {
        setImage(Clear)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setImage(Clear)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setImage(Rainy)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setImage(Snow)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setImage(Fog)
      } else if (imageString >= 1001 || imageString <= 1100) {
        setImage(Stormy)
      }else{
        setImage(Cloudy)
      }
    }
  }, [weather])
  return (
    <div>
      <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
    </div>
  )
}

export default BackgroundLayout
