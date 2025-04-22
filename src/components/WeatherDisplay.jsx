import React from 'react';


const WeatherDisplay=({temperature})=>{

    const temperatureStyle={
        color: temperature.temp > 20 ? 'red' : 'blue'
      };
    return(
        <div>
            <p>
               Temperature: <span style={temperatureStyle}>{temperature.temp}°C</span>
            </p>
            <p>Conditions: {temperature.conditions}</p>
        </div>
    )
}

export default WeatherDisplay;