import AreaInput from '../components/AreaInput';
import PSI from '../components/PSI';
import { useState, useEffect } from 'react';
import UVI from '../components/UVI';
import App from '../App';
import FourDayWeather from '../components/FourDayWeather';
import TwoHourWeather from '../components/TwoHourWeather';

const WeatherContainer = () => {

    const [weather, setWeather] = useState({
        area: '',
        region: '',
    })

    return (<>
        <AreaInput result = {{
            weather: weather,
            setWeather: setWeather}} />
        <TwoHourWeather />
        <FourDayWeather />
        <PSI region = {answer.region}/>
        <UVI />
    </>)
}

export default WeatherContainer;