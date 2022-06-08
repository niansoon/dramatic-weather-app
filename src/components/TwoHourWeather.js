import { useEffect, useState } from 'react';
import API from '../API';

const TwoHourWeather = (props) => {

    const [weather, setWeather] = useState([]);
    const [time, setTime] = useState('');

    const getWeather = async () => {
        const { status, data } = await API.get('/environment/2-hour-weather-forecast');
        if (status === 200) {
            setWeather(data.items[0].forecasts);
            setTime(data.items[0].update_timestamp);
        }
    }

    const userArea = props.area // replace props.area with specific area for testing
    const currentWeather = weather.filter(f => f.area === userArea).map(filtered => <li>{filtered.forecast}</li>)

    useEffect(() => {
        getWeather();
        console.log("2 hour weather called");
    }, [time])

    return (<>
        <h2>2-hour Weather Forecast</h2>
        <div>
            {userArea}
            {currentWeather}
        </div>
    </>)

}

export default TwoHourWeather;