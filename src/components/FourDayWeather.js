import { useState, useEffect } from 'react';
import dateFormat from 'dateformat';
import API from '../API';
import '../styles/FourDayWeather.css';

const FourDayWeather = () => {

    const [forecastArray, setForecastArray] = useState([]);
    const [threeDayForecast, setThreeDayForecast] = useState([]);
    const [temp, setTemp] = useState({});
    const [time, setTime] = useState(''); //for checking only

    const getFourDayWeather = async () => {
        const { status, data } = await API.get('/environment/4-day-weather-forecast');
        const forecastArray = data.items[0].forecasts;
        const threeDayForecast = data.items[0].forecasts[0].forecast;
        const temperature = data.items[0].forecasts[0].temperature;
        const timestamp = data.items[0].update_timestamp;
        if (status === 200) {
            setForecastArray(forecastArray);
            setThreeDayForecast(threeDayForecast);
            setTemp(temperature);
            setTime(timestamp);
        }
    }

    var weatherIcon;
    switch (true) {
        case threeDayForecast.includes("thundery"):
            weatherIcon = "thunderstorm-4d";
            break;
        case threeDayForecast.includes("fair"):
            weatherIcon = "sunny-4d";
            break;
        case threeDayForecast.includes("cloudy" || "partly cloudy"):
            weatherIcon = 'cloudy-4d';
            break;
        case threeDayForecast.includes("showers" || "moderate rain"):
            weatherIcon = 'showers-4d';
            break;
        case threeDayForecast.includes("light"):
            weatherIcon = 'light-rain-4d';
            break;
    }

    const forecastList = forecastArray.map((f, i) => {
        if (i < 3) {
            return (
                <div className='four-day-list'>
                    <div id='date'>
                        {dateFormat(f.date, "dd mmm")}
                    </div>
                    <div className='temp-weather'>
                        <div>
                            {f.temperature.low}°<br/>
                            {f.temperature.high}°
                        </div>
                        <div className='weather-icon' id={weatherIcon}></div>
                    </div>
                    <div className='forecast'>
                        {f.forecast}
                    </div>
                </div>)
        };
    })

    useEffect(() => {
        getFourDayWeather();
    }, [time]);

    return (<>
        <div className='four-day-container'>
            {forecastList}
        </div>
    </>);

}

export default FourDayWeather; 