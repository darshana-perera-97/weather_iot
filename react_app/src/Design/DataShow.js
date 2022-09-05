import React from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

export default function DataShow(p) {
  // console.log(p.p);
  const props = {
    percent: p.p, // is require
    colorSlice: "#00a1ff",
    colorCircle: "#00a1ff",
    fontColor: "#000000",
    fontSize: "1.6rem",
    fontWeight: 400,
    size: 150,
    stroke: 7,
    strokeBottom: 5,
    speed: 60,
    cut: 0,
    rotation: -90,
    opacity: 10,
    fill: "#FFFFFF",
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    strokeDasharray: "10,1",
    inverse: false,
    round: false,
    number: true,
    linearGradient: ["#0084FF", "#158EFF"],
  };
  return (
    <div>
      <CircularProgressBar {...props} />
    </div>
  );
}
