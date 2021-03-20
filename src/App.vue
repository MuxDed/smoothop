
<template>
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
          <router-view />
      </div>
    </div>
</template>


<script>
import fire from "./fire";
export default {
  mounted() {
    const itemsRef = fire.database().ref("operations");
    alert(itemsRef)
  }
};
</script>
<!--<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>

<script>

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


firebase.initializeApp(firebaseConfig);
firebase.analytics(); 
</script>-->