import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const UVIndex = axios.create({ baseURL: "https://api.data.gov.sg" });

const UVI = () => {
  const [display, setDisplay] = useState("");
  const [colour, setColour] = useState("");
  const [status, setStatus] = useState("");

  let styles = "";



  const listUV = async () => {
    const { status, data } = await UVIndex.get("v1/environment/uv-index");
    if (status === 200) {
      setDisplay(data.items[0].index[0].value);
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
    } else if (display < 11 || display > 8) {
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
    <div>
      <h2>UV Index</h2>
      <h3 className="uvDisplay" id={colour}>
        {display}
      </h3>
      <h2 id={colour} style={{border: '0px solid grey'}}>{status}</h2>
      {/*         <h3 className="uvDisplay">Current: {display}</h3> */}
      <table></table>
    </div>
  );
};

export default UVI;
