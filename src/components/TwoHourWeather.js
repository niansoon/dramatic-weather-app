import { useEffect, useState } from "react";
import API from "../API";
import '../styles/TwoHourWeather.css'

const TwoHourWeather = (props) => {
    const [weatherIcon, setWeatherIcon] = useState('');
    const [weather, setWeather] = useState([]);
    const [time, setTime] = useState("");

    const getWeather = async () => {
        const { status, data } = await API.get(
            "/environment/2-hour-weather-forecast"
        );
        if (status === 200) {
            setWeather(data.items[0].forecasts);
            setTime(data.items[0].update_timestamp);
        }
    };

    const userArea = props.area;
    const currentWeather = weather.filter((f) => f.area === userArea).map(filtered => filtered.forecast);

    useEffect(() => {
        getWeather();
        console.log("weather", weather);
        console.log("currentWeather", currentWeather);
        console.log("weather-icon", weatherIcon);



        switch (true) {
            case currentWeather.includes("Thundery"):
                setWeatherIcon('thunderstorm');
                break;
            case currentWeather.includes("Fair"):
                setWeatherIcon('sunny');
                break;
            case currentWeather.includes("Partly Cloudy"):
                setWeatherIcon('cloudy');
                break;
            case currentWeather.includes("Showers"):
                setWeatherIcon('showers');
                break;
            default:
       /*  setWeatherIcon('sunny');
        break; */}


    }, [userArea, time]);

    return (
        <div>
            <h2>2 Hour Weather</h2>
            {userArea}
            <p>{/* {currentWeather} */}</p>
            <div className='weather-icon' id={weatherIcon}></div>
        </div>
    );
};


export default TwoHourWeather;
