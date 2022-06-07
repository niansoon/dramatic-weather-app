import {useState} from 'react';
import API from '../API';

const TwoHourWeather = () => {

    const [weather, setWeather] = useState([]);
    const [time, setTime] = useState('');

    const getWeather = async () => {
        const {status, data} = await API.get('/environment/2-hour-weather-forecast');
        if (status === 200) {
            setWeather(data.items[0].forecasts);
            setTime(data.items[0].update_timestamp);
        }
    }

    return (
        <div>
        {weather}
        </div>
    )

}

export default TwoHourWeather;