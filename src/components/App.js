import React,{useState} from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  
  const [temperature,setTemperature]=useState({
    temp: 25,
    conditions: "Sunny"
  })

  return (
    <div>
      <WeatherDisplay 
      temperature={temperature}
      />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
