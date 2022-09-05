import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyADhcI8R-ZG00EHmxMIP1xeBpZ2scgA_x0",
  authDomain: "whetherapp-828b6.firebaseapp.com",
  databaseURL:
    "https://whetherapp-828b6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "whetherapp-828b6",
  storageBucket: "whetherapp-828b6.appspot.com",
  messagingSenderId: "39153190487",
  appId: "1:39153190487:web:72ce167d7770922f838512",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
