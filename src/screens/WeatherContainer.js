import AreaInput from '../components/AreaInput';
import PSI from '../components/PSI';
import { useState } from 'react';

const WeatherContainer = () => {

    const [region, setRegion] = useState('');

    const userRegion = (userInput) => {
        setRegion(userInput)
    }

    return (<>
        <AreaInput userRegion={userRegion}/>
        <PSI region={region}/>
    </>)
}

export default WeatherContainer;