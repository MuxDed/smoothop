import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_MkB-FVAg5MYBGUpQoYN_-OCpnZZahO8",
    authDomain: "hospitalscheduler-41566.firebaseapp.com",
    databaseURL: "https://hospitalscheduler-41566-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hospitalscheduler-41566",
    storageBucket: "hospitalscheduler-41566.appspot.com",
    messagingSenderId: "441107560388",
    appId: "1:441107560388:web:c8b1a9dbddf62d3d0f1691",
    measurementId: "G-CJKXKZ6LCY"
  };

var fire = firebase.initializeApp(firebaseConfig);
export default fire;