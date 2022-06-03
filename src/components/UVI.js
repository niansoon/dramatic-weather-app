import React, {useState, useEffect} from "react";
import axios from 'axios';
import "../App.css";


const UVIndex = axios.create({baseURL: "https://api.data.gov.sg"});

const UVI = () => {
    const [display, setDisplay] = useState('');
    const [colour, setColour] = useState('');

    useEffect (() => {
        listUV();
        handleColour();
        console.log("UV", display);
        console.log("colour", colour);
    }, [])



    const listUV = async () => {
        const {status, data} = await UVIndex.get("v1/environment/uv-index");
        if (status === 200) {
            setDisplay(data.items[0].index[0].value);
            return status;
        };
    };

    const handleColour = async () => {
        let styles = {
            border : '',
        };
        if (display > 3){
            styles = {
                border:'20px solid red',
            };
        } else if (display < 3) {
            styles = {
                border:'20px solid blue',
            };
        }
        return setColour(styles);
    } 


    return(
        <div>
        <h2>UV Index</h2>
        <h3 className="uvDisplay" style={colour}>Current: {display}</h3>
        </div>
    )
}

export default UVI;


