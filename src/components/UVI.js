import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UVI.css";
import dateFormat from "dateformat";

const UVIndex = axios.create({ baseURL: "https://api.data.gov.sg" });

const UVI = () => {
    const [display, setDisplay] = useState("");
    const [colour, setColour] = useState("");
    const [status, setStatus] = useState("");
    const [time, setTime] = useState("");

    let styles = "";



    const listUV = async () => {
        const { status, data } = await UVIndex.get("v1/environment/uv-index");
        if (status === 200) {
            setDisplay(data.items[0].index[0].value);
            setTime(data.items[0].index[0].timestamp);
            return status;
        }
    };

    const handleColour = async () => {
        if (display < 3) {
            styles = "greenUV";
            setStatus("Low");
        } else if (display < 6 || display > 2) {
            styles = "yellowUV";
            setStatus("Moderate");
        } else if (display < 8 || display > 5) {
            styles = "orangeUV";
            setStatus("High");
        } else if (display < 11 || display > 7) {
            styles = "redUV";
            setStatus("Very High");
        } else if (display > 10) {
            styles = "purpleUV";
            setStatus("Extreme");
        }
        return setColour(styles);
    };

    useEffect(() => {
        listUV();
        handleColour();
        console.log("UV", display);
        console.log("colour", colour);
    }, [handleColour]);

    return (
        <div className="uvi-container">
            <div className="uvi-left-column">
            <div className="uvDisplay" id={colour}>
                {display}
            </div>
            <h3 id={colour} style={{ border: '0px' }}>{status}</h3>
            </div>
            <div className="uvi-right-column">
                <h2>UVI</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Index Scale</th>
                            <th>Severity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0 - 2</td>
                            <td>Low</td>
                        </tr>
                        <tr>
                            <td>3 - 5</td>
                            <td>Moderate</td>
                        </tr>
                        <tr>
                            <td>6 - 7</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>8 - 10</td>
                            <td>Very High</td>
                        </tr>
                        <tr>
                            <td>Above 11</td>
                            <td>Extreme</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UVI;
