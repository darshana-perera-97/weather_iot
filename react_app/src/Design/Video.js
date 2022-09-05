import React from "react";
import videoBg from "./back3.mp4";

export default function Video() {
  return (
    <div>
      <video
        loop
        autoPlay
        muted
        style={{
          objectFit: "cover",
          zIndex: "-1",
          height: "99.4vh",
          width: "100%",
          margin: "0px",
        }}
      >
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
}
