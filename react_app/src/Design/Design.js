import React from "react";
import { db } from "./firebase";
// import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";
import DataShow from "./DataShow";
import Video from "./Video";
import FrontPage from "./Components/FrontPage";
import Right from "./Components/Right";

export default function Design() {
  const [infor, setInfor] = React.useState([{ int: 0, float: 0 }]);
  React.useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setInfor(Object.values(data));
        if (infor[0] !== null) {
          console.log(infor[0].int);
        }
      }
    });
  }, []);

  return (
    <div>
      {/* {infor[0].int}
      <br />
      {infor[0].float} */}
      {/* <DataShow p={infor[0].float}/> */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FrontPage />
        <Right t={infor[0].tem} h={infor[0].hum}/>
        {/* <DataShow p={infor[0].int} /> */}
      </div>
      <Video />
    </div>
  );
}

//https://console.firebase.google.com/project/whetherapp-828b6/database/whetherapp-828b6-default-rtdb/data <<---aws
