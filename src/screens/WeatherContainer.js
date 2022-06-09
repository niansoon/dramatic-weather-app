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
        region: ''
    })

    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const showToday = () => {
        setShow1(true);
        setShow2(false)
    }
    const showNextThreeDays = () => {
        setShow1(false);
        setShow2(true)
    }

    useEffect(() => {
        console.log("Area:", weather.value);
        console.log("Region:", weather.region);
    })

    return (<>
        <h1 style={{ textAlign: 'center' }}>The Dramatic Weather App</h1>
        <div className='app-container'>
            <div className='all-weather-container'>
                <div className='search-bar'>
                    <AreaInput result={{
                        weather: weather,
                        setWeather: setWeather
                    }} />
                </div>
                <div className='today-weather'>
                    <TwoHourWeather area={weather.value} />
                </div>
                <div className='nav-bar'>
                    <button onClick={showToday} id={show1 ? 'show' : 'hide'}>Next 24 hours</button>
                    <button onClick={showNextThreeDays} id={show2 ? 'show' : 'hide'}>Next 3 days</button>
                </div>
                <div className='twenty-four-hr-weather'>
                    {
                        show1 ? <TwentyFourHourForecast region={weather.region} /> : null
                    }
                </div>
                <div className='next-three-days-weather'>
                    {
                        show2 ? <FourDayWeather /> : null
                    }
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