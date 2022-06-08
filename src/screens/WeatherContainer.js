import AreaInput from '../components/AreaInput';
import PSI from '../components/PSI';
import { useState, useEffect } from 'react';
import UVI from '../components/UVI';
import App from '../App';
import FourDayWeather from '../components/FourDayWeather';
import TwoHourWeather from '../components/TwoHourWeather';

const WeatherContainer = () => {

    const [answer, setAnswer] = useState({
        area: '',
        region: '',
    })

    return (<>
        <AreaInput answer = {{
            answer: answer,
            setAnswer: setAnswer}} />
        <TwoHourWeather />
        <FourDayWeather />
        <PSI region = {answer.region}/>
        <UVI />
    </>)
}

export default WeatherContainer;