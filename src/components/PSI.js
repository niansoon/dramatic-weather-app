import { useState, useEffect } from 'react'; 
import API from '../API';
import dateFormat from 'dateformat';

const PSI = () => {

    const [index, setIndex] = useState({});
    const [time, setTime] = useState('');

    const getPSI = async () => {
        const { status, data } = await API.get('/environment/psi');
        const readings = data.items[0].readings.psi_twenty_four_hourly;
        const timestamp = data.items[0].timestamp;
        if (status === 200) {
            setIndex(readings);
            setTime(timestamp)
        }
    }

    useEffect(() => {
        getPSI();
    }, []);

    return (<>
        <h2>PSI index</h2> 
        <div className='subheader'>As of {dateFormat(time, "dddd, dS mmmm yyyy, h:MM TT")}</div>
        <ul>
            <li>National: {index.national}</li>
            <li>North: {index.north}</li>
            <li>South: {index.south}</li>
            <li>East: {index.east}</li>
            <li>West: {index.west}</li>
        </ul>
    </>)

}

export default PSI; 