import { useState, useEffect } from 'react';
import dateFormat from 'dateformat';
import API from '../API';
import '../styles/PSI.css';

const PSI = (props) => {

    const [index, setIndex] = useState({});
    const [region, setRegion] = useState('');

    const getPSI = async () => {
        const { status, data } = await API.get('/environment/psi');
        const readings = data.items[0].readings.psi_twenty_four_hourly;
        if (status === 200) {
            setIndex(readings);
        }
    }

    useEffect(() => {
        getPSI();
        setRegion(props.region);
    }, [props.region]);

    var alertLevel;
    var airQuality;
    var currentIndex = index[region];

    switch (true) {
        case (currentIndex <= 50):
            alertLevel = "greenPSI";
            airQuality = "Good";
            break;
        case (51 <= currentIndex <= 100):
            alertLevel = "bluePSI";
            airQuality = "Moderate";
            break;
        case (101 <= currentIndex <= 200):
            alertLevel = "yellowPSI";
            airQuality = "Unhealthy";
            break;
        case (201 <= currentIndex <= 300):
            alertLevel = "orangePSI";
            airQuality = "Very Unhealthy";
            break;
        case (300 <= currentIndex):
            alertLevel = "redPSI";
            airQuality = "Hazardous";
            break;
        default:
            alertLevel = "Error";
            break;
    }

    return (
        <div className='psi-container'>
            <div className='left'>
                <div id='region'>
                    {region.toUpperCase()}
                </div>
                <div className='psi-circle' id={alertLevel}>
                    {index[region]}
                </div>
                <h3 className='air-quality'>
                    {airQuality}
                </h3>
            </div>
            <div className='right'>
                <h2>PSI</h2>
                <table>
                    <thead>
                        <tr>
                            <th>PSI</th>
                            <th>Air Quality</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0 - 50</td>
                            <td>Good</td>
                        </tr>
                        <tr>
                            <td>51 - 100</td>
                            <td>Moderate</td>
                        </tr>
                        <tr>
                            <td>101 - 200</td>
                            <td>Unhealthy</td>
                        </tr>
                        <tr>
                            <td>201-300</td>
                            <td>V. Unhealthy</td>
                        </tr>
                        <tr>
                            <td>Above 300</td>
                            <td>Hazardous</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default PSI; 