import AreaInput from '../components/AreaInput';
import PSI from '../components/PSI';
import { useState } from 'react';
import UVI from '../components/UVI';
import App from '../App';
import FourDayWeather from '../components/FourDayWeather';
import TwoHourWeather from '../components/TwoHourWeather';

const WeatherContainer = () => {

    const [area, setArea] = useState('');
    const [region, setRegion] = useState('');

    const userRegion = (userInput) => {
        setRegion(userInput)
    }

    const userArea = (userInput) => {
        setArea(userInput)
    }

    return (<>
        <App userRegion={userRegion} userArea={userArea} />
        <TwoHourWeather area={area} />
        <FourDayWeather region={region} />
        <PSI region={region} />
        <UVI />
    </>)
}

export default WeatherContainer;