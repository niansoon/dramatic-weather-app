import AreaInput from '../components/AreaInput';
import PSI from '../components/PSI';
import { useState, useEffect } from 'react';
import UVI from '../components/UVI';
import FourDayWeather from '../components/FourDayWeather';
import TwoHourWeather from '../components/TwoHourWeather';
import TwentyFourHourForecast from '../components/TwentyFourHourForecast';

const WeatherContainer = () => {

    const [weather, setWeather] = useState({
        value: 'Singapore',
        region: 'national', // default before user inputs area
    })

    useEffect(() => {
        console.log("Area:", weather.value);
        console.log("Region:", weather.region);
    })

    return (<>
        <h1 style={{textAlign:'center'}}>The Dramatic Weather App</h1>
        <div className='app-container'>
            <div className='weather-container'>
                <div className='search-bar'>
                    <AreaInput result={{
                        weather: weather,
                        setWeather: setWeather
                    }}/>
                </div>
                <div className='today-weather'>
                    <TwoHourWeather area={weather.value} />
                </div>
                <div className='nav-bar'>
                    <a href='#'>Today</a>
                    <a href='#'>Next 3 days</a>
                </div>
                <div className='twenty-four-hr-weather'>
                    <TwentyFourHourForecast region={weather.region} />
                </div>
                <div className='next-three-days-weather'>
                    <FourDayWeather />
                </div>
            </div>
            <div className='uvi-psi-container'>
                <div className='uvi'>
                    <UVI />
                </div>
                <div className='psi'>
                    <PSI region={weather.region} />
                </div>
            </div>
        </div>
    </>)
}

export default WeatherContainer;