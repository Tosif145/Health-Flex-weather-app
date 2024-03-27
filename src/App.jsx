
import search from './assets/icons/search.svg'
import { useState } from 'react'
import { useStateContext } from './Context'
import { BackgroundLayout, WeatherCard, MiniCard } from './Components'
import './App.css'


function App() {
  
  const [input, setInput] = useState('');
  const { weather, thisLocation, values, place, setPlace } = useStateContext()



  // console.log("weather",weather);
  const submitCity = () => {
    setPlace(input)
    setInput('')
  }
  return (
    <div className="w-full h-screen text-white px-8">
       <nav className='w-full p-3 flex justify-between items-center'>
          <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
          <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex  items-center p-2 gap-2">
          <img src={search} placeholder="search city" alt="search" className='w-[1.5rem] h-[1.5rem]' />

            <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              // sumit the form
              submitCity()
            }
          }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
          </div>
       </nav>
       <BackgroundLayout></BackgroundLayout>
       <div className="mine">

       <main className='main w-full flex flex-wrap gap- py-4 px-[10%] items-center justify-center'>
       <WeatherCard
          place={thisLocation}
          windspeed={weather["windSpeed"]}
          humidity={weather['humidity']}
          temperature={weather['temperature']}
          heatIndex={weather["uvHealthConcern"]}
          iconString={weather["weatherCode"]}
          conditions={weather["weatherCode"]}
        />
       </main>

       <div className='mini flex justify-center gap-8 flex-wrap w-[50%]'>
       {
  Object.entries(values).slice(1, 7).map(([key, value]) => {
    console.log("correct", value); // Correctly accesses the nested time property
    return (
      <MiniCard
        key={key}
        time={value.time} // Access the time property within the values object
        temp={value.values["temperature"]} // Example: Accessing temperature
        imageString={value.values["weatherCode"]} // Example: Accessing weather code
   
      />
    )
  })
}

</div>
</div>

    </div>
  );
}

export default App;
