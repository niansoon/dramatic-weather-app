import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import API from "../API";
import '../styles/TwoHourWeather.css';

const TwoHourWeather = (props) => {

    const [weatherIcon, setWeatherIcon] = useState('');
    const [weather, setWeather] = useState([]);
    const [time, setTime] = useState("");
    const [temp, setTemp] = useState({});

    const getWeather = async () => {
        const { status, data } = await API.get(
            "/environment/2-hour-weather-forecast"
        );
        if (status === 200) {
            setWeather(data.items[0].forecasts);
            setTime(data.items[0].update_timestamp);
        }
    };

    const getTemperature = async () => {
        const { status, data } = await API.get(
            "/environment/24-hour-weather-forecast"
        );
        if (status === 200) {
            setTemp(data.items[0].general.temperature);
            return (status);
        }
    }

    const userArea = props.area;
    const currentWeather = weather.filter((f) => f.area === userArea).map(filtered => filtered.forecast);
    console.log('LOOK AT ME', weather)

    useEffect(() => {
        getWeather();
        getTemperature();

        const stringWeather = currentWeather.join();

        switch (true) {
            case stringWeather.includes("Thundery"):
                setWeatherIcon('thunderstorm-2hr');
                break;
            case stringWeather.includes("Fair"):
                setWeatherIcon('sunny-2hr');
                break;
            case stringWeather.includes("Cloudy" || "Partly Cloudy"):
                setWeatherIcon('cloudy-2hr');
                break;
            case stringWeather.includes("Showers" || "Moderate Rain"):
                setWeatherIcon('showers-2hr');
                break;
            case stringWeather.includes("Light"):
                setWeatherIcon('light-rain-2hr');
                break;
        }
    }, [userArea, time]);

    return (

        <div className="weather-container-2hr">
            <div id="left">
                <h2>{userArea}</h2>
                <div className="temp-container">
                    High 
                    <div className="temp">{temp.high}°</div>
                    Low 
                    <div className="temp">{temp.low}°</div>
                </div>
            </div>
            <div id="right">
                Last updated at <br />{dateFormat(time, "h:MM TT")}
                <div className='weather-icon-2hr' id={weatherIcon}></div>
                <h3 id="current-weather">{currentWeather}</h3>
            </div>

        </div>
    );
};


export default TwoHourWeather;
