import AreaInput from '../components/AreaInput';
import PSI from '../components/PSI';
import { useState } from 'react';
import UVI from '../components/UVI';
import App from '../App';
import FourDayWeather from '../components/FourDayWeather';
import TwoHourWeather from '../components/TwoHourWeather';

const WeatherContainer = () => {

    const [region, setRegion] = useState('');

    const userRegion = (userInput) => {
        setRegion(userInput)
    }

    return (<>
        <App userRegion={userRegion}/>
        <TwoHourWeather />
        <FourDayWeather />
        <PSI region={region}/>
        <UVI />
    </>)
}

export default WeatherContainer;