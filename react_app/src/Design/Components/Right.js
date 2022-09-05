import React from "react";
import Hum from "./Hum";
import Temp from "./Temp";

export default function Right(prop) {
  return (
    <div style={{ marginTop: "15%" }}>
      <div style={{ marginLeft: "50vh" }}>
        <p
          style={{
            fontSize: "32px",
            marginTop: "100px",
            color: "white",
            margin: "0px",
            textShadow: "2px 1px 10px white",
            opacity: "0.8",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Tempreture 
        </p>
        <Temp d={prop.t}/>
        <p
          style={{
            fontSize: "32px",
            marginTop: "50px",
            color: "white",
            margin: "0px",
            textShadow: "2px 1px 10px white",
            opacity: "0.8",
            color: "black",
            fontWeight: "bold",
            
          }}
        >
          Humidity
        </p>
        <Hum d={prop.h}/>
      </div>
    </div>
  );
}
