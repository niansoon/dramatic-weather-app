import AreaInput from '../components/AreaInput';
import PSI from '../components/PSI';
import { useState, useEffect } from 'react';
import UVI from '../components/UVI';
import App from '../App';
import FourDayWeather from '../components/FourDayWeather';
import TwoHourWeather from '../components/TwoHourWeather';

const WeatherContainer = () => {

    const [weather, setWeather] = useState({
        value: '',
        region: '',
    })

    useEffect(() => {
        console.log("Area:", weather.value);
        console.log("Region:", weather.region);
    })

    return (<>
        <AreaInput result = {{
            weather: weather,
            setWeather: setWeather}} />
        <TwoHourWeather />
        <FourDayWeather />
        <PSI region = {weather.region}/>
        <UVI />
    </>)
}

export default WeatherContainer;