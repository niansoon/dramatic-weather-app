import AreaInput from '../components/AreaInput';
import PSI from '../components/PSI';
import { useState } from 'react';
import UVI from '../components/UVI';
import App from '../App';

const WeatherContainer = () => {

    const [region, setRegion] = useState('');

    const userRegion = (userInput) => {
        setRegion(userInput)
    }

    return (<>
        <App userRegion={userRegion}/>
        {/* <AreaInput userRegion={userRegion}/> */}
        <PSI region={region}/>
        <UVI />
    </>)
}

export default WeatherContainer;