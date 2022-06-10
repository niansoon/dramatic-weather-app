import React, { useEffect, useState } from "react";
import API from "../API";
import '../styles/TwentyFourHourWeather.css';

const TwentyFourHourForecast = (props) => {

    const [twentyFourHourArray, setTwentyFourHourArray] = useState([]);
    const [region, setRegion] = useState('');

    const getTwentyFourHourWeather = async () => {
        const { status, data } = await API.get('/environment/24-hour-weather-forecast');
        const twentyFourHourArray = data.items[0].periods;
        if (status === 200) {
            setTwentyFourHourArray(twentyFourHourArray);
        }
    }

    var weatherIcon;
    const forecastArray = twentyFourHourArray.map(i => { return i.regions[region] });
    const iconArray = forecastArray.map(i => {
        switch (true) {
            case i.includes("Thundery"):
                weatherIcon = "thunderstorm-24hr";
                break;
            case i.includes("Fair"):
                weatherIcon = "sunny-24hr";
                break;
            case i.includes("Cloudy" || "Partly Cloudy"):
                weatherIcon = 'cloudy-24hr';
                break;
            case i.includes("Showers" || "Moderate Rain"):
                weatherIcon = 'showers-24hr';
                break;
            case i.includes("Light"):
                weatherIcon = 'light-rain-24hr';
                break;
            default:
                weatherIcon = '';
                break;
        }
        return weatherIcon
    })

    var timing;
    const timingArray = twentyFourHourArray.map(i => { return i.time.start });
    const dailyArray = timingArray.map(i => {
        switch (true) {
            case (i[12] === '8' || i[12] === '0'):
                timing = 'Night';
                break;
            case (i[12] === '6'):
                timing = 'Morning';
                break;
            case (i[12] === '2'):
                timing = 'Afternoon';
                break;
            default:
                timing = 'Default';
                break;
        }
        return timing;
    })

    const forecastList = forecastArray.map((f, i) => {
        if (i < 3) {
            return (
                <div className="weather-list-24hr">
                    <div className='timing'>{dailyArray[i]}</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className={`weather-icon-24hr ${iconArray[i]}`}></div>
                    </div>
                    <div className='forecast'>
                        {f}
                    </div>
                </div>
            )
        };
    })


    useEffect(() => {
        getTwentyFourHourWeather();
        setRegion(props.region ? props.region : 'central')
    }, [props.region]);

    return (
        <div className="container-24hr">
            {forecastList}
        </div>
    );
};

export default TwentyFourHourForecast;