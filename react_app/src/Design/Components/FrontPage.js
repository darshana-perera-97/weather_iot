import React from "react";
import Clock from "react-digital-clock";

export default function FrontPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ padding: "50px" }}>
        <h1
          style={{
            color: "white",
            textShadow: "2px 1px 10px blue",
            fontSize: "40px",
            margin: "0px",
          }}
        >
          Weather Application
        </h1>
        <p
          style={{
            fontSize: "40px",
            margin: "0px",
            textShadow: "2px 1px 10px grey",
            fontWeight: "bold",
          }}
        >
          <Clock />
        </p>
        <div style={{ marginTop: "100%" }}>
          <p
            style={{
              fontSize: "25px",
              marginTop: "100px",
              color: "white",
              margin: "0px",
              textShadow: "2px 1px 10px grey",
              opacity: "0.6",
              //   fontWeight: "bold",
            }}
          >
            Location :
          </p>
          <p
            style={{
              fontSize: "40px",
              color: "white",
              margin: "0px",
              textShadow: "2px 1px 10px grey",
              //   fontWeight: "bold",
            }}
          >
            Chilaw,Sri Lanka
          </p>
          <p style={{ color: "white", margin: "0px", opacity: "0.8",paddingTop:"10px" }}>
            A project with
          </p>
          <p style={{ color: "gold", margin: "0px",fontSize:"20px" }}>
            React JS + Firebase + Arduino
          </p>
        </div>
      </div>
    </div>
  );
}
